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

async function test() {
  console.log('=========================================');
  console.log('  VOCABULARY SERVICE TEST (Node.js)');
  console.log('=========================================\n');

  // 1. Login
  console.log('🔑 Logging in...');
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

  const token = loginResponse.data?.accessToken;
  if (!token) {
    console.log('❌ Login failed!');
    console.log(loginResponse);
    return;
  }
  console.log('✅ Login successful!');
  console.log('');

  // 2. Update Profile
  console.log('📝 Updating profile...');
  const profileResponse = await request({
    hostname: 'localhost',
    port: 3000,
    path: '/api/v1/users/me',
    method: 'PATCH',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  }, JSON.stringify({
    firstName: 'Student',
    lastName: 'Gateway',
    bio: 'Learning English with AI'
  }));

  console.log('✅ Profile updated:', profileResponse.success ? 'Success' : 'Failed');
  console.log('');

  // 3. Get Words
  console.log('📚 Getting all words...');
  const wordsResponse = await request({
    hostname: 'localhost',
    port: 3006,
    path: '/api/v1/vocabulary',
    method: 'GET',
  });

  const words = wordsResponse.data || [];
  console.log('📝 Total words:', words.length);
  if (words.length > 0) {
    words.slice(0, 3).forEach(w => {
      console.log(`   - ${w.word} (${w.difficulty})`);
    });
  }
  console.log('');

  if (words.length === 0) {
    console.log('❌ No words found');
    return;
  }

  const wordId = words[0].id;
  console.log('📝 First Word ID:', wordId);
  console.log('');

  // 4. Add Word to Vocabulary
  console.log('➕ Adding word to vocabulary...');
  const addResponse = await request({
    hostname: 'localhost',
    port: 3006,
    path: '/api/v1/vocabulary/user/words',
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + token,
      'Content-Type': 'application/json',
    },
  }, JSON.stringify({ wordId }));

  if (addResponse.success) {
    console.log('✅ Word added successfully!');
    console.log('   Status:', addResponse.data?.status);
    console.log('   Confidence:', addResponse.data?.confidence + '%');
  } else {
    console.log('❌ Failed to add word:', addResponse.message);
  }
  console.log('');

  // 5. Get User Vocabulary
  console.log('📚 Getting user vocabulary...');
  const userResponse = await request({
    hostname: 'localhost',
    port: 3006,
    path: '/api/v1/vocabulary/user/words',
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token,
    },
  });

  const userWords = userResponse.data || [];
  console.log('📝 User Vocabulary:', userWords.length > 0 ? '' : 'No words');
  userWords.forEach((uw, i) => {
    console.log(`   ${i+1}. ${uw.word?.word || 'Unknown'} - ${uw.status} (${uw.confidence}%)`);
  });
  console.log('');

  // 6. Review Word
  if (userWords.length > 0) {
    console.log('📝 Reviewing word...');
    const reviewResponse = await request({
      hostname: 'localhost',
      port: 3006,
      path: '/api/v1/vocabulary/user/review',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    }, JSON.stringify({
      wordId: userWords[0].wordId,
      isCorrect: true
    }));

    if (reviewResponse.success) {
      console.log('✅ Review submitted!');
      console.log('   New Confidence:', reviewResponse.data?.confidence + '%');
      console.log('   New Status:', reviewResponse.data?.status);
    } else {
      console.log('❌ Review failed:', reviewResponse.message);
    }
    console.log('');
  }

  console.log('=========================================');
  console.log('  ✅ VOCABULARY SERVICE TEST COMPLETE!');
  console.log('=========================================');
}

test().catch(console.error);
