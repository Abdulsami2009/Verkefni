CREATE TABLE IF NOT EXISTS menus (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    image_url VARCHAR(255)
);

TRUNACATE TABLE menus RESTART INDENTITY;

INSERT INTO menus (title, description, image_url) VALUES
('Menu 1', 'Description'),
('Menu 2', 'Description'),
('Menu 3', 'Description');