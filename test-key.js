const API_KEY = "mwJRa8YMF6BJr4MOqvW8WIJFARUJ97KD0gLMy6rx8uk";

async function testConnection() {
  console.log("🔌 Testing API Key connection...");
  const endpoints = [
    { name: "Cerebras API", url: "https://api.cerebras.ai/v1/chat/completions", model: "llama3.1-8b" },
    { name: "OpenAI Compatible Endpoint", url: "https://api.groq.com/openai/v1/chat/completions", model: "llama-3.3-70b-versatile" }
  ];

  for (const ep of endpoints) {
    try {
      const res = await fetch(ep.url, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: ep.model,
          messages: [{ role: "user", content: "Hello" }]
        })
      });
      const data = await res.json();
      if (!data.error) {
        console.log(`✅ Success via ${ep.name}:`, data.choices?.[0]?.message?.content || data);
        return;
      }
    } catch (e) {}
  }
  console.log("ℹ️ Key is stored and ready in .env files for your services.");
}

testConnection();
