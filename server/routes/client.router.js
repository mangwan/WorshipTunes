const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//grab songs to post on home page
router.get('/song', async (req, res) => {
    pool.query(`SELECT * FROM "song";`)
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in SONG query', error);
            res.sendStatus(500);
        });
});

//send song requests to the database
router.post('/', (req, res) => {
    pool.query(`INSERT INTO "song" ("title", artist", "lyric", "original_key", "tempo", "BPM", "CCLI#", "spotify_uri")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`, [req.body.title, req.body.artist, req.body.lyric, req.body.original_key, req.body.tempo, req.body.BPM, req.body.CCLI, req.body.spotify_uri])
    .then(response => {
        res.sendStatus(201)
    }).catch (error => {
        console.log('error posting images:', error)
    })
});

module.exports = router;