DROP TABLE IF EXISTS actors;

CREATE TABLE actors (
    "Name" VARCHAR,
    "Age" INT,
    "Number of Oscars" INT
);

INSERT INTO actors ("Name", "Age", "Number of Oscars") 
VALUES ('Leonardo DiCaprio', 41, 1);
INSERT INTO actors ("Name", "Age", "Number of Oscars") 
VALUES ('Jennifer Lawrence', 25, 1);
INSERT INTO actors ("Name", "Age", "Number of Oscars") 
VALUES ('Samuel L. Jackson', 67, 0);
INSERT INTO actors ("Name", "Age", "Number of Oscars") 
VALUES ('Meryl Streep', 66, 3);
INSERT INTO actors ("Name", "Age", "Number of Oscars") 
VALUES ('John Cho', 43, 0);

SELECT * FROM actors WHERE "Number of Oscars" > 1;
SELECT * FROM actors WHERE "Age" > 30;
/*

psql -d actors

SELECT * FROM actors;


*/


