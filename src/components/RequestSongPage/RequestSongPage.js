import React, { Component } from 'react';
import { connect } from 'react-redux';


//Material UI
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import { TextField } from '@material-ui/core';


const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    width: '100%',
  },
  subTitle: {
    color: '#ff6f08',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    marginTop: '40px',
  },
  button: {
    marginTop: '30px',
    backgroundColor: '#1DB954',
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
      swal({
        title: "Request Sent!",
        text: "",
        icon: "success",
        button: "Ok",
      });
    } else {
      swal('Please fill out all fields!');
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }
  render() {
    return (
      <Container component="main" maxWidth="md">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={2}>
          </Grid>
          <Grid item xs={12} sm={8}>
            <form style={styles.container} onSubmit={this.submitRequest} autoComplete="off">
              <center>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <div style={styles.title}>
                      <h2>Request a Song</h2>
                    </div>
                    <h4 style={styles.subTitle}>Looking for a song not in the database? Submit a song request here.
                  </h4>
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

                <Button
                  style={styles.button}
                  variant="contained"
                  color="secondary"
                  type="submit">
                  Submit
                  </Button>
              </center>
            </form>
          </Grid>
          <Grid item xs={12} sm={2}>
          </Grid>
        </Grid >
      </Container>
    );
  }
}

export default connect()(RequestSongPage);

