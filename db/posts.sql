DROP TABLE IF EXISTS posts;

CREATE TABLE posts {
    id serial PRIMARY KEY,
    title NOT NULL,
    author varchar(255),
    body NOT NULL
};