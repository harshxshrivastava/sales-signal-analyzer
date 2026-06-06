const express = require("express");
const router = express.Router();

const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

router.post("/", async (req, res) => {
  try {
    const { transcript } = req.body;

    if (!transcript) {
      return res.status(400).json({
        error: "Transcript is required",
      });
    }

    const prompt = `
Analyze this sales transcript.

Identify:
1. buying_interest
2. objection
3. confusion

Return ONLY valid JSON.

Format:

{
  "signals": [
    {
      "type": "buying_interest",
      "quote": "exact quote",
      "tip": "one coaching tip"
    }
  ]
}

Transcript:
${transcript}
`;

    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0,
      });

    const responseText =
      completion.choices[0].message.content;

    console.log("Groq Response:", responseText);

    const cleanedResponse = responseText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsedResponse =
      JSON.parse(cleanedResponse);

    res.status(200).json(parsedResponse);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router;