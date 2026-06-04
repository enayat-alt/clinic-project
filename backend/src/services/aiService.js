// npm install openai
// const OpenAI = require("openai");
// const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.askMedicalQuestion = async (question) => {
  // const response = await openai.chat.completions.create({
  //   model: "gpt-4",
  //   messages: [
  //     { role: "system", content: "You are a helpful medical assistant." },
  //     { role: "user", content: question },
  //   ],
  // });
  // return response.choices[0].message.content;
  return "AI service not configured yet. Add your OpenAI API key to .env";
};
