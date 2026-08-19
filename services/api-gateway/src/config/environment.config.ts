// export const config = {
//   app: {
//     port: parseInt(process.env.PORT, 10) || 3000,
//     env: process.env.NODE_ENV || 'development',
//     jwtSecret: process.env.JWT_SECRET || 'default-secret',
//     gatewayUrl: process.env.GATEWAY_URL || 'http://localhost:3000',
//   },
//   services: {
//     auth: {
//       url: process.env.AUTH_SERVICE_URL || 'http://localhost:3001',
//       timeout: 30000,
//     },
//     user: {
//       url: process.env.USER_SERVICE_URL || 'http://localhost:3002',
//       timeout: 30000,
//     },
//     course: {
//       url: process.env.COURSE_SERVICE_URL || 'http://localhost:3003',
//       timeout: 30000,
//     },
//     ai: {
//       url: process.env.AI_SERVICE_URL || 'http://localhost:3011',
//       timeout: 60000,
//     },
//     speech: {
//       url: process.env.SPEECH_SERVICE_URL || 'http://localhost:3012',
//       timeout: 60000,
//     },
//     payment: {
//       url: process.env.PAYMENT_SERVICE_URL || 'http://localhost:3016',
//       timeout: 30000,
//     },
//     admin: {
//       url: process.env.ADMIN_SERVICE_URL || 'http://localhost:3018',
//       timeout: 30000,
//     },
//     realtime: {
//       url: process.env.REALTIME_SERVICE_URL || 'http://localhost:3019',
//       timeout: 30000,
//     },
//   },
// };



export const config = {
  app: {
    port: parseInt(process.env.PORT, 10) || 3000,
    env: process.env.NODE_ENV || 'development',
    jwtSecret: process.env.JWT_SECRET || 'default-secret',
    gatewayUrl: process.env.GATEWAY_URL || 'http://localhost:3000',
  },
  services: {
    // Existing 8
    auth: { url: process.env.AUTH_SERVICE_URL || 'http://localhost:3001', timeout: 30000 },
    user: { url: process.env.USER_SERVICE_URL || 'http://localhost:3002', timeout: 30000 },
    course: { url: process.env.COURSE_SERVICE_URL || 'http://localhost:3003', timeout: 30000 },
    ai: { url: process.env.AI_SERVICE_URL || 'http://localhost:3011', timeout: 60000 },
    speech: { url: process.env.SPEECH_SERVICE_URL || 'http://localhost:3012', timeout: 60000 },
    payment: { url: process.env.PAYMENT_SERVICE_URL || 'http://localhost:3016', timeout: 30000 },
    admin: { url: process.env.ADMIN_SERVICE_URL || 'http://localhost:3018', timeout: 30000 },
    realtime: { url: process.env.REALTIME_SERVICE_URL || 'http://localhost:3019', timeout: 30000 },

    // 🚀 Add remaining 13 services:
    learning: { url: process.env.LEARNING_SERVICE_URL || 'http://localhost:3005', timeout: 30000 },
    notification: { url: process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:3009', timeout: 30000 },
    analytics: { url: process.env.ANALYTICS_SERVICE_URL || 'http://localhost:3010', timeout: 30000 },
    media: { url: process.env.MEDIA_SERVICE_URL || 'http://localhost:3013', timeout: 30000 },
    vocab: { url: process.env.VOCAB_SERVICE_URL || 'http://localhost:3014', timeout: 30000 },
    grammar: { url: process.env.GRAMMAR_SERVICE_URL || 'http://localhost:3015', timeout: 30000 },
    gamification: { url: process.env.GAMIFICATION_SERVICE_URL || 'http://localhost:3017', timeout: 30000 },
    search: { url: process.env.SEARCH_SERVICE_URL || 'http://localhost:3020', timeout: 30000 },
    feedback: { url: process.env.FEEDBACK_SERVICE_URL || 'http://localhost:3021', timeout: 30000 },
    translation: { url: process.env.TRANSLATION_SERVICE_URL || 'http://localhost:3022', timeout: 30000 },
    assessment: { url: process.env.ASSESSMENT_SERVICE_URL || 'http://localhost:3023', timeout: 30000 },
    progress: { url: process.env.PROGRESS_SERVICE_URL || 'http://localhost:3024', timeout: 30000 },
    recommendation: { url: process.env.RECOMMENDATION_SERVICE_URL || 'http://localhost:3025', timeout: 30000 },
  },
};