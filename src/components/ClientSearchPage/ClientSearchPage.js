import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongGrid from '../SongGrid/SongGrid';

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
              <SongGrid />
        </div>
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
