FROM node:18-alpine

WORKDIR /app

COPY services/api-gateway/package.json ./
COPY packages/ ./packages/

RUN npm install -g pnpm && pnpm install --filter @english-learning/api-gateway

COPY services/api-gateway/ ./services/api-gateway/
COPY tsconfig.base.json .

WORKDIR /app/services/api-gateway
RUN pnpm build

EXPOSE 3000

CMD ["node", "dist/main.js"]
