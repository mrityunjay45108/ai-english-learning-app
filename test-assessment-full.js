const http = require('http');

function request(options, body) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    });
    req.on('error', reject);
    if (body) {
      req.write(body);
    }
    req.end();
  });
}

async function testAssessment() {
  console.log('=========================================');
  console.log('  ASSESSMENT SERVICE TEST');
  console.log('=========================================\n');

  // 1. Health Check
  console.log('1️⃣ Health Check:');
  try {
    const health = await request({
      hostname: 'localhost',
      port: 3005,
      path: '/api/v1/health',
      method: 'GET',
    });
    console.log('   ✅', health.status, '\n');
  } catch (e) {
    console.log('   ❌ Health check failed:', e.message);
    return;
  }

  // 2. Login
  console.log('2️⃣ Login:');
  let token;
  try {
    const loginResponse = await request({
      hostname: 'localhost',
      port: 3000,
      path: '/api/v1/auth/login',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }, JSON.stringify({
      email: 'student_gateway@englishlearning.com',
      password: 'MySecret@123'
    }));

    token = loginResponse.data?.accessToken;
    if (!token) {
      console.log('   ❌ Login failed!');
      console.log('   Response:', loginResponse);
      return;
    }
    console.log('   ✅ Login successful!\n');
  } catch (e) {
    console.log('   ❌ Login error:', e.message);
    return;
  }

  // 3. Start Assessment
  console.log('3️⃣ Start Assessment:');
  let assessmentId;
  try {
    const assessmentResponse = await request({
      hostname: 'localhost',
      port: 3005,
      path: '/api/v1/assessments/start',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    }, JSON.stringify({
      type: 'INITIAL',
      questionCount: 5,
      timeLimit: 10
    }));

    assessmentId = assessmentResponse.data?.id;
    if (!assessmentId) {
      console.log('   ❌ Assessment start failed!');
      console.log('   Response:', assessmentResponse);
      return;
    }
    console.log('   ✅ Assessment started:', assessmentId, '\n');
  } catch (e) {
    console.log('   ❌ Assessment start error:', e.message);
    return;
  }

  // 4. Get Questions
  console.log('4️⃣ Get Questions:');
  let questions;
  try {
    const questionsResponse = await request({
      hostname: 'localhost',
      port: 3005,
      path: '/api/v1/assessments/' + assessmentId + '/questions',
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    });

    questions = questionsResponse.data;
    if (!questions || questions.length === 0) {
      console.log('   ❌ No questions found!');
      return;
    }
    console.log('   ✅ Questions retrieved:', questions.length, '\n');
  } catch (e) {
    console.log('   ❌ Get questions error:', e.message);
    return;
  }

  // 5. Submit Answers (first 3 questions)
  console.log('5️⃣ Submit Answers:');
  let correctCount = 0;
  for (let i = 0; i < Math.min(3, questions.length); i++) {
    const q = questions[i];
    const answer = q.options && q.options.length > 0 ? q.options[0] : 'Test';
    
    try {
      const answerResponse = await request({
        hostname: 'localhost',
        port: 3005,
        path: '/api/v1/assessments/' + assessmentId + '/answer',
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      }, JSON.stringify({
        questionId: q.id,
        answer: answer,
        timeTaken: 5
      }));
      
      const isCorrect = answerResponse.data?.isCorrect;
      if (isCorrect) correctCount++;
      console.log(`   Q${i+1}: ${isCorrect ? '✅' : '❌'} (Score: ${answerResponse.data?.score || 0})`);
    } catch (e) {
      console.log(`   Q${i+1}: ❌ Error -`, e.message);
    }
  }
  console.log(`   ✅ ${correctCount}/${Math.min(3, questions.length)} correct\n`);

  // 6. Complete Assessment
  console.log('6️⃣ Complete Assessment:');
  try {
    const completeResponse = await request({
      hostname: 'localhost',
      port: 3005,
      path: '/api/v1/assessments/' + assessmentId + '/complete',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
    console.log('   ✅ Assessment completed\n');
  } catch (e) {
    console.log('   ❌ Complete error:', e.message);
    return;
  }

  // 7. Get Result
  console.log('7️⃣ Get Result:');
  try {
    const resultResponse = await request({
      hostname: 'localhost',
      port: 3005,
      path: '/api/v1/assessments/' + assessmentId + '/result',
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    });

    const result = resultResponse.data;
    if (result) {
      console.log('   📊 Result:');
      console.log('      - Percentage:', result.percentage + '%');
      console.log('      - Level:', result.recommendedLevel);
      console.log('      - Correct:', result.correctCount);
      console.log('      - Wrong:', result.wrongCount);
      console.log('      - Score:', result.totalScore + '/' + result.maxScore);
      console.log('      - Feedback:', result.feedback?.substring(0, 80) + '...');
    }
    console.log('');
  } catch (e) {
    console.log('   ❌ Get result error:', e.message);
    return;
  }

  // 8. Get History
  console.log('8️⃣ Get History:');
  try {
    const historyResponse = await request({
      hostname: 'localhost',
      port: 3005,
      path: '/api/v1/assessments/history',
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token,
      },
    });

    const history = historyResponse.data;
    console.log('   ✅ History entries:', history?.length || 0, '\n');
  } catch (e) {
    console.log('   ❌ Get history error:', e.message);
  }

  console.log('=========================================');
  console.log('  ✅ ASSESSMENT SERVICE TEST COMPLETE!');
  console.log('=========================================');
}

testAssessment().catch(console.error);
