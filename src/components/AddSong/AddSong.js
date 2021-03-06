import React, { Component } from 'react';
import { connect } from 'react-redux';

//Material UI
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
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
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        width: '100%',
    },
    title: {
        textAlign: 'center',
        fontSize: '20px',
        marginTop: '40px',
    },
    button: {
        margin: '15px',
        backgroundColor: '#1DB954',
    },
    subTitle: {
        color: '#ff6f08',
        textAlign: 'center',
    },
};

class AddSong extends Component {
    state = {
        songTitle: '',
        artistName: '',
        lyrics: '',
        tempo: '',
        BPM: '',
        CCLI: '',
        albumUrl: '',
        spotifyUri: '',
        originalKey: '',
    };

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    addNewSong = (event) => {
        event.preventDefault();
        if (this.state.songTitle &&
            this.state.artistName &&
            this.state.lyrics &&
            this.state.tempo &&
            this.state.originalKey) {
            this.props.dispatch({
                type: 'ADD_NEW_SONG',
                payload: {
                    ...this.state,
                },
            });
            this.setState({
                songTitle: '',
                artistName: '',
                lyrics: '',
                tempo: '',
                BPM: '',
                CCLI: '',
                albumUrl: '',
                spotifyUri: '',
                originalKey: '',
            });
            swal({
                title: "Song Added!",
                text: "",
                icon: "success",
                button: "Ok",
            });
        } else {
            swal('Please fill out all required fields!');
        }
    }

    render() {
        return (
            <Container component="main" maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={2}>
                    </Grid>
                    <form style={styles.container} onSubmit={this.addNewSong}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <div style={styles.title}>
                                    <h2>Add a Song</h2>
                                </div>
                                <h4 style={styles.subTitle}>
                                    Complete the form to add a new song to the database.
                                </h4>
                            </Grid>
                            <Grid item xs={6}>
                                <Box p={1}>
                                    <TextField
                                        label="Song Title*"
                                        id="songTitle"
                                        value={this.state.songTitle}
                                        onChange={this.handleInputChangeFor('songTitle')}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </Box>
                                <Box p={1}>
                                    <TextField
                                        label="Artist Name*"
                                        id="artistName"
                                        value={this.state.artistName}
                                        onChange={this.handleInputChangeFor('artistName')}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </Box>
                                <Box p={1}
                                ><TextField
                                        label="Lyrics*"
                                        id="lyrics"
                                        multiline
                                        rows="13"
                                        value={this.state.lyrics}
                                        onChange={this.handleInputChangeFor('lyrics')}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Box p={1}
                                ><TextField
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
                                <Box p={1}
                                ><TextField
                                        label="Album URL"
                                        id="albumUrl"
                                        value={this.state.albumUrl}
                                        onChange={this.handleInputChangeFor('albumUrl')}
                                        fullWidth
                                        variant="outlined"
                                    /></Box>
                                <Box p={1}>
                                    <TextField
                                        label="Spotify URI"
                                        id="spotifyUri"
                                        value={this.state.spotifyUri}
                                        onChange={this.handleInputChangeFor('spotifyUri')}
                                        fullWidth
                                        variant="outlined"
                                    />
                                </Box>
                                <Box p={1}>
                                    <FormControl style={styles.dropdown} fullWidth variant="outlined">
                                        <InputLabel htmlFor="status">
                                            Tempo*
                                        </InputLabel>
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
                                    <FormControl style={styles.dropdown} fullWidth variant="outlined">
                                        <InputLabel
                                            htmlFor="status">Original Key*
                                    </InputLabel>
                                        <Select
                                            input={<OutlinedInput name="originalkey" id="originalkey" />}
                                            value={this.state.originalKey}
                                            onChange={this.handleInputChangeFor('originalKey')}
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
                                        Submit
                            </Button>
                                </center>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
                <Grid item xs={12} sm={2}>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(AddSong);