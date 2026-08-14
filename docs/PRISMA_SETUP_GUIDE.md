# 🗄️ Prisma Setup & Configuration Guide

## 📋 Overview

This project uses **Prisma ORM** across 17 microservices with PostgreSQL as the primary database. Each service maintains its own Prisma schema and database tables to ensure service independence.

**Architecture**: Multi-schema approach using PostgreSQL namespaces
- Each service has isolated tables in the `public` schema
- Connection pooling via PgBouncer or AWS RDS Proxy recommended
- Automated migrations via CI/CD pipeline

---

## 🔧 Grammar-Service Prisma Fixes (Applied)

### Issues Fixed ✅

1. **Custom Output Path Issue**
   ```diff
   - output   = "../node_modules/@prisma/client-grammar"
   + output   = "./generated/client"
   ```
   - **Problem**: Custom node_modules path could fail if directory structure doesn't exist
   - **Solution**: Use local generated client directory (gitignore `generated/` folder)

2. **Missing Type Definitions**
   ```diff
   - id String @id @default(uuid())
   + id String @id @default(uuid()) @db.Uuid
   
   - name String @unique
   + name String @unique @db.VarChar(255)
   
   - correctAnswer String @map("correct_answer")
   + correctAnswer String @map("correct_answer") @db.VarChar(500)
   ```
   - **Problem**: PostgreSQL needs explicit column type hints for optimal performance
   - **Solution**: Added `@db.Uuid`, `@db.VarChar()`, and `@db.Text` annotations

3. **Missing Indexes**
   ```diff
   @@index([name])
   @@index([category])
   @@index([difficulty])
   @@index([status])
   + @@index([createdAt])  // For time-based queries
   ```
   - **Problem**: No index for `createdAt` column causes slow date-range queries
   - **Solution**: Added index on timestamp columns for pagination/sorting

4. **Connection Pooling Configuration**
   Added comment in schema about proper connection string:
   ```
   // postgresql://user:password@host/db?schema=grammar&connection_limit=5&pool_timeout=45
   ```
   - Recommended `connection_limit=5-10` per service
   - `pool_timeout` should be < statement timeout (30s default)

---

## 🏗️ Multi-Service Prisma Architecture

### 17 Services with Independent Schemas

| Service | Schema Name | Tables | Status |
|---------|-------------|--------|--------|
| admin-service | admin | admin_users, logs | ✅ |
| ai-tutor-service | ai_tutor | sessions, interactions | ✅ |
| analytics-service | analytics | events, metrics | ✅ |
| assessment-service | assessment | assessments, results | ✅ |
| auth-service | auth | users, tokens, sessions | ✅ |
| content-service | content | content, categories | ✅ |
| course-service | course | courses, modules, lessons | ✅ |
| gamification-service | gamification | points, badges, leaderboard | ✅ |
| **grammar-service** | grammar | grammar_topics, rules, exercises | ✅ FIXED |
| notification-service | notification | notifications, preferences | ✅ |
| payment-service | payment | payments, invoices, subscriptions | ✅ |
| progress-service | progress | user_progress, milestones | ✅ |
| recommendation-service | recommendation | user_preferences, recommendations | ✅ |
| speech-service | speech | speech_recordings, analysis | ✅ |
| subscription-service | subscription | subscriptions, plans, billing | ✅ |
| user-service | user | profiles, preferences, settings | ✅ |
| vocabulary-service | vocabulary | vocabulary, words, lessons | ✅ |

### Problem: Potential Schema Conflicts

**Current Issue**: All services use same `DATABASE_URL`
- If they share a PostgreSQL database but don't use schemas, tables will conflict
- Example: Both `user-service` and `auth-service` might have `users` table

**Solution**: Add schema namespacing to connection strings

```env
# auth-service/.env
DATABASE_URL="postgresql://user:pass@localhost:5432/english_app?schema=auth"

# user-service/.env  
DATABASE_URL="postgresql://user:pass@localhost:5432/english_app?schema=user"

# grammar-service/.env
DATABASE_URL="postgresql://user:pass@localhost:5432/english_app?schema=grammar"
```

---

## 📝 Prisma Schema Best Practices (Applied)

### ✅ Type Safety
```prisma
// GOOD - Explicit database types
id          String  @id @default(uuid()) @db.Uuid
email       String  @unique @db.VarChar(255)
description String? @db.Text

// BAD - Implicit types (may cause truncation)
id          String  @id @default(uuid())
email       String  @unique
description String?
```

