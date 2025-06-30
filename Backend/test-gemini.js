// test-gemini.js
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Hardcoded API Key (Replace with yours)
const API_KEY = "AIzaSyBWfLkPGSYlc3qOtWPHL4hcVXQYqwJ91Mg"; 

async function testGemini() {
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    console.log("Sending test prompt to Gemini...");
    const result = await model.generateContent("Hello");
    const text = result.response.text();
    
    console.log("✅ Success! Gemini response:");
    console.log(text);
  } catch (error) {
    console.error("❌ Failed to call Gemini:");
    console.error(error.message);
    console.log("\nTroubleshooting:");
    console.log("1. Verify API_KEY is correct");
    console.log("2. Check https://aistudio.google.com/app/apikey");
    console.log("3. Ensure billing is enabled in Google Cloud");
  }
}

testGemini();