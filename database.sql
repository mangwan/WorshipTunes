
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

CREATE TABLE song (
    id SERIAL PRIMARY KEY,
    title character varying(50) NOT NULL,
    artist character varying(50) NOT NULL,
    lyrics text NOT NULL,
    original_key character varying(2) NOT NULL,
    tempo character varying(10) NOT NULL,
    "BPM" integer,
    "CCLI" integer,
    spotify_uri character varying(1000),
    album_cover character varying(500)
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX song_pkey ON song(id int4_ops);

CREATE TABLE song_requests (
    id SERIAL PRIMARY KEY,
    date date,
    name character varying(50),
    email character varying(50),
    song_title character varying(50),
    artist_name character varying(50)
);
