const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//input info for a new song
// router.post('/', (req, res) => {
//     pool.query(`INSERT INTO "song" ("title", "artist", "lyric", "original_key", "tempo", "BPM", "CCLI", "spotify_uri", "album_cover")
//     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`, [req.body.title, req.body.artist, req.body.lyric, req.body.original_key, req.body.tempo, req.body.BPM, req.body.CCLI, req.body.spotify_uri, req.body.album_cover])
//     .then(response => {
//         res.sendStatus(201)
//     }).catch (error => {
//         console.log('error posting images:', error)
//     })
// });


//get all song requests from database
router.get('/song-request', (req, res) => {
    pool.query('SELECT * FROM "song_requests"')
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in SELECT query', error);
            res.sendStatus(500);
        });
});

//delete songs 
router.delete('/delete/:id', (req, res) => {
    pool.query(`DELETE FROM "song" WHERE "id"=$1;`, [req.params.id])
        .then(result => {
            res.sendStatus(201)
        }).catch(error => {
            console.log('error in DELETE query:', error)
        })
});

//delete songs request
router.delete('/delete/song-requests/:id', (req, res) => {
    pool.query(`DELETE FROM "song_requests" WHERE "id"=$1;`, [req.params.id])
        .then(result => {
            res.sendStatus(201)
        }).catch(error => {
            console.log('error in DELETE query:', error)
        })
});

//add new song
router.post('/add-song', (req, res) => {
    pool.query(`INSERT INTO "song" ("title", "artist", "lyrics", "original_key", "tempo", "BPM", "CCLI", "spotify_uri", "album_cover")
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);`,
        [req.body.songTitle, req.body.artistName, req.body.lyrics, req.body.originalKey, req.body.tempo,
        req.body.BPM, req.body.CCLI, req.body.spotifyUri, req.body.albumUrl])
        .then(response => {
            res.sendStatus(201)
        }).catch(error => {
            console.log('error posting new song', error)
        })
});

//update song
router.put('/edit-song/:id', (req, res) => {
    pool.query(`UPDATE "song" SET 
        "title"=$1,
        "artist"=$2,
        "lyrics"=$3,
        "original_key"=$4,
        "tempo"=$5,
        "BPM"=$6,
        "CCLI"=$7,
        "spotify_uri"=$8,
        "album_cover"=$9
        WHERE "id"=$10`,
        [req.body.songTitle, req.body.artistName, req.body.lyrics, req.body.originalKey, req.body.tempo,
        req.body.BPM, req.body.CCLI, req.body.spotifyUri, req.body.albumUrl, req.params.id])
        .then(result => res.send(result.rows[0]))
        .catch(error => {
            console.log('error in edit song query', error);
            res.sendStatus(500);
        });
});

module.exports = router;