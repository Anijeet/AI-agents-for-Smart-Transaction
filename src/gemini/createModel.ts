import { GoogleGenerativeAI } from "@google/generative-ai";

export function createModel(genAI: GoogleGenerativeAI) {
    // You can choose the appropriate Gemini model
    // Options include: gemini-pro, gemini-ultra, etc.
    return genAI.getGenerativeModel({ model: "gemini-pro" });
  }