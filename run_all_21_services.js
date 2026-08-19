const http = require("http");
const fs = require("fs");
const path = require("path");

// 21 Microservices Matrix
const services = [
  { name: "api-gateway", port: 3000, desc: "Unified API Gateway & Reverse Proxy" },
  { name: "auth-service", port: 3001, desc: "JWT Authentication & Session Manager" },
  { name: "user-service", port: 3002, desc: "User Profiles & Preferences Service" },
  { name: "course-service", port: 3003, desc: "Course Curriculum & Lesson Engine" },
  { name: "learning-service", port: 3005, desc: "Adaptive Learning & SRS Engine" },
  { name: "notification-service", port: 3009, desc: "Email, SMS & Push Alerts Service" },
  { name: "analytics-service", port: 3010, desc: "Student Telemetry & Progress Metrics" },
  { name: "ai-tutor-service", port: 3011, desc: "AI Conversational Tutor (LLM Engine)" },
  { name: "speech-service", port: 3012, desc: "Speech-to-Text & Pronunciation Evaluator" },
  { name: "media-service", port: 3013, desc: "Audio & Video CDN Streaming Service" },
  { name: "vocab-service", port: 3014, desc: "Spaced Repetition Flashcards & Dictionary" },
  { name: "grammar-service", port: 3015, desc: "Hindi-English Grammar Analysis Engine" },
  { name: "payment-service", port: 3016, desc: "Mock & Live Subscriptions Engine" },
  { name: "gamification-service", port: 3017, desc: "XP, Badges & Leaderboards Service" },
  { name: "admin-service", port: 3018, desc: "Admin Backoffice & Content CMS" },
  { name: "realtime-service", port: 3019, desc: "WebSockets 1-on-1 Practice Rooms" },
  { name: "search-service", port: 3020, desc: "Elastic Search & Dictionary Indexer" },
  { name: "feedback-service", port: 3021, desc: "User Bug Reports & Lesson Feedback" },
  { name: "translation-service", port: 3022, desc: "Hindi-English Dual Subtitle Engine" }
];

services.forEach(svc => {
  const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
      res.writeHead(200);
      res.end();
      return;
    }

    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      let parsedBody = {};
      try { parsedBody = JSON.parse(body || "{}"); } catch(e){}

      // Custom Endpoints per Service
      if (svc.port === 3000 || svc.port === 3011) { // AI Tutor & Gateway Chat
        if (req.url.includes("/api/v1/ai/chat") || req.url.includes("/chat")) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({
            status: "success",
            reply: `Emma AI says: Excellent sentence! Keep up your speaking flow on "${parsedBody.message || 'English'}"!`
          }));
          return;
        }
      }

      if (svc.port === 3016) { // Payment Service
        if (req.url.includes("/create-intent")) {
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ id: "mock_" + Date.now(), amount: 499, status: "succeeded" }));
          return;
        }
      }

      // Default Health Check Response
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        service: svc.name,
        port: svc.port,
        status: "LIVE_ACTIVE",
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
      }));
    });
  });

  server.on("error", (err) => {
    console.log(`⚠️ Port ${svc.port} already running [${svc.name}]`);
  });

  server.listen(svc.port, () => {
    console.log(`🚀 [${svc.name}] is LIVE on http://localhost:${svc.port}`);
  });
});
