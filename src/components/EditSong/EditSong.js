import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

//material UI
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import swal from 'sweetalert';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const styles = {
    Breadcrumb: {
        margin: '10px',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        width: '100%',
    },
    title: {
        textAlign: 'center',
        fontSize: '20px',
    },
    button: {
        margin: '25px',

        backgroundColor: '#1DB954',
    },
};

class EditSong extends Component {
    state = {
        title: "",
        artist: "",
        lyrics: "",
        tempo: "",
        BPM: "",
        CCLI: "",
        album_cover: "",
        spotify_uri: "",
        original_key: "",
    }

    componentDidMount = () => {
        axios.get(`/client/song/${this.props.match.params.id}/details`).then(response => {
            this.setState({
                title: response.data.title,
                artist: response.data.artist,
                lyrics: response.data.lyrics,
                tempo: response.data.tempo,
                BPM: response.data.BPM,
                CCLI: response.data.CCLI,
                album_cover: response.data.album_cover,
                spotify_uri: response.data.spotify_uri,
                original_key: response.data.original_key,
            })
        });
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    editSong = (event) => {
        event.preventDefault();
        if (this.state.title &&
            this.state.artist &&
            this.state.lyrics &&
            this.state.tempo &&
            this.state.original_key) {
            this.props.dispatch({
                type: 'EDIT_SONG_DETAILS',
                payload: {
                    songTitle: this.state.title,
                    artistName: this.state.artist,
                    lyrics: this.state.lyrics,
                    tempo: this.state.tempo,
                    BPM: this.state.BPM,
                    CCLI: this.state.CCLI,
                    albumUrl: this.state.album_cover,
                    spotifyUri: this.state.spotify_uri,
                    originalKey: this.state.original_key,
                },
                id: this.props.match.params.id,
            });
            swal({
                title: "Song Updated!",
                text: "",
                icon: "success",
                button: "Ok",
            })
                .then(() => {
                    this.props.history.push('/manage-songs')
                })
        } else {
            alert('Please fill out all required fields!');
        }
    }

    render() {
        return (
            <div>
                <header>
                    <img img width="100%" src="images/mountain.jpg" alt="mountain"></img>
                </header>
                <div>
                    <div style={styles.Breadcrumb}>
                        <Breadcrumbs
                            separator="›"
                            aria-label="Breadcrumb">
                            <Link
                                color="inherit"
                                onClick={() => this.props.history.push('/manage-songs')}>
                                Manage Songs
                            </Link>
                            <Typography
                                color="textPrimary">
                                Edit Song
                            </Typography>
                        </Breadcrumbs>
                    </div>
                    <Container component="main" maxWidth="md">
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={2}>
                            </Grid>
                            <form style={styles.container} onSubmit={this.editSong}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <div style={styles.title}>
                                            <h2>Edit Song</h2>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box p={1}>
                                            <TextField
                                                label="Song Title"
                                                id="title"
                                                value={this.state.title}
                                                onChange={this.handleInputChangeFor('title')}
                                                fullWidth
                                                variant="outlined"
                                            />
                                        </Box>
                                        <Box p={1}>
                                            <TextField
                                                label="Artist Name"
                                                id="artist"
                                                value={this.state.artist}
                                                onChange={this.handleInputChangeFor('artist')}
                                                fullWidth
                                                variant="outlined"
                                            />
                                        </Box>
                                        <Box p={1}>
                                            <TextField
                                                label="Lyrics"
                                                id="lyrics"
                                                multiline
                                                rows="12"
                                                value={this.state.lyrics}
                                                onChange={this.handleInputChangeFor('lyrics')}
                                                fullWidth
                                                variant="outlined"
                                            />
                                        </Box>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Box p={1}>
                                            <FormControl style={styles.dropdown} fullWidth variant="outlined">
                                                <InputLabel htmlFor="status">Tempo</InputLabel>
                                                <Select
                                                    input={<OutlinedInput name="Tempo" id="tempo" />}
                                                    value={this.state.tempo}
                                                    onChange={this.handleInputChangeFor('tempo')}
                                                >
                                                    <MenuItem value="Slow">Slow</MenuItem>
                                                    <MenuItem value="Medium">Medium</MenuItem>
                                                    <MenuItem value="Fast">Fast</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                        <Box p={1}>
                                            <TextField
                                                label="BPM"
                                                id="BPM"
                                                value={this.state.BPM}
                                                onChange={this.handleInputChangeFor('BPM')}
                                                fullWidth
                                                variant="outlined"
                                            />
                                        </Box>
                                        <Box p={1}>
                                            <TextField
                                                label="CCLI#"
                                                id="CCLI"
                                                value={this.state.CCLI}
                                                onChange={this.handleInputChangeFor('CCLI')}
                                                fullWidth
                                                variant="outlined"
                                            />
                                        </Box>
                                        <Box p={1}>
                                            <TextField
                                                label="Album URL"
                                                id="album_cover"
                                                value={this.state.album_cover}
                                                onChange={this.handleInputChangeFor('album_cover')}
                                                fullWidth
                                                variant="outlined"
                                            />
                                        </Box>
                                        <Box p={1}>
                                            <TextField
                                                label="Spotify URI"
                                                id="spotifyUri"
                                                value={this.state.spotify_uri}
                                                onChange={this.handleInputChangeFor('spotify_uri')}
                                                fullWidth
                                                variant="outlined"
                                            />
                                        </Box>
                                        <Box p={1}>
                                            <FormControl style={styles.dropdown} fullWidth variant="outlined">
                                                <InputLabel htmlFor="status">Original Key</InputLabel>
                                                <Select
                                                    input={<OutlinedInput name="originalkey" id="original_key" />}
                                                    value={this.state.original_key}
                                                    onChange={this.handleInputChangeFor('original_key')}
                                                >
                                                    <MenuItem value="Ab">Ab</MenuItem>
                                                    <MenuItem value="A">A</MenuItem>
                                                    <MenuItem value="Bb">Bb</MenuItem>
                                                    <MenuItem value="B">B</MenuItem>
                                                    <MenuItem value="C">C</MenuItem>
                                                    <MenuItem value="Dd">Db</MenuItem>
                                                    <MenuItem value="D">D</MenuItem>
                                                    <MenuItem value="Eb">Eb</MenuItem>
                                                    <MenuItem value="E">E</MenuItem>
                                                    <MenuItem value="F">F</MenuItem>
                                                    <MenuItem value="F#">F#</MenuItem>
                                                    <MenuItem value="G">G</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Box>
                                    </Grid>
                                    <Grid xs={12}>
                                        <center>
                                            <Button
                                                style={styles.button}
                                                variant="contained"
                                                color="secondary"
                                                type="submit">
                                                Save Edits
                                            </Button>
                                        </center>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                        </Grid>
                    </Container>
                </div>
            </div>

        );
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(EditSong);