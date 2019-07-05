import React, { Component }  from 'react';
import { connect } from 'react-redux';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class RequestSongPage extends Component {
  render() {
    return (
      <div>
        <header>
          <img img width="100%" src="images/mountain.jpg" alt="mountain"></img>
        </header>
        <div>
          <h2>
            Request a Song
      </h2>
          <div>
            <form>
              <label>Name</label>
              <br />
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChangeFor('name')}
              />
              <br />
              <label>Email</label>
              <br />
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
              <br />
              <label>Song Title</label>
              <br />  
              <input
                type="text"
                name="songTitle"
                value={this.state.songTitle}
                onChange={this.handleInputChangeFor('songTitle')}
              />
              <br />
              <label>Artist Name</label>
              <br />
              <input
                type="text"
                name="artistName"
                value={this.state.artistName}
                onChange={this.handleInputChangeFor('artistName')}
              />
              <br />
            </form>
          </div>
          <center>
            <button>
              Submit
          </button>
          </center>
        </div>
      </div>
    );
  }
}

export default connect()(RequestSongPage);