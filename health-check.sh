#!/bin/bash

echo "========================================="
echo "  ENGLISH LEARNING PLATFORM - HEALTH CHECK"
echo "========================================="
echo ""

# 1. Docker Containers
echo "📦 1. DOCKER CONTAINERS:"
docker compose ps --format "table {{.Name}}\t{{.Status}}\t{{.Ports}}"
echo ""

# 2. Auth Service
echo "🔐 2. AUTH SERVICE:"
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3001/api/v1/health | grep -q 200; then
    echo "   ✅ Auth Service: RUNNING"
    curl -s http://localhost:3001/api/v1/health | jq -c '{status, checks}'
else
    echo "   ❌ Auth Service: NOT RUNNING"
fi
echo ""

# 3. User Service
echo "👤 3. USER SERVICE:"
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3002/api/v1/health | grep -q 200; then
    echo "   ✅ User Service: RUNNING"
    curl -s http://localhost:3002/api/v1/health | jq -c '{status, checks}'
else
    echo "   ❌ User Service: NOT RUNNING"
fi
echo ""

# 4. API Gateway
echo "🚪 4. API GATEWAY:"
if curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/health | grep -q 200; then
    echo "   ✅ API Gateway: RUNNING"
    curl -s http://localhost:3000/health | jq -c '{status, service}'
else
    echo "   ❌ API Gateway: NOT RUNNING"
fi
echo ""

# 5. PostgreSQL
echo "🐘 5. POSTGRESQL:"
if docker exec -it english_learning_postgres psql -U english_user -d postgres -c "SELECT 1" &>/dev/null; then
    echo "   ✅ PostgreSQL: RUNNING"
    # Show databases
    docker exec -it english_learning_postgres psql -U english_user -d postgres -c "\l" | grep -E "auth_db|user_db|english_learning_db"
else
    echo "   ❌ PostgreSQL: NOT RUNNING"
fi
echo ""

# 6. Redis
echo "⚡ 6. REDIS:"
if docker exec -it english_learning_redis redis-cli -p 6379 -a redis_password ping &>/dev/null; then
    echo "   ✅ Redis: RUNNING"
else
    echo "   ❌ Redis: NOT RUNNING"
fi
echo ""

# 7. Kafka
echo "📨 7. KAFKA:"
if docker exec -it english_learning_kafka kafka-topics --bootstrap-server localhost:9092 --list &>/dev/null; then
    echo "   ✅ Kafka: RUNNING"
    docker exec -it english_learning_kafka kafka-topics --bootstrap-server localhost:9092 --list 2>/dev/null
else
    echo "   ❌ Kafka: NOT RUNNING"
fi
echo ""

# 8. Test Login
echo "🔑 8. AUTHENTICATION TEST:"
LOGIN_RESPONSE=$(curl -s -X POST http://localhost:3000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"student_gateway@englishlearning.com","password":"MySecret@123"}')

if echo "$LOGIN_RESPONSE" | grep -q "accessToken"; then
    echo "   ✅ Login: SUCCESSFUL"
    TOKEN=$(echo "$LOGIN_RESPONSE" | jq -r '.data.accessToken' 2>/dev/null)
    echo "   🔑 Token: ${TOKEN:0:50}..."
else
    echo "   ❌ Login: FAILED"
    echo "$LOGIN_RESPONSE" | jq .
fi
echo ""

# 9. Test User Profile
if [ ! -z "$TOKEN" ] && [ "$TOKEN" != "null" ]; then
    echo "👤 9. USER PROFILE TEST:"
    PROFILE_RESPONSE=$(curl -s -X GET http://localhost:3000/api/v1/users/me \
      -H "Authorization: Bearer $TOKEN")
    if echo "$PROFILE_RESPONSE" | grep -q "success"; then
        echo "   ✅ User Profile: SUCCESSFUL"
        echo "$PROFILE_RESPONSE" | jq -c '{success, data: {profile: .data.profile.userId, preferences: .data.preferences.locale}}'
    else
        echo "   ❌ User Profile: FAILED"
        echo "$PROFILE_RESPONSE" | jq .
    fi
fi
echo ""

echo "========================================="
echo "  ✅ HEALTH CHECK COMPLETE!"
echo "========================================="
