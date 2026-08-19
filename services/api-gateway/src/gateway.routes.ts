export const SERVICE_ROUTES = {
  // Existing Services
  auth: process.env.AUTH_SERVICE_URL || "http://localhost:3001",
  users: process.env.USER_SERVICE_URL || "http://localhost:3002",
  courses: process.env.COURSE_SERVICE_URL || "http://localhost:3003",
  aiTutor: process.env.AI_TUTOR_SERVICE_URL || "http://localhost:3011",
  speech: process.env.SPEECH_SERVICE_URL || "http://localhost:3012",
  payments: process.env.PAYMENT_SERVICE_URL || "http://localhost:3016",
  gamification: process.env.GAMIFICATION_SERVICE_URL || "http://localhost:3017",
  admin: process.env.ADMIN_SERVICE_URL || "http://localhost:3018",
  realtime: process.env.REALTIME_SERVICE_URL || "http://localhost:3019",

  // 🚀 Backend Started Services (Ports verified from your logs)
  notifications: process.env.NOTIFICATION_SERVICE_URL || "http://localhost:3009",
  analytics: process.env.ANALYTICS_SERVICE_URL || "http://localhost:3010",
  media: process.env.MEDIA_SERVICE_URL || "http://localhost:3013",
  vocab: process.env.VOCAB_SERVICE_URL || "http://localhost:3014",
  grammar: process.env.GRAMMAR_SERVICE_URL || "http://localhost:3015",
  search: process.env.SEARCH_SERVICE_URL || "http://localhost:3020",
  feedback: process.env.FEEDBACK_SERVICE_URL || "http://localhost:3021",
  translation: process.env.TRANSLATION_SERVICE_URL || "http://localhost:3022",

  // 🛠️ FIXED: Learning was incorrectly set to port 3016 (Payment port).
  // Based on your original logs, it was on 3005:
  learning: process.env.LEARNING_SERVICE_URL || "http://localhost:3005", 

  // 🆕 MISSING SERVICES (Added to match your GatewayController)
  assessment: process.env.ASSESSMENT_SERVICE_URL || "http://localhost:3023",
  progress: process.env.PROGRESS_SERVICE_URL || "http://localhost:3024",
  recommendation: process.env.RECOMMENDATION_SERVICE_URL || "http://localhost:3025",
};