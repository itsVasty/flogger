 CREATE TABLE IF NOT EXISTS Users (
    id TEXT,
    name TEXT NOT NULL,
    PRIMARY KEY(id));

CREATE TABLE IF NOT EXISTS Posts (
    id TEXT,
    title TEXT,
    description TEXT NULL,
    content TEXT,
    digs INT DEFAULT 0,
    buries INT DEFAULT 0,
    user_id TEXT,
    original_post_id TEXT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (original_post_id) REFERENCES Post(id),
    FOREIGN KEY (user_id) REFERENCES Users(id));

-- Create Dummy User
INSERT INTO Users (id, name) VALUES ('flogger-admin', 'Flogger Admin');

-- Create Dummy Posts
INSERT INTO Posts (id, title, description, content, user_id)
VALUES ('flogger', 'What is Flogger?', 'An open-source microblog', 'Flogger is an open source microblog built in python and react.', 'flogger-admin');

INSERT INTO Posts (id, title, description, content, user_id)
VALUES ('welcome-post', 'Welcome to Flogger', 'Getting started with Flogger', 'This is your first post on Flogger. Edit or delete it, then start blogging!', 'flogger-admin');

INSERT INTO Posts (id, title, description, content, user_id)
VALUES ('second-post', 'Another Post', 'Just another post on Flogger', 'This is the second post on Flogger. Enjoy blogging!', 'flogger-admin');

-- Inserting a comment post
INSERT INTO Posts (id, content, user_id, original_post_id)
VALUES ('flogger-comment', 'This is a comment on the Flogger post.', 'flogger-admin', 'flogger');