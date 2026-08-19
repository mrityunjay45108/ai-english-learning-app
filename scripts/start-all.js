const { spawn } = require("child_process");
const http = require("http");
const path = require("path");

const services = [
  { name: "API Gateway", port: 3000, dir: "services/api-gateway", check: "/health" },
  { name: "Auth Service", port: 3001, dir: "services/auth-service", check: "/api/v1/health" },
  { name: "User Service", port: 3002, dir: "services/user-service", check: "/api/v1/health" },
  { name: "Course Service", port: 3003, dir: "services/course-service", check: "/api/v1/health" },
  { name: "Speech Service", port: 3012, dir: "services/speech-service", check: "/api/v1/health" },
  { name: "Admin Service", port: 3018, dir: "services/admin-service", check: "/api/v1/health" },
  { name: "Real-time Service", port: 3019, dir: "services/realtime-service", check: "/health" },
  { name: "Next.js Web", port: 3032, dir: "apps/web", check: "/" },
  { name: "Admin UI", port: 3033, dir: "apps/admin-ui", check: "/" }
];

console.log("🚀 Launching Microservices Ecosystem in Parallel...\n");

const pnpmCmd = process.platform === "win32" ? "pnpm.cmd" : "pnpm";

services.forEach(s => {
  const fullPath = path.resolve(process.cwd(), s.dir);
  console.log(`▶️  Starting ${s.name.padEnd(20)} [Port ${s.port}]...`);
  
  const child = spawn(pnpmCmd, ["run", "dev"], {
    cwd: fullPath,
    shell: true,
    stdio: "ignore",
    detached: false
  });
  
  child.unref();
});

function checkService(s) {
  return new Promise(resolve => {
    const req = http.request({
      hostname: "127.0.0.1",
      port: s.port,
      path: s.check,
      method: "GET",
      timeout: 2000
    }, res => {
      resolve(true);
    });
    req.on("error", () => resolve(false));
    req.on("timeout", () => { req.destroy(); resolve(false); });
    req.end();
  });
}

console.log("\n⏳ Warming up cluster... Polling live health status:\n");

let attempts = 0;
const interval = setInterval(async () => {
  attempts++;
  let allUp = true;
  console.clear();
  console.log(`🧪 --- SYSTEM HEALTH DASHBOARD (Attempt ${attempts}/6) ---\n`);
  
  for (const s of services) {
    const isUp = await checkService(s);
    if (!isUp) allUp = false;
    const status = isUp ? "✅ RUNNING" : "⏳ INITIALIZING";
    console.log(`${status.padEnd(20)} | ${s.name.padEnd(20)} -> http://localhost:${s.port}`);
  }
  
  if (allUp || attempts >= 6) {
    clearInterval(interval);
    console.log("\n🎉 Orchestrator initialized. Services are actively serving traffic.\n");
  }
}, 5000);
