import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import './SongGrid.css';

//Material UI
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#000000' },
  },
  margin: '0px',
});

class SongGrid extends Component {
  handleClick = (songId) => {
    console.log('song id', songId)
    this.props.history.push(`/song-details/${songId}`);
  }

  render() {
    return (
      <Container component="main" maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h2>Results</h2>
            <Divider></Divider>
            <Divider></Divider>
            <Divider></Divider>
          </Grid>
          <Grid xs={12}>
            <h1></h1>
          </Grid>
        </Grid>
        <Grid container id="SongGrid" justify="center" spacing={2}>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          {this.props.filteredSongs.map(song => (
            <Grid container spacing={2} item xs={4} className="imageContainer" key={song.id}>
              <Grid item xs={4} spacing={2}>
                <img onClick={() => this.handleClick(song.id)} src={song.album_cover} alt="album_cover" />
              </Grid>
              <Grid item xs={4} >
                <h5 className="songArtist" onClick={() => this.handleClick(song.id)} song={song}>{song.artist}</h5>
                <h5 className="songTitle" onClick={() => this.handleClick(song.id)} song={song}>{song.title}</h5>
              </Grid>
              <Grid
                className="arrow"
                item xs={4}
                container
                direction="row"
                justify="center"
                alignItems="center">
                <i class="material-icons">arrow_forward_ios</i>
              </Grid>
              <Grid xs={11}>
                <Divider></Divider>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = reduxState => reduxState;


export default connect(mapStateToProps)(withRouter(SongGrid));

