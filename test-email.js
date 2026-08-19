const fs = require("fs");
const envContent = fs.readFileSync(".env", "utf8");
const match = envContent.match(/RESEND_API_KEY=["\x27]?(.*?)["\x27]?$/m);
const apiKey = match ? match[1] : "";

async function sendTestEmail() {
  console.log("📨 Sending test email via Resend API...");
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: ["hajipurpa@gmail.com"],
        subject: "AI English App - Resend Connected",
        html: "<p>Your Resend email service is now <strong>connected and operational!</strong></p>"
      })
    });

    const data = await res.json();
    if (data.id) {
      console.log("✅ Email sent successfully! Message ID:", data.id);
      console.log("📬 Check your inbox at hajipurpa@gmail.com");
    } else {
      console.error("❌ Resend Error:", data);
    }
  } catch (err) {
    console.error("❌ Request Failed:", err.message);
  }
}

sendTestEmail();
