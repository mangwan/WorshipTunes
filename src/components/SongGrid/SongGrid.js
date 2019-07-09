import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import './SongGrid.css';

import Grid from '@material-ui/core/Grid';


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
      <Grid container id="SongGrid" justify="center" spacing={2}>
          {this.props.filteredSongs.map(song => (
            <Grid container spacing={2} item xs={6} className="imageContainer" key={song.id}>            
              <Grid item xs={4}>
                <img onClick={() => this.handleClick(song.id)} src={song.album_cover} alt="album_cover" /> </Grid>
                <Grid item xs={3}> <p onClick={() => this.handleClick(song.id)} song={song}>{song.artist}</p> </Grid>
                <Grid item xs={3}> <p onClick={() => this.handleClick(song.id)} song={song}>{song.title}</p> </Grid>   
            </Grid>
          ))}
        </Grid>
    );
  }
}

const mapStateToProps = reduxState => reduxState;


export default connect(mapStateToProps)(withRouter(SongGrid));

     {/* <pre>
            {JSON.stringify(this.props, null, 2)}
          </pre> */}
