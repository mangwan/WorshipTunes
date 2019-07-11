import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongGrid from '../SongGrid/SongGrid';
import '../ClientSearchPage/ClientSearchPage.css';


import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
  },
  button: {
    marginTop: '30px',
    backgroundColor: '#1DB954',

  },
};

class ClientSearchPage extends Component {
  state = {
    search_term: "",
  }

  componentDidMount() {
    this.props.dispatch({ type: 'GET_SONGS' })
  }

  handleChange = (event) => {
    this.setState({
      search_term: event.target.value,
    })
  }

  searchSongs = () => {
    let filtered_songs = []
    this.props.songs.map(song => {
      if (this.caseInsensitiveInclude(song)) {
        filtered_songs.push(song)
      }
    })
    this.props.dispatch({ type: 'SET_FILTERED_SONGS', payload: filtered_songs })
  }

  caseInsensitiveInclude = (song) => {
    return song.title.toLowerCase().includes(this.state.search_term) || 
    song.title.includes(this.state.search_term) || 
    song.artist.toLowerCase().includes(this.state.search_term) ||
    song.artist.includes(this.state.search_term)
  }

  render() {
    return (
      <div>
        <header>
          <img img width="100%" src="images/mountain.jpg" alt="mountain"></img>
        </header>
        <div className="container">
          <div className="search">
          <Container component="main" maxWidth="xl">
          <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <div style={styles.title}>
            <h2>Search for a Song</h2>
            </div>
            </Grid>
                <Grid item xs={12}>
                <TextField
        id="standard-search"
        label="Search field"
        type="search"
        margin="normal"
        onChange={this.handleChange}
      />
            {/* <input onChange={this.handleChange} /> */}
            <button onClick={this.searchSongs}>Search</button>
            </Grid>
            </Grid>
           </Container>
          </div>
          <div className="title" style={styles.title}>
            <h2 className="songlist">Song List</h2>
            </div>
            <SongGrid />
          {/* <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;


export default connect(mapStateToProps)(ClientSearchPage);
