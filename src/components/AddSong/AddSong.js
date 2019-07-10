import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import swal from 'sweetalert';

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        width: '80%',
    },
    title: {
        textAlign: 'center',
        // color: '#F7882F',
        fontSize: '22px',
        marginTop: '80px',
    },
    button: {
        marginTop: '30px',

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
        console.log(this.state)
    }

    addNewSong = (event) => {
        event.preventDefault();
        if (this.state.songTitle &&
            this.state.artistName &&
            this.state.lyrics &&
            this.state.tempo &&
            //need to add if statement to check if BPM and CCLI are nubmers
            this.state.originalKey) {
            this.props.dispatch({
                type: 'ADD_NEW_SONG',
                payload: {
                    songTitle: this.state.songTitle,
                    artistName: this.state.artistName,
                    lyrics: this.state.lyrics,
                    tempo: this.state.tempo,
                    BPM: this.state.BPM,
                    CCLI: this.state.CCLI,
                    albumUrl: this.state.albumUrl,
                    spotifyUri: this.state.spotifyUri,
                    originalKey: this.state.originalKey,
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
            <div>
  <Grid container component="main" >
                        <form style={styles.container} onSubmit={this.addNewSong}>
         
                                    <div style={styles.title}>
                                        <h2>Add a Song</h2>
                                    </div>
                      
                                    <TextField
                                        label="Song Title"
                                        id="songTitle"
                                        value={this.state.songTitle}
                                        onChange={this.handleInputChangeFor('songTitle')}
                                        fullWidth
                                        variant="outlined"
                                    />
                        
                                    <TextField
                                        label="Artist Name"
                                        id="artistName"
                                        value={this.state.artistName}
                                        onChange={this.handleInputChangeFor('artistName')}
                                        fullWidth
                                        variant="outlined"
                                    />
                          
                                    <TextField
                                        label="Lyrics"
                                        id="lyrics"
                                        multiline
                                        rows="10"
                                        value={this.state.lyrics}
                                        onChange={this.handleInputChangeFor('lyrics')}
                                        fullWidth
                                        variant="outlined"
                                    />
           
                                    <TextField
                                        label="BPM"
                                        id="BPM"
                                        value={this.state.BPM}
                                        onChange={this.handleInputChangeFor('BPM')}
                                        fullWidth
                                        variant="outlined"
                                    />
        
                                    <TextField
                                        label="CCLI#"
                                        id="CCLI"
                                        value={this.state.CCLI}
                                        onChange={this.handleInputChangeFor('CCLI')}
                                        fullWidth
                                        variant="outlined"
                                    />
             
                                    <TextField
                                        label="Album URL"
                                        id="albumUrl"
                                        value={this.state.albumUrl}
                                        onChange={this.handleInputChangeFor('albumUrl')}
                                        fullWidth
                                        variant="outlined"
                                    />
                          
                                    <TextField
                                        label="Spotify URI"
                                        id="spotifyUri"
                                        value={this.state.spotifyUri}
                                        onChange={this.handleInputChangeFor('spotifyUri')}
                                        fullWidth
                                        variant="outlined"
                                    />
                                
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
                                
                                <FormControl style={styles.dropdown} fullWidth variant="outlined">
                                <InputLabel htmlFor="status">Original Key</InputLabel>
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
                              
                            <div>
                                <Button style={styles.button} variant="contained" color="primary" type="submit">Add Song</Button>
                            </div>
                        </form>
                        </Grid>
            </div >
        );
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(AddSong);