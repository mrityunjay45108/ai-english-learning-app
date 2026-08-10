-- Create databases for each microservice
CREATE DATABASE auth_db;
CREATE DATABASE user_db;
CREATE DATABASE course_db;
CREATE DATABASE content_db;
CREATE DATABASE assessment_db;
CREATE DATABASE vocabulary_db;
CREATE DATABASE grammar_db;
CREATE DATABASE progress_db;
CREATE DATABASE gamification_db;
CREATE DATABASE notification_db;
CREATE DATABASE subscription_db;
CREATE DATABASE payment_db;
CREATE DATABASE analytics_db;

-- Grant privileges to the default user
GRANT ALL PRIVILEGES ON DATABASE auth_db TO english_user;
GRANT ALL PRIVILEGES ON DATABASE user_db TO english_user;
GRANT ALL PRIVILEGES ON DATABASE course_db TO english_user;
GRANT ALL PRIVILEGES ON DATABASE content_db TO english_user;
GRANT ALL PRIVILEGES ON DATABASE assessment_db TO english_user;
GRANT ALL PRIVILEGES ON DATABASE vocabulary_db TO english_user;
GRANT ALL PRIVILEGES ON DATABASE grammar_db TO english_user;
GRANT ALL PRIVILEGES ON DATABASE progress_db TO english_user;
GRANT ALL PRIVILEGES ON DATABASE gamification_db TO english_user;
GRANT ALL PRIVILEGES ON DATABASE notification_db TO english_user;
GRANT ALL PRIVILEGES ON DATABASE subscription_db TO english_user;
GRANT ALL PRIVILEGES ON DATABASE payment_db TO english_user;
GRANT ALL PRIVILEGES ON DATABASE analytics_db TO english_user;
