const http = require('http');

function request(options, body) {
  return new Promise((resolve) => {
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, data: JSON.parse(data) }); }
        catch (e) { resolve({ status: res.statusCode, data }); }
      });
    });
    req.on('error', (err) => resolve({ error: err.message }));
    if (body) req.write(typeof body === 'string' ? body : JSON.stringify(body));
    req.end();
  });
}

async function testProgress() {
  console.log('=========================================');
  console.log('  PROGRESS SERVICE TEST');
  console.log('=========================================\n');

  // 1. Health Check
  console.log('1️⃣ Health Check:');
  const health = await request({
    hostname: 'localhost',
    port: 3008,
    path: '/api/v1/health',
    method: 'GET',
  });
  console.log('   Status:', health.status);
  console.log('   Service:', health.data?.service);
  console.log('');

  // 2. Login
  console.log('2️⃣ Login:');
  const login = await request({
    hostname: 'localhost',
    port: 3000,
    path: '/api/v1/auth/login',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  }, JSON.stringify({
    email: 'student_gateway@englishlearning.com',
    password: 'MySecret@123'
  }));

  const token = login.data?.data?.accessToken;
  if (!token) {
    console.log('   ❌ Login failed!');
    return;
  }
  console.log('   ✅ Login successful!');
  console.log('');

  // 3. Get Progress Summary
  console.log('3️⃣ Progress Summary:');
  const summary = await request({
    hostname: 'localhost',
    port: 3008,
    path: '/api/v1/progress/summary',
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token },
  });

  if (summary.status === 200) {
    const s = summary.data?.data || {};
    console.log('   ✅ Summary retrieved:');
    console.log('   - User ID:', s.userId);
    console.log('   - Total XP:', s.totalXp);
    console.log('   - Level:', s.level);
    console.log('   - Streak Days:', s.streakDays);
    console.log('   - Courses Completed:', s.coursesCompleted);
    console.log('   - Lessons Completed:', s.lessonsCompleted);
  } else {
    console.log('   ❌ Failed:', summary.status);
    if (summary.data) console.log('   Response:', summary.data);
  }
  console.log('');

  // 4. Get Course Progress
  console.log('4️⃣ Course Progress:');
  const courses = await request({
    hostname: 'localhost',
    port: 3008,
    path: '/api/v1/progress/courses',
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token },
  });

  if (courses.status === 200) {
    const courseData = courses.data?.data || [];
    console.log('   ✅ Courses:', courseData.length);
    if (courseData.length === 0) {
      console.log('   No courses started yet.');
    }
    courseData.forEach((c, i) => {
      console.log('   ' + (i+1) + '. Course ' + c.courseId + ': ' + c.status + ' (' + c.progressPercentage + '%)');
    });
  } else {
    console.log('   ❌ Failed:', courses.status);
  }
  console.log('');

  // 5. Get Activities
  console.log('5️⃣ Learning Activities:');
  const activities = await request({
    hostname: 'localhost',
    port: 3008,
    path: '/api/v1/progress/activities',
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + token },
  });

  if (activities.status === 200) {
    const activityData = activities.data?.data || [];
    console.log('   ✅ Activities:', activityData.length);
    if (activityData.length === 0) {
      console.log('   No activities yet.');
    }
    activityData.slice(0, 5).forEach((a, i) => {
      const date = new Date(a.timestamp);
      console.log('   ' + (i+1) + '. ' + a.activityType + ' - ' + date.toLocaleString());
    });
  } else {
    console.log('   ❌ Failed:', activities.status);
  }
  console.log('');

  console.log('=========================================');
  console.log('  ✅ PROGRESS SERVICE TEST COMPLETE!');
  console.log('=========================================');
}

testProgress().catch(console.error);
