/* Replace with your SQL commands */
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  quantity_sold INT DEFAULT 0,
  quantity INT NOT NULL,
  category_id INT REFERENCES category(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
