import React, { Component } from 'react';
import { connect } from 'react-redux';

//material UI
import Grid from '@material-ui/core/Grid';

class EditSong extends Component {
    state = {
        song: this.props.songDetails
    }

    componentDidMount = () => {
        const song_id = this.props.match.params.id
        this.props.dispatch({
            type: 'GET_SONG_DETAILS',
            payload: song_id,
        });
    }

    // triggers when props is updated. if props are different from state, update state
    componentWillReceiveProps(nextProps) {
        if (this.props.song != nextProps.songDetails) {
          this.setState({song: nextProps.songDetails});
        }
    }

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
            [propertyName]: event.target.value,
        });
    }

    editSong = (event) => {
        event.preventDefault();
        if (this.state.song.title &&
            this.state.song.artist &&
            this.state.song.lyrics &&
            this.state.song.tempo &&
            //need to add if statement to check if BPM and CCLI are numbers
            this.state.song.original_key) {
            this.props.dispatch({
                type: 'EDIT_SONG_DETAILS',
                payload: {
                    songTitle: this.state.song.title,
                    artistName: this.state.song.artist,
                    lyrics: this.state.song.lyrics,
                    tempo: this.state.song.tempo,
                    BPM: this.state.song.BPM,
                    CCLI: this.state.song.CCLI,
                    albumUrl: this.state.song.album_cover,
                    spotifyUri: this.state.song.spotify_uri,
                    originalKey: this.state.song.original_key,
                },
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
                    <form onSubmit={this.editSong}>
                        <h2>Edit Song</h2>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <label>Song Title*</label>
                                <div>
                                    <input
                                        type="text"
                                        name="songTitle"
                                        value={this.state.song.title}
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
                                        value={this.state.song.artist}
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
                                        value={this.state.song.lyrics}
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
                                        value={this.state.song.tempo}
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
                                        value={this.state.song.BPM}
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
                                        value={this.state.song.CCLI}
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
                                        value={this.state.song.album_cover}
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
                                        value={this.state.song.spotify_uri}
                                        onChange={this.handleInputChangeFor('spotify_uri')}
                                    />
                                </div>
                                <div>
                                    <label>Original Key*</label>
                                </div>
                                <div>
                                    <select
                                        name="originalKey"
                                        value={this.state.song.original_key}
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