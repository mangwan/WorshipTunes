
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "first_name" VARCHAR (80) NOT NULL,
    "last_name" VARCHAR (80) NOT NULL,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
	"is_admin" boolean 
);

CREATE TABLE "song" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR (50) NOT NULL,
    "artist" VARCHAR (50) NOT NULL,
    "lyric" TEXT NOT NULL,
    "original_key" VARCHAR (2) NOT NULL,
    "tempo" VARCHAR (10) NOT NULL,
    "BPM" INTEGER,
    "CCLI#" INTEGER,
    "spotify_uri" VARCHAR (1000),
    "album_cover" VARCHAR (250)
);


CREATE TABLE "song_requests" (
    "id" SERIAL PRIMARY KEY,
    "date" date,
    "name" VARCHAR (50),
    "email" VARCHAR (50),
    "title" VARCHAR (50),
    "artist_name" VARCHAR (50)
);