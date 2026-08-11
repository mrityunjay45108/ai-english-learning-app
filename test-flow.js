const http = require('http');

function req(options, body) {
  return new Promise((resolve) => {
    const r = http.request(options, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch(e) { resolve(data); }
      });
    });
    if (body) r.write(body);
    r.end();
  });
}

async function run() {
  console.log('--- 1. HEALTH CHECK (3005) ---');
  const health = await req({ hostname: '127.0.0.1', port: 3005, path: '/api/v1/health', method: 'GET' });
  console.log(health);
}
run();