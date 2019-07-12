import React, { Component } from 'react';
import { connect } from 'react-redux';
import SongGrid from '../SongGrid/SongGrid';


import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  // palette: {
  //   primary: { main: '#000000' },
  // },
  // margin: '0px',
});

const styles = {
  title: {
    textAlign: 'center',
    fontSize: '20px',
  },
  button: {
    marginTop: '25px',
    backgroundColor: '#1DB954',
  },
  search: {
    margin: '25px',
  },
  TextField: {
    borderColor: 'black',
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
        <div>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <div>
            <Container component="main" maxWidth="lg">
              <Grid container spacing={2}>
                <Grid item xs={12} xs={12}>
                </Grid>
                <Container component="main" maxWidth="sm" style={styles.search}>
                  <form style={styles.container} onSubmit={this.submitRequest} autoComplete="off">
                    <Grid container spacing={1}>
                      <Grid item xs={9}>
                      <ThemeProvider theme={theme}>
                        <TextField
                          id="standard-search"
                          label="Search for an artist or song..."
                          type="search"
                          margin="normal"
                          variant="outlined"
                          onChange={this.handleChange}
                          fullWidth
                          style={styles.TextField}
                        />
                        </ThemeProvider>
                      </Grid>
                      <Grid item xs={1}>
                        <Button
                          style={styles.button}
                          variant="contained"
                          color="secondary"
                          type="submit"
                          onClick={this.searchSongs}>
                          <i class="material-icons">search</i>
                          Search
            </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Container>
                <Grid item xs={12} xs={12}>
                </Grid>
              </Grid>
            </Container>
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
