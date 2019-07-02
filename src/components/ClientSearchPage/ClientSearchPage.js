// import React from 'react';
// import { connect } from 'react-redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

// const ClientSearchPage = props => (
class ClientSearchPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_SONGS' })
  }

  render() {
    return (
      <>
        <div>
          <h2>Search for a Song</h2>
          <input></input>
          <button>Search</button>

        </div>
        <div>
          <h1>Song List</h1>
        </div>
        {/* <div>
          {this.props.songs.map((song) => {
            return (
              <>
                <p song={song}>Artist: {song.artist}</p>
                <p song={song}>Title: {song.title}</p>
                <pre>{song.lyrics}</pre>
                <br />
              </>
            );
          })}
        </div> */}
        <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre>
      </>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = reduxState => reduxState; 
  

export default connect(mapStateToProps)(ClientSearchPage);
