import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


class SongGrid extends Component {
  handleClick = (songId) => {
    console.log('in handleclick song grid');
    this.props.history.push('/song-details');
    this.props.dispatch({
      type: 'GET_SONG_DETAILS',
      payload: {songId}
    });
  }

  render() {
    return (
      <>
      {this.props.songs.map(song => (
          <div key={song.id}>
            <img onClick={() => this.handleClick(song.id)}  src={song.album_cover} alt="album_cover" />
            <p onClick={() => this.handleClick(song.id)}  song={song}>Artist: {song.artist}</p>
            <p onClick={() => this.handleClick(song.id)}  song={song}>Title: {song.title}</p>
          </div>
      ))}
      <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </>
    );
  }
}

const mapStateToProps = reduxState => reduxState; 
  

export default connect(mapStateToProps)(withRouter(SongGrid));

