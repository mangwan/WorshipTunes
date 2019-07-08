import React, { Component } from 'react';
import { connect } from 'react-redux';


//material UI
import { TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    width: '80%',
  },
  title: {
    textAlign: 'center',
    // color: '#F7882F',
    fontSize: '22px',
    marginTop: '80px',
  },
  button: {
    marginTop: '30px',

  },
};

class RequestSongPage extends Component {
  state = {
    name: '',
    email: '',
    song_title: '',
    artist_name: '',
  };

  submitRequest = (event) => {
    event.preventDefault();
    if (this.state.name && this.state.email && this.state.song_title && this.state.artist_name) {
      this.props.dispatch({
        type: 'POST_SONG_REQUEST',
        payload: {
          name: this.state.name,
          email: this.state.email,
          song_title: this.state.song_title,
          artist_name: this.state.artist_name,
        },
      });
      this.setState({
        name: '',
        email: '',
        song_title: '',
        artist_name: '',
      });
      alert('Song request sent!');
    } else {
      alert('Please fill out all fields!');
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
          </Grid>
          <Grid item xs={12} sm={8}>
            <form style={styles.container} onSubmit={this.submitRequest}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                   <div style={styles.title}>
            <h2>Request a Song</h2>
            </div>
                  <h4>Looking for a song not in the database? Submit a song request here.</h4>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handleInputChangeFor('name')}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    id="email"
                    value={this.state.email}
                    onChange={this.handleInputChangeFor('email')}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Song Title"
                    id="song_title"
                    value={this.state.song_title}
                    onChange={this.handleInputChangeFor('song_title')}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Artist Name"
                    id="artist_name"
                    value={this.state.artist_name}
                    onChange={this.handleInputChangeFor('artist_name')}
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <div>
                <Button style={styles.button} variant="contained" color="primary" type="submit">Submit</Button>
              </div>
            </form>
          </Grid>
          <Grid item xs={12} sm={2}>
          </Grid>
        </Grid >
      </div >
    );
  }
}

export default connect()(RequestSongPage);

