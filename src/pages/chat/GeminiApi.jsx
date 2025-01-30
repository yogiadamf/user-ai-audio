import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const GenerativeAiComponent = () => {
  const [inputText, setInputText] = useState("");
  const [generatedResponse, setGeneratedResponse] = useState("");

  const handleGenerateText = async () => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    console.log(apiKey);

    if (!apiKey) {
      console.error("Google API key is missing.");
      return;
    }

    try {
      const client = new GoogleGenerativeAI(apiKey);

      const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(inputText);
      setGeneratedResponse(result.response.text());
    } catch (error) {
      console.error("Error generating text:", error);
    }
  };

  return (
    <div>
      <h1>Generative AI in React</h1>
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Enter a prompt here"
      />
      <button onClick={handleGenerateText}>Generate Text</button>
      {generatedResponse && <p>Generated Response: {generatedResponse}</p>}
    </div>
  );
};

export default GenerativeAiComponent;
