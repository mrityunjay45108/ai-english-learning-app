FROM node:18-alpine

WORKDIR /app

# Copy only auth service files
COPY services/auth-service/package.json services/auth-service/pnpm-lock.yaml* ./
COPY packages/ ./packages/

# Install dependencies
RUN npm install -g pnpm && pnpm install --filter @english-learning/auth-service

# Copy source
COPY services/auth-service/ ./services/auth-service/
COPY tsconfig.base.json .

# Generate Prisma client
WORKDIR /app/services/auth-service
RUN pnpm prisma:generate

# Build
RUN pnpm build

EXPOSE 3001

CMD ["node", "dist/main.js"]
