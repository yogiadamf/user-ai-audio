import { GoogleGenerativeAI } from "@google/generative-ai";

export const handleGenerateText = async (inputText) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

    try {
        const client = new GoogleGenerativeAI(apiKey);

        const model = client.getGenerativeModel({ model: "gemini-1.5-flash" });

        const chat = model.startChat({
            history: [
                {
                    role: "user",
                    parts: [{ text: "Bagaimana kamu melihat dirimu sekarang ?" }],
                },
            ],
        });
        const result = await chat.sendMessage(inputText);
        return result.response.text();
    } catch (error) {
        console.error("Error generating text:", error);
    }
};