# WorshipTunes
WorshipTunes an online database of worship lyrics and chords aimed at helping church praise bands better prepare and practice praise sets. The search feature allows users to quickly find lyrics and chords to a song. There is also a built in transposer that enables users to instantly transpose chords.

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

## Getting Started

If you wish to run this project, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

For full functionality, you will need to create a local database and tables using the provided database.sql file.

## Development Setup Instructions

* Run `npm install`
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`
