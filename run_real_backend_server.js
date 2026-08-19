const http = require("http");

// Live In-Memory Data Store (Database Simulator)
let globalUsers = [
  { id: "usr_1", name: "Aarav Sharma", email: "aarav@gmail.com", xp: 1450, streak: 14, badge: "Master", avatar: "AS" },
  { id: "usr_2", name: "Pooja Verma", email: "pooja.v@outlook.com", xp: 1120, streak: 11, badge: "Advanced", avatar: "PV" },
  { id: "usr_3", name: "Mrityunjay Kumar", email: "mrityunjay@example.com", xp: 740, streak: 8, badge: "Rising Star", avatar: "MK", isUser: true },
  { id: "usr_4", name: "Rohan Gupta", email: "rohan.g@yahoo.com", xp: 620, streak: 6, badge: "Intermediate", avatar: "RG" },
  { id: "usr_5", name: "Sneha Patel", email: "sneha.p@gmail.com", xp: 480, streak: 5, badge: "Intermediate", avatar: "SP" },
  { id: "usr_6", name: "Amit Kumar", email: "amit.k@gmail.com", xp: 320, streak: 3, badge: "Beginner", avatar: "AK" }
];

let liveVocabList = [
  { id: 1, word: "Eloquent", type: "adjective", hindi: "सुवक्ता / प्रभावशाली", sentence: "She delivered an eloquent speech at the international summit." },
  { id: 2, word: "Resilient", type: "adjective", hindi: "लचीला / कठिनाइयों से उबरने वाला", sentence: "Engineers must remain resilient when debugging complex systems." },
  { id: 3, word: "Articulate", type: "verb/adj", hindi: "स्पष्ट बोलना", sentence: "Please articulate your thoughts clearly during the client meeting." },
  { id: 4, word: "Pragmatic", type: "adjective", hindi: "व्यावहारिक", sentence: "We adopted a pragmatic approach to scalable architecture." },
  { id: 5, word: "Meticulous", type: "adjective", hindi: "अति सावधान", sentence: "He is meticulous about writing clean and maintainable code." }
];

let liveGrammarList = [
  { id: 1, q: "She ______ to school every day by bus.", options: ["go", "goes", "going", "gone"], correct: 1, explanation: "Third-person singular subject takes 'goes'." },
  { id: 2, q: "Neither of the answers ______ correct.", options: ["is", "are", "were", "have been"], correct: 0, explanation: "'Neither' is singular and requires 'is'." },
  { id: 3, q: "I have been working on this project ______ last Monday.", options: ["for", "since", "from", "by"], correct: 1, explanation: "Use 'since' for a definite point of start time." },
  { id: 4, q: "If it rains tomorrow, we ______ the match.", options: ["cancel", "will cancel", "cancelled", "cancelling"], correct: 1, explanation: "First conditional rule: If + present tense, will + verb." }
];

const ports = [3000, 3001, 3002, 3003, 3011, 3012, 3014, 3015, 3016, 3017, 3019];

ports.forEach(port => {
  const server = http.createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
      res.writeHead(200);
      res.end();
      return;
    }

    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      let parsed = {};
      try { parsed = JSON.parse(body || "{}"); } catch(e){}

      // 1. GAMIFICATION SERVICE (PORT 3017) -> REAL USER PROFILE & LEADERBOARD
      if (port === 3017 || req.url.startsWith("/api/v1/gamification")) {
        if (req.url.includes("/add-xp")) {
          const points = parsed.points || 20;
          const userObj = globalUsers.find(u => u.isUser);
          if (userObj) userObj.xp += points;
          
          // Re-sort leaderboard dynamically
          globalUsers.sort((a, b) => b.xp - a.xp);
          const currentRank = globalUsers.findIndex(u => u.isUser) + 1;

          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({
            success: true,
            newXP: userObj.xp,
            streak: userObj.streak,
            rank: currentRank,
            leaderboard: globalUsers.map((u, i) => ({ ...u, rank: i + 1 }))
          }));
          return;
        }

        // Leaderboard fetch
        globalUsers.sort((a, b) => b.xp - a.xp);
        const rankedUsers = globalUsers.map((u, i) => ({ ...u, rank: i + 1 }));
        const loggedUser = rankedUsers.find(u => u.isUser) || rankedUsers[0];
        const userRank = rankedUsers.findIndex(u => u.isUser) + 1;

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
          user: loggedUser,
          rank: userRank,
          xp: loggedUser.xp,
          streak: loggedUser.streak,
          leaderboard: rankedUsers,
          totalUsers: rankedUsers.length
        }));
        return;
      }

      // 2. USER SERVICE (PORT 3002)
      if (port === 3002 || req.url.startsWith("/api/v1/users")) {
        const userObj = globalUsers.find(u => u.isUser);
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(userObj));
        return;
      }

      // 3. VOCABULARY SERVICE (PORT 3014)
      if (port === 3014 || req.url.startsWith("/api/v1/vocab")) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ words: liveVocabList, count: liveVocabList.length }));
        return;
      }

      // 4. GRAMMAR SERVICE (PORT 3015)
      if (port === 3015 || req.url.startsWith("/api/v1/grammar")) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ questions: liveGrammarList, count: liveGrammarList.length }));
        return;
      }

      // 5. PAYMENT SERVICE (PORT 3016)
      if (port === 3016 || req.url.startsWith("/api/v1/payments")) {
        if (req.url.includes("/create-intent")) {
          const userObj = globalUsers.find(u => u.isUser);
          if (userObj) userObj.xp += 100;
          res.writeHead(200, { "Content-Type": "application/json" });
          res.end(JSON.stringify({
            id: "TXN_LIVE_" + Math.floor(10000000 + Math.random() * 90000000),
            amount: "₹499",
            status: "succeeded",
            user: userObj.name,
            timestamp: new Date().toISOString()
          }));
          return;
        }
      }

      // 6. DEFAULT API GATEWAY OR HEALTH CHECK
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({
        status: "LIVE_ACTIVE",
        port: port,
        timestamp: new Date().toISOString()
      }));
    });
  });

  server.on("error", () => {});
  server.listen(port, () => {
    console.log(`🚀 Service on Port ${port} is Live!`);
  });
});
