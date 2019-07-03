import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import './SongGrid.css';

//material ui styling
import Grid from '@material-ui/core/Grid';

class SongGrid extends Component {
  handleClick = (songId) => {
    console.log('song id', songId)
    console.log('in handleclick song grid');
    this.props.dispatch({
      type: 'GET_SONG_DETAILS',
      // id: songId
      payload: songId,
    });
    this.props.history.push('/song-details');
  }

  render() {
    return (
      <div className="individual_song">
        <Grid container spacing={3}>
          {this.props.songs.map(song => (
            <div key={song.id}>
              <Grid item xs={6}>
                <img onClick={() => this.handleClick(song.id)} src={song.album_cover} alt="album_cover" />
                <h4 onClick={() => this.handleClick(song.id)} song={song}>Artist: {song.artist}</h4>
                <p onClick={() => this.handleClick(song.id)} song={song}>Title: {song.title}</p>
              </Grid>
              <br />
            </div>
          ))}
          <pre>
            {JSON.stringify(this.props, null, 2)}
          </pre>
        </Grid>
      </div >
    );
  }
}

const mapStateToProps = reduxState => reduxState;


export default connect(mapStateToProps)(withRouter(SongGrid));

