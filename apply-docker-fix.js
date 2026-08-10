const fs = require('fs');
const path = require('path');

const dockerComposeContent = `services:
  # ======================================
  # 1. POSTGRESQL DATABASE
  # ======================================
  postgres:
    image: postgres:16-alpine
    container_name: english_learning_postgres
    restart: unless-stopped
    environment:
      POSTGRES_USER: ${POSTGRES_USER:-english_user}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD:-english_password}
      POSTGRES_DB: ${POSTGRES_DB:-english_learning_db}
      PGDATA: /var/lib/postgresql/data/pgdata
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./infra/docker/postgres/init:/docker-entrypoint-initdb.d
    networks:
      - app-network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U \${POSTGRES_USER:-english_user} -d \${POSTGRES_DB:-english_learning_db}"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 10s

  # ======================================
  # 2. REDIS CACHE
  # ======================================
  redis:
    image: redis:7-alpine
    container_name: english_learning_redis
    restart: unless-stopped
    command: redis-server --appendonly yes --requirepass \${REDIS_PASSWORD:-redis_password}
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    networks:
      - app-network
    healthcheck:
      test: ["CMD", "redis-cli", "-a", "\${REDIS_PASSWORD:-redis_password}", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 5s

  # ======================================
  # 3. ZOOKEEPER
  # ======================================
  zookeeper:
    image: confluentinc/cp-zookeeper:latest
    container_name: english_learning_zookeeper
    restart: unless-stopped
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181
      ZOOKEEPER_TICK_TIME: 2000
    ports:
      - "2181:2181"
    volumes:
      - zookeeper_data:/var/lib/zookeeper/data
      - zookeeper_data:/var/lib/zookeeper/log
    networks:
      - app-network
    healthcheck:
      test: ["CMD-SHELL", "echo ruok | nc localhost 2181 | grep imok"]
      interval: 10s
      timeout: 5s
      retries: 5
      start_period: 10s

  # ======================================
  # 4. KAFKA
  # ======================================
  kafka:
    image: confluentinc/cp-kafka:latest
    container_name: english_learning_kafka
    restart: unless-stopped
    depends_on:
      zookeeper:
        condition: service_healthy
    environment:
      KAFKA_BROKER_ID: 1
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://localhost:9092
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1
      KAFKA_TRANSACTION_STATE_LOG_MIN_ISR: 1
      KAFKA_TRANSACTION_STATE_LOG_REPLICATION_FACTOR: 1
      KAFKA_GROUP_INITIAL_REBALANCE_DELAY_MS: 0
      KAFKA_AUTO_CREATE_TOPICS_ENABLE: "true"
    ports:
      - "9092:9092"
    volumes:
      - kafka_data:/var/lib/kafka/data
    networks:
      - app-network
    healthcheck:
      test: ["CMD", "kafka-broker-api-versions", "--bootstrap-server", "localhost:9092"]
      interval: 30s
      timeout: 10s
      retries: 10
      start_period: 60s

  # ======================================
  # 5. KAFKA UI
  # ======================================
  kafka-ui:
    image: provectuslabs/kafka-ui:latest
    container_name: english_learning_kafka_ui
    restart: unless-stopped
    depends_on:
      kafka:
        condition: service_healthy
    environment:
      KAFKA_CLUSTERS_0_NAME: local
      KAFKA_CLUSTERS_0_BOOTSTRAPSERVERS: kafka:9092
      KAFKA_CLUSTERS_0_ZOOKEEPER: zookeeper:2181
    ports:
      - "8080:8080"
    networks:
      - app-network

  # ======================================
  # 6. PGADMIN
  # ======================================
  pgadmin:
    image: dpage/pgadmin4:latest
    container_name: english_learning_pgadmin
    restart: unless-stopped
    depends_on:
      postgres:
        condition: service_healthy
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@englishlearning.com
      PGADMIN_DEFAULT_PASSWORD: admin123
      PGADMIN_CONFIG_SERVER_MODE: 'False'
    ports:
      - "5050:80"
    networks:
      - app-network

  # ======================================
  # 7. REDIS COMMANDER
  # ======================================
  redis-commander:
    image: rediscommander/redis-commander:latest
    container_name: english_learning_redis_commander
    restart: unless-stopped
    depends_on:
      redis:
        condition: service_healthy
    environment:
      REDIS_HOSTS: local:redis:6379
      REDIS_PASSWORD: \${REDIS_PASSWORD:-redis_password}
    ports:
      - "8081:8081"
    networks:
      - app-network

volumes:
  postgres_data:
    name: english_learning_postgres_data
  redis_data:
    name: english_learning_redis_data
  kafka_data:
    name: english_learning_kafka_data
  zookeeper_data:
    name: english_learning_zookeeper_data

networks:
  app-network:
    driver: bridge
    name: english-learning-network
`;

fs.writeFileSync(path.join(__dirname, 'docker-compose.yml'), dockerComposeContent);
console.log('✅ Fresh docker-compose.yml with fixed Kafka healthchecks & ports written!');
