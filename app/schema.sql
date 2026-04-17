CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255)
);

-- Add user_id to cigarettes table
ALTER TABLE cigarettes 
ADD COLUMN user_id UUID,
ADD CONSTRAINT fk_cigarette_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

-- Add user_id to reviews table
ALTER TABLE reviews 
ADD COLUMN user_id UUID,
ADD CONSTRAINT fk_review_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;