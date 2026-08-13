FROM node:18-alpine

WORKDIR /app

COPY services/user-service/package.json ./
COPY packages/ ./packages/

RUN npm install -g pnpm && pnpm install --filter @english-learning/user-service

COPY services/user-service/ ./services/user-service/
COPY tsconfig.base.json .

WORKDIR /app/services/user-service
RUN pnpm prisma:generate
RUN pnpm build

EXPOSE 3002

CMD ["node", "dist/main.js"]
