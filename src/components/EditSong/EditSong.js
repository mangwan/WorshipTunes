import React, { Component } from 'react';
import { connect } from 'react-redux';

//material UI
import Grid from '@material-ui/core/Grid';

class EditSong extends Component {
    state = {
        songTitle: this.props.songDetails.title,
        artistName: this.props.songDetails.artist,
        lyrics: this.props.songDetails.lyrics,
        tempo: this.props.songDetails.tempo,
        BPM: this.props.songDetails.BPM,
        CCLI: this.props.songDetails.CCLI,
        albumUrl: this.props.songDetails.album_cover,
        spotifyUri: this.props.songDetails.spotify_uri,
        originalKey: this.props.songDetails.original_key,
    };

    componentDidMount = () => {
        const song_id = this.props.match.params.id
        this.props.dispatch({
            type: 'GET_SONG_DETAILS',
            payload: song_id,
        });
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
        console.log(this.state)
    }

    editSong = (event) => {
        event.preventDefault();
        if (this.state.songTitle &&
            this.state.artistName &&
            this.state.lyrics &&
            this.state.tempo &&
            //need to add if statement to check if BPM and CCLI are numbers
            this.state.originalKey) {
            this.props.dispatch({
                type: 'EDIT_SONG_DETAILS',
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
            alert('New song added to the database!');
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
                {/* <pre>
                    {JSON.stringify(this.props, null, 2)}
                </pre> */}
                <div>
                    <form onSubmit={this.editSong}>
                        <h2>Edit Song</h2>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <label>Song Title*</label>
                                <div>
                                    <input
                                        type="text"
                                        name="songTitle"
                                        value={this.props.songDetails.songTitle}
                                        onChange={() => this.handleInputChangeFor('songTitle')}
                                    />
                                </div>
                                <div>
                                    <label>Artist Name*</label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="artistName"
                                        value={this.props.songDetails.artist}
                                        onChange={() => this.handleInputChangeFor('artistName')}
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
                                        value={this.props.songDetails.lyrics}
                                        onChange={() => this.handleInputChangeFor('lyrics')}
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
                                        value={this.props.songDetails.tempo}
                                        onChange={() => this.handleInputChangeFor('tempo')}
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
                                        value={this.props.songDetails.BPM}
                                        onChange={() => this.handleInputChangeFor('BPM')}
                                    />
                                </div>
                                <div>
                                    <label>CCLI#</label>
                                </div>
                                <div>
                                    <input
                                        type="number"
                                        name="CCLI"
                                        value={this.props.songDetails.CCLI}
                                        onChange={() => this.handleInputChangeFor('CCLI')}
                                    />
                                </div>
                                <div>
                                    <label>Album URL</label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="albumUrl"
                                        value={this.props.songDetails.album_cover}
                                        onChange={() => this.handleInputChangeFor('albumUrl')}
                                    />
                                </div>
                                <div>
                                    <label>Spotify URI</label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="spotifyUri"
                                        value={this.props.songDetails.spotify_uri}
                                        onChange={() => this.handleInputChangeFor('spotifyUri')}
                                    />
                                </div>
                                <div>
                                    <label>Original Key*</label>
                                </div>
                                <div>
                                    <select
                                        name="originalKey"
                                        value={this.props.songDetails.original_key}
                                        onChange={() => this.handleInputChangeFor('originalKey')}
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