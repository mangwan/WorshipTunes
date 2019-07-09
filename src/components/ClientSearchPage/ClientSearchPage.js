import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongGrid from '../SongGrid/SongGrid';
// import photo from '../../../public/images/moutain.jpg'
import '../ClientSearchPage/ClientSearchPage.css';
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

// const ClientSearchPage = props => (
class ClientSearchPage extends Component {
  state = {
    search_term: ""

  }

  componentDidMount() {
    this.props.dispatch({ type: 'GET_SONGS' })
  }

  handleChange = (event) => {
    this.setState({
      search_term: event.target.value
    })
  }

  searchSongs = () => {
    let filtered_songs = []
    /* push to filtered_songs if title or artis includes the term
       MANG TO DO: case insensitive */
    this.props.songs.map(song => {
      if (song.title.includes(this.state.search_term) ||
        song.artist.includes(this.state.search_term)) {
        filtered_songs.push(song)
      }
    })

    this.props.dispatch({ type: 'SET_FILTERED_SONGS', payload: filtered_songs })
    /* MANG STRETCH GOAL: stretch goal is to instead push to 
       a new page that saves the search in the url */
    console.log(filtered_songs)
  }

  render() {
    return (
      <div>
        <header>
          <img img width="100%" src="images/mountain.jpg" alt="mountain"></img>
        </header>
        <div className="container">
          <div>
            <h2>Search for a Song</h2>
            <input onChange={this.handleChange} />
            <button onClick={this.searchSongs}>Search</button>

          </div>
          <div>
            <h2 className="songlist">Song List</h2>
            <SongGrid />
          </div>
          {/* <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre> */}
        </div>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = reduxState => reduxState;


export default connect(mapStateToProps)(ClientSearchPage);
