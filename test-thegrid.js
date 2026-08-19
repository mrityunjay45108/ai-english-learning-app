const API_KEY = "mwJRa8YMF6BJr4MOqvW8WIJFARUJ97KD0gLMy6rx8uk";

async function testGrid() {
  console.log("🔌 Testing The Grid API with model: text-standard...");
  try {
    const res = await fetch("https://api.thegrid.ai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "text-standard",
        messages: [{ role: "user", content: "Say 'Hello World! AI English Learning App is now connected.'" }]
      })
    });
    
    const data = await res.json();
    if (data.error) {
      console.error("❌ The Grid Error:", data.error.message || data.error);
    } else {
      console.log("✅ The Grid API Response:\n", data.choices?.[0]?.message?.content || data);
    }
  } catch (err) {
    console.error("❌ Request Failed:", err.message);
  }
}

testGrid();
