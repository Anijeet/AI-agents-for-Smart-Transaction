import { GenerativeModel } from "@google/generative-ai";

export async function generateContent(model: GenerativeModel, message: string) {
  try {
    // Generate a response from Gemini
    const result = await model.generateContent(message);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating content:", error);
    return "Error: Failed to generate content";
  }
}