import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Button } from "@/components/ui/button";

const GenerativeAiComponent = () => {
  const [inputText, setInputText] = useState("");
  const [generatedResponse, setGeneratedResponse] = useState("");

  const handleGenerateText = async () => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    if (!apiKey) {
      console.error("Google API key is missing.");
      return;
    }

    try {
      const client = new GoogleGenerativeAI(apiKey);

      const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });

      const chat = model.startChat({
        history: [
          {
            role: "user",
            parts: [{ text: "Bagaimana kamu melihat dirimu sekarang ?" }],
          },
          {
            role: "model",
            parts: [
              {
                text: "Saya melihat diri saya sebagai individu yang terus berkembang dan belajar. Saya menyadari bahwa saya tidak sempurna, tetapi saya selalu berusaha untuk menjadi versi yang lebih baik dari diri saya. Saya terbuka terhadap pengalaman baru dan tidak takut untuk keluar dari zona nyaman saya. Saya percaya bahwa setiap tantangan adalah kesempatan untuk tumbuh dan menjadi lebih kuat.",
              },
            ],
          },
          {
            role: "user",
            parts: [
              {
                text: "Baiklah, itu deskripsi diri yang bagus! Berhubung Anda menyebutkan tentang selalu berusaha menjadi lebih baik, apa satu area spesifik dalam kemampuan atau pengetahuan Anda yang ingin Anda tingkatkan saat ini?",
              },
            ],
          },
        ],
      });
      const result = await chat.sendMessage(inputText);
      setGeneratedResponse(result.response.text());
    } catch (error) {
      console.error("Error generating text:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1>Generative AI in React</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a prompt here"
      />
      <Button onClick={handleGenerateText}>Generate Text</Button>
      {generatedResponse && <p>{generatedResponse}</p>}
    </div>
  );
};

export default GenerativeAiComponent;
