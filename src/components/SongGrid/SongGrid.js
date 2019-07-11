import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import './SongGrid.css';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';


const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 2,
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
};


class SongGrid extends Component {
  handleClick = (songId) => {
    console.log('song id', songId)
    this.props.history.push(`/song-details/${songId}`);
  }

  render() {
    return (
      <Container component="main" maxWidth="">
        <Grid container id="SongGrid" justify="center" spacing={2}>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          {this.props.filteredSongs.map(song => (
            <Grid container spacing={2} item xs={5} className="imageContainer" key={song.id}>
              <Grid item xs={3} spacing={2}>
                <img onClick={() => this.handleClick(song.id)} src={song.album_cover} alt="album_cover" /> </Grid>
              <Grid item xs={3} >
                <h5 className="songArtist" onClick={() => this.handleClick(song.id)} song={song}>{song.artist}</h5>
              <h5 className="songTitle"onClick={() => this.handleClick(song.id)} song={song}>{song.title}</h5>
            </Grid>
            <Grid
              className="arrow"
              item xs={3}
              container
              direction="row"
              justify="center"
              alignItems="center">
              <i class="material-icons">arrow_forward_ios</i></Grid>
            </Grid>
        ))}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = reduxState => reduxState;


export default connect(mapStateToProps)(withRouter(SongGrid));

