const express = require('express');
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const app = express();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Middleware
app.use(express.json());

// Other routes (like health checks) can go here
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

// ======== ADD YOUR AI TASK ENDPOINT HERE ========
app.post('/api/ai/tasks', async (req, res) => {
  try {
    const { userPrompt } = req.body;
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
   const buildPrompt = (userPrompt) => `
  Extract task details STRICTLY in this JSON format:
  {
    "title": "very short description (3-5 words max)",
    "dueDate": "YYYY-MM-DD or 'none' if no date mentioned",
    "priority": "1 (urgent), 2 (normal), or 3 (low)"
  }

  RULES:
  1. Date detection:
     - "due 23-07-2025" → "2025-07-23"
     - "by next Friday" → calculate the date
     - "deadline tomorrow" → tomorrow's date
  2. Priority detection:
     - "priority-1", "urgent", "critical" → 1
     - "priority-2", "important" → 2
     - "priority-3", "low", "whenever" → 3
     - Default → 2

  TODAY IS: ${new Date().toISOString().split('T')[0]}

  EXAMPLE INPUT: "Finish project by 25-07-2025 priority-1"
  EXAMPLE OUTPUT: {"title":"Finish project","dueDate":"2025-07-25","priority":1}

  USER INPUT: "${userPrompt}"
  RESPOND WITH ONLY VALID JSON:
`;

    const result = await model.generateContent(prompt);
    const text = result.response.text();
    
    // Extract JSON
    const jsonStart = text.indexOf('{');
    const jsonEnd = text.lastIndexOf('}');
    const task = JSON.parse(text.slice(jsonStart, jsonEnd + 1));

    // Validate
    if (!task.title || !task.dueDate || !task.priority) {
      throw new Error('Invalid task format');
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({ 
      error: "AI processing failed",
      details: process.env.NODE_ENV === 'development' ? error.message : null
    });
  }
});
// ======== END OF AI ENDPOINT ========

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});