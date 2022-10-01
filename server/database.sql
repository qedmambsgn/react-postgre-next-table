create TABLE purchase(
     name VARCHAR(255),
     amount INTEGER,
     distance INTEGER,
     created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);