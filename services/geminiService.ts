
import { GoogleGenAI } from "@google/genai";

// Use process.env.API_KEY directly as per guidelines for initialization
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFitnessAdvice = async (prompt: string) => {
  try {
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
