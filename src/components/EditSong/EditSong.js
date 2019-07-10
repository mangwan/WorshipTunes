import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

//material UI
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

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
            //need to add if statement to check if BPM and CCLI are numbers
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
            alert('Song has been updated!');
            /* MANG TO DO: dispatch to a saga that does a put command. 
               any need to update store with reducer? */
        } else {
            alert('Please fill out all required fields!');
            console.log(this.state)
        }
    }

    render() {
        return (
            <div>
                <header>
                    <img img width="100%" src="images/mountain.jpg" alt="mountain"></img>
                </header>
                {/* <pre>
                    {JSON.stringify(this.props, null, 2)}
                </pre> */}
                <div>
                <Breadcrumbs separator="›" aria-label="Breadcrumb">
        <Link color="inherit" onClick={() => this.props.history.push('/manage-songs')}>Manage Songs</Link>
        <Typography color="textPrimary">Edit Song</Typography>
        </Breadcrumbs>
                    <form onSubmit={this.editSong}>
                        <h2>Edit Song</h2>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <label>Song Title*</label>
                                <div>
                                    <input
                                        type="text"
                                        name="songTitle"
                                        value={this.state.title}
                                        onChange={this.handleInputChangeFor('title')}
                                    />
                                </div>
                                <div>
                                    <label>Artist Name*</label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="artistName"
                                        value={this.state.artist}
                                        onChange={this.handleInputChangeFor('artist')}
                                    />
                                </div>
                                <div>
                                    <label>Lyrics*</label>
                                </div>
                                <div>
                                    <textarea
                                        rows="30"
                                        cols="20"
                                        name="lyrics"
                                        value={this.state.lyrics}
                                        onChange={this.handleInputChangeFor('lyrics')}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div>
                                    <label>Tempo*</label>
                                </div>
                                <div>
                                    <select
                                        name="tempo"
                                        value={this.state.tempo}
                                        onChange={this.handleInputChangeFor('tempo')}
                                    >
                                        <option value="slow">Slow</option>
                                        <option value="medium">Medium</option>
                                        <option value="fast">Fast</option>
                                    </select>
                                </div>
                                <div>
                                    <label>BPM</label>
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        name="BPM"
                                        value={this.state.BPM}
                                        onChange={this.handleInputChangeFor('BPM')}
                                    />
                                </div>
                                <div>
                                    <label>CCLI#</label>
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        name="CCLI"
                                        value={this.state.CCLI}
                                        onChange={this.handleInputChangeFor('CCLI')}
                                    />
                                </div>
                                <div>
                                    <label>Album URL</label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="albumUrl"
                                        value={this.state.album_cover}
                                        onChange={this.handleInputChangeFor('album_cover')}
                                    />
                                </div>
                                <div>
                                    <label>Spotify URI</label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="spotifyUri"
                                        value={this.state.spotify_uri}
                                        onChange={this.handleInputChangeFor('spotify_uri')}
                                    />
                                </div>
                                <div>
                                    <label>Original Key*</label>
                                </div>
                                <div>
                                    <select
                                        name="originalKey"
                                        value={this.state.original_key}
                                        onChange={this.handleInputChangeFor('original_key')}
                                    >
                                        <option>Ab</option>
                                        <option>A</option>
                                        <option>Bb</option>
                                        <option>B</option>
                                        <option>C</option>
                                        <option>Db</option>
                                        <option>D</option>
                                        <option>Eb</option>
                                        <option>E</option>
                                        <option>F</option>
                                        <option>F#</option>
                                        <option>G</option>
                                    </select>
                                </div>
                                <div>
                                    <input
                                        type="submit"
                                        name="submit"
                                        value="Submit"
                                    />
                                </div>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>

        );
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(EditSong);