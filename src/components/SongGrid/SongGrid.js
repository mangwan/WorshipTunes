import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


class SongGrid extends Component {
  handleClickSongGrid = () => {
    console.log('in handleclick song grid')
    console.log(this.props)
    this.props.history.push('/song-details');
  }

  render() {
    return (
      <>
      {this.props.songs.map((song) => {
        return (
          <div onClick={this.handleClickSongGrid}>
            <img src={song.album_cover} alt="album_cover" />
            <p song={song}>Artist: {song.artist}</p>
            <p song={song}>Title: {song.title}</p>
          </div>
        );
      })}
      <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </>
    );
  }
}

const mapStateToProps = reduxState => reduxState; 
  

export default connect(mapStateToProps)(withRouter(SongGrid));