### ✅ Indexing Strategy
```prisma
model GrammarTopic {
  // ...
  
  // Queries by name
  @@index([name])
  
  // Filtering by category
  @@index([category])
  
  // Time-based queries (sorting, pagination)
  @@index([createdAt])
  
  // Foreign key relationships
  @@index([status])
  
  // Composite indexes for common WHERE+ORDER BY combinations
  @@index([status, createdAt])
}
```

### ✅ Relationships
```prisma
// Cascade delete: Topics deleted → Rules & Exercises deleted
topic GrammarTopic @relation(fields: [topicId], references: [id], onDelete: Cascade)

// Set null: Exercise rule deleted → Exercise.ruleId = null
rule  GrammarRule? @relation(fields: [ruleId], references: [id], onDelete: SetNull)
```

### ✅ Unique Constraints
```prisma
// Prevent duplicate entries
@@unique([userId, topicId])  // One progress record per user per topic
```

---

## 🚀 Installation & Setup

### Step 1: Install Prisma
```bash
npm install @prisma/client prisma -D
```

### Step 2: Create `.env` File
```bash
cp .env.example .env
```

Update with your database credentials:
```env
DATABASE_URL="postgresql://english_user:password@localhost:5432/english_app?schema=grammar&connection_limit=5"
```

### Step 3: Generate Prisma Client
```bash
npm run prisma:generate
```

Creates: `./generated/client` (add to `.gitignore`)

### Step 4: Run Migrations
```bash
# Create and run migrations
npm run prisma:migrate

# Deploy migrations to production
npm run prisma:deploy

# Seed initial data
npm run prisma:seed
```

### Step 5: View Database (Development)
```bash
npm run prisma:studio
```

Opens Prisma Studio at http://localhost:5555

---

## 📦 Updated Package.json Scripts

All services should have these Prisma scripts:

```json
{
  "scripts": {
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev",
    "prisma:migrate:create": "prisma migrate dev --create-only",
    "prisma:deploy": "prisma migrate deploy",
    "prisma:rollback": "prisma migrate resolve --rolled-back",
    "prisma:seed": "node prisma/seed.js",
    "prisma:studio": "prisma studio",
    "prisma:validate": "prisma validate",
    "prisma:format": "prisma format"
  }
}
```

---

## 🔐 Environment Variables (.env)

### Required Variables
```env
# Database Connection
DATABASE_URL=postgresql://user:password@host:5432/db?schema=service_name&connection_limit=5

# Service Configuration
PORT=3007
NODE_ENV=development
JWT_SECRET=your-secret-key

# Optional: Connection Pooling
PGPOOL_TIMEOUT=45
PGPOOL_IDLE_TIMEOUT=15
```

### Connection String Format
```
postgresql://[user]:[password]@[host]:[port]/[database]?[parameters]

Parameters:
- schema=xxx              : PostgreSQL schema name (optional, defaults to 'public')
- connection_limit=n      : Max connections in pool (recommended: 5-10)
- pool_timeout=n          : Pool timeout in seconds (recommended: 45)
- idle_in_transaction_session_timeout=n : Kill idle transactions (recommended: 15000ms)
- statement_timeout=n     : Query timeout in milliseconds (recommended: 30000)
```

---

## ⚠️ Common Issues & Solutions

### Issue 1: "Client can't be found at generated/client"
```bash
# Solution: Regenerate Prisma client
npm run prisma:generate
```

### Issue 2: "Unknown datasource provider"
```prisma
// Make sure datasource is correct:
datasource db {
  provider = "postgresql"  // Not "postgres"
  url      = env("DATABASE_URL")
}
```

### Issue 3: "Column type mismatch in schema"
```prisma
// Missing @db.VarChar() causes truncation at 256 chars
- email String @unique
+ email String @unique @db.VarChar(255)

# Solution: Add explicit column types for all string fields
```

### Issue 4: "Foreign key constraint violation"
```bash
# Check relationship integrity
prisma db execute --stdin < check_fk.sql

# Solution: Ensure referenced records exist before insertion
```

### Issue 5: Migration conflicts in CI/CD
```bash
# If migration fails in production
npm run prisma:rollback  # Mark migration as rolled back
npm run prisma:deploy    # Re-deploy after fixing

# Never use 'prisma migrate resolve' without understanding changes
```

---

## 🛠️ Migration Management

