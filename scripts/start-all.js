const { spawn } = require('child_process');
const http = require('http');

const services = [
  { name: 'API Gateway', dir: 'services/api-gateway', port: 3000, path: '/health' },
  { name: 'Auth Service', dir: 'services/auth-service', port: 3001, path: '/api/v1/health' },
  { name: 'User Service', dir: 'services/user-service', port: 3002, path: '/api/v1/health' },
  { name: 'Course Service', dir: 'services/course-service', port: 3003, path: '/api/v1/health' },
  { name: 'Speech Service', dir: 'services/speech-service', port: 3012, path: '/api/v1/health' },
  { name: 'Admin Service', dir: 'services/admin-service', port: 3018, path: '/api/v1/health' },
  { name: 'Real-time Service', dir: 'services/realtime-service', port: 3019, path: '/api/v1/health' },
  { name: 'Next.js Web', dir: 'apps/web', port: 3032, path: '/' },
  { name: 'Admin UI', dir: 'apps/admin-ui', port: 3033, path: '/login' },
];

console.log('🚀 Starting AI English Learning Platform Orchestrator...\n');

services.forEach((s) => {
  console.log(`▶️ Launching ${s.name} (Port${s.port})...`);
  const child = spawn('pnpm', ['dev'], {
    cwd: s.dir,
    shell: true,
    stdio: 'ignore',
  });

  child.on('error', (err) => {
    console.error(`❌ Failed to start ${s.name}:`, err.message);
  });
});

console.log('\n⏳ System warming up... Verifying health in 12 seconds...\n');

setTimeout(async () => {
  console.log('🧪 --- SYSTEM HEALTH DASHBOARD ---');
  for (const s of services) {
    const isUp = await checkHealth(s.port, s.path);
    const statusStr = isUp ? '✅ RUNNING' : '⚠️ STANDBY / STARTING';
    console.log(`${statusStr} | ${s.name.padEnd(20)} -> http://localhost:${s.port}`);
  }
}, 18000);

function checkHealth(port, path) {
  return new Promise((resolve) => {
    const req = http.request({ hostname: '127.0.0.1', port, path, method: 'GET', timeout: 2000 }, (res) => {
      resolve(res.statusCode >= 200 && res.statusCode < 500);
    });
    req.on('error', () => resolve(false));
    req.end();
  });
}
