
import { GoogleGenAI } from "@google/genai";

const resolveApiKey = () =>
  import.meta.env.VITE_GEMINI_API_KEY ||
  process.env.GEMINI_API_KEY ||
  process.env.API_KEY;

export const getFitnessAdvice = async (prompt: string) => {
  try {
    const apiKey = resolveApiKey();

    if (!apiKey) {
      console.error("Gemini API key missing. Set VITE_GEMINI_API_KEY in your environment.");
      return "I need a valid Gemini API key to respond. Please add your API key and try again.";
    }

    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are 'PowerOn AI', an elite personal training assistant. You provide concise, scientifically-backed fitness and nutrition advice. Keep responses under 150 words. Be motivating, professional, and performance-focused.",
      },
    });
    // Access the .text property directly instead of calling it as a method
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my performance servers. Please try again later.";
  }
};