### Creating Migrations
```bash
# Auto-generate from schema changes
npm run prisma:migrate

# Create empty migration for manual SQL
npm run prisma:migrate:create

# Validate schema without running
npm run prisma:validate

# Auto-format schema file
npm run prisma:format
```

### Migration Folder Structure
```
prisma/
├── schema.prisma              # Current schema definition
├── migrations/
│   ├── migration_lock.toml    # Lock file (prevents concurrent migrations)
│   ├── 20240101000001_init/
│   │   └── migration.sql      # Initial schema
│   ├── 20240102000002_add_user_preferences/
│   │   └── migration.sql      # Add column
│   └── ...
└── seed.js                    # Seed data script
```

### Production Deployment
```bash
# Step 1: Commit schema changes
git add prisma/schema.prisma
git commit -m "feat: add user preferences fields"

# Step 2: Generate migration (in dev only)
npm run prisma:migrate:create

# Step 3: Review migration SQL
cat prisma/migrations/*/migration.sql

# Step 4: Push to production
npm run prisma:deploy
```

---

## 🔍 Database Inspection

### Using Prisma Studio
```bash
npm run prisma:studio
# Opens http://localhost:5555
```

### Using psql (CLI)
```bash
# Connect to database
psql postgresql://user:password@localhost:5432/english_app

# List tables in grammar schema
\dt grammar.*

# View grammar_topics table
SELECT * FROM grammar.grammar_topics;

# Check indexes
\di grammar.*

# View table structure
\d grammar.grammar_topics
```

### Debugging Queries
```typescript
// Enable query logging in NestJS
import { PrismaService } from '@nestjs/prisma';

@Injectable()
export class PrismaService {
  constructor() {
    this.$on('query', (e) => {
      console.log('Query: ' + e.query)
      console.log('Params: ' + JSON.stringify(e.params))
      console.log('Duration: ' + e.duration + 'ms')
    })
  }
}
```

---

## 📊 Performance Optimization

### 1. Connection Pooling
```env
# Use PgBouncer for connection pooling
DATABASE_URL="postgresql://user:password@pgbouncer:6432/english_app?schema=grammar"

# Or use AWS RDS Proxy
DATABASE_URL="postgresql://user:password@rds-proxy.region.amazonaws.com:5432/english_app"
```

### 2. Query Optimization
```typescript
// Bad: N+1 query problem
const topics = await prisma.grammarTopic.findMany()
topics.forEach(topic => {
  const rules = await prisma.grammarRule.findMany({ where: { topicId: topic.id } })
})

// Good: Include relations
const topics = await prisma.grammarTopic.findMany({
  include: {
    rules: true,
    exercises: { take: 5 }
  }
})
```

### 3. Pagination
```typescript
// Good: Limit results and use cursor-based pagination
const topics = await prisma.grammarTopic.findMany({
  take: 10,
  skip: (page - 1) * 10,
  orderBy: { createdAt: 'desc' }
})
```

### 4. Database Indexes
```prisma
// Add composite indexes for common queries
@@index([status, createdAt])  // WHERE status = X ORDER BY createdAt

// Don't over-index - each index adds write cost
// Typical ratio: 5-10 indexes per table maximum
```

---

## ✅ Verification Checklist

- [ ] Grammar-service Prisma schema updated with proper types
- [ ] All 17 services have correct Prisma output paths
- [ ] Database URL includes schema name for each service
- [ ] Connection pooling configured in DATABASE_URL
- [ ] Migrations tested locally before production
- [ ] Seed data includes basic grammar topics
- [ ] All relationships use `onDelete: Cascade` or `SetNull`
- [ ] Indexes created for frequently queried columns
- [ ] `.gitignore` includes `generated/client/` and `node_modules/`
- [ ] Prisma studio working for data inspection

---

## 📚 Additional Resources

- [Prisma Documentation](https://www.prisma.io/docs/)
- [PostgreSQL Best Practices](https://wiki.postgresql.org/wiki/Performance_Optimization)
- [Database Indexing Guide](https://www.postgresql.org/docs/current/indexes.html)
- [Connection Pooling with PgBouncer](https://www.pgbouncer.org/)

---

## 🎯 Next Steps

1. **Audit all 17 services** for similar Prisma configuration issues
2. **Implement schema namespacing** in connection strings (critical)
3. **Set up connection pooling** using AWS RDS Proxy or PgBouncer
4. **Create centralized database package** in `/packages/database/` for shared utilities
5. **Add Prisma middleware** for logging, query optimization, and error handling
