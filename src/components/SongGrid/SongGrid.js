import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongGrid extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_SONGS' })
  }

  render() {
    return (
      <>
      {this.props.songs.map((song) => {
        return (
          <>
            <img src={song.album_cover} alt="album_cover" />
            <p song={song}>Artist: {song.artist}</p>
            <p song={song}>Title: {song.title}</p>
            <br />
          </>
        );
      })}
      </>
    );
  }
}

const mapStateToProps = reduxState => reduxState; 
  

export default connect(mapStateToProps)(SongGrid);

