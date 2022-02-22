DROP TABLE crew;


CREATE TABLE crew (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL
);

INSERT INTO crew (name)
VALUES ('Jason'),
        ('Achille');

