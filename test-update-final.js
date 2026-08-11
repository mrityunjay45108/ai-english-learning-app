const http = require('http');

const loginData = JSON.stringify({
  email: "student_gateway@englishlearning.com",
  password: "MySecret@123"
});

const req = http.request({
  hostname: 'localhost',
  port: 3000,
  path: '/api/v1/auth/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(loginData)
  }
}, (res) => {
  let body = '';
  res.on('data', c => body += c);
  res.on('end', () => {
    const response = JSON.parse(body);
    const token = response.data?.accessToken;
    
    if (!token) {
      console.log('❌ Login failed');
      console.log('Response:', JSON.stringify(response, null, 2));
      return;
    }

    console.log('🔑 Login successful! Patching user preferences via Gateway...');

    const updateData = JSON.stringify({
      locale: "hi-IN",
      dailyGoalMinutes: 30,
      learningGoals: ["speak_fluently", "crack_interview"]
    });

    const updateReq = http.request({
      hostname: 'localhost',
      port: 3000,
      path: '/api/v1/users/me/preferences',
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(updateData)
      }
    }, (res2) => {
      let body2 = '';
      res2.on('data', c => body2 += c);
      res2.on('end', () => {
        console.log('\n🎉 PREFERENCES UPDATE RESPONSE:');
        try {
          const parsed = JSON.parse(body2);
          console.log(JSON.stringify(parsed, null, 2));
        } catch {
          console.log(body2);
        }
      });
    });

    updateReq.write(updateData);
    updateReq.end();
  });
});

req.write(loginData);
req.end();
