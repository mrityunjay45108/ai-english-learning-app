FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package*.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install

# Copy source
COPY . .

# Generate Prisma client
RUN pnpm prisma:generate

# Build the app
RUN pnpm build

EXPOSE 3001

CMD ["pnpm", "start:prod"]
