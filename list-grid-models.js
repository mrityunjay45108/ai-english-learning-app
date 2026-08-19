const API_KEY = "mwJRa8YMF6BJr4MOqvW8WIJFARUJ97KD0gLMy6rx8uk";

async function getModels() {
  try {
    const res = await fetch("https://api.thegrid.ai/v1/models", {
      headers: { "Authorization": `Bearer ${API_KEY}` }
    });
    const data = await res.json();
    console.log("📋 Available Models on The Grid:\n");
    if (data.data) {
      data.data.forEach(m => console.log(`• ${m.id}`));
    } else {
      console.log(data);
    }
  } catch (err) {
    console.error("❌ Error fetching models:", err.message);
  }
}

getModels();
