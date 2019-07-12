const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
    // Send back user object from the session (previously queried from the database)
    res.send(req.user);
  });

//grab songs to post on home page
router.get('/song', rejectUnauthenticated, async (req, res) => {
    pool.query(`SELECT * FROM "song" ORDER BY "title";`)
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in SONG query', error);
            res.sendStatus(500);
        });
});

router.get('/song/:id/details', rejectUnauthenticated, async (req, res) => {
    pool.query('SELECT * FROM "song" WHERE "id"=$1 LIMIT 1;', [req.params.id])
        .then(result => res.send(result.rows[0]))
        .catch(error => {
            console.log('error in SELECT query', error);
            res.sendStatus(500);
        });
});

//send song requests to the database
router.post('/song-request', rejectUnauthenticated, (req, res) => {
    pool.query(`INSERT INTO "song_requests" ("name", "email", "song_title", "artist_name")
    VALUES ($1, $2, $3, $4);`, [req.body.name, req.body.email, req.body.song_title, req.body.artist_name])
    .then(response => {
        res.sendStatus(201)
    }).catch (error => {
        console.log('error posting song request', error)
    })
});





module.exports = router;