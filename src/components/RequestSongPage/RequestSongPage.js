import React, { Component } from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class RequestSongPage extends Component {
  state = {
    name: '',
    email: '',
    song_title: '',
    artist_name: '',
  };

  registerUser = (event) => {
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
        <header>
          <img img width="100%" src="images/mountain.jpg" alt="mountain"></img>
        </header>
        <div>
          <div>
            <form onSubmit={this.registerUser}>
              <h2>
                Request a Song
              </h2>
              <label>Name</label>
              <div>
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChangeFor('name')}
                />
              </div>
              <div>
                <label>Email</label>
              </div>
              <div>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChangeFor('email')}
                />
              </div>
              <div>
                <label>Song Title</label>
              </div>
              <div>
                <input
                  type="text"
                  name="song_title"
                  value={this.state.song_title}
                  onChange={this.handleInputChangeFor('song_title')}
                />
              </div>
              <div>
                <label>Artist Name</label>
              </div>
              <div>
                <input
                  type="text"
                  name="artist_name"
                  value={this.state.artist_name}
                  onChange={this.handleInputChangeFor('artist_name')}
                />
              </div>
              <div>
                <input
                  type="submit"
                  name="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(RequestSongPage);