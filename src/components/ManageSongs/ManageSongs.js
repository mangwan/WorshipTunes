import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  // palette: {
  //   primary: { main: '#000000' },
  // },
});

const styles = {
  form: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  buttonEdit: {
    fontSize: '10px',
  },
  buttonDelete: {
    fontSize: '10px',
  },
  search: {
    margin: '25px',
  },
  searchButton: {
    marginTop: '25px',
    backgroundColor: '#1DB954',
  },
  TextField: {
    borderColor: 'black',
  },
};

class ManageSongs extends Component {
  state = {
    search_term: ""
  }

  componentDidMount() {
    this.props.dispatch({ type: 'GET_SONGS' })
  }

  handleClickDelete = (songId) => {
    (swal({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this song?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.dispatch({
            type: 'DELETE_SONG',
            payload: songId,
          })
          swal("Song has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Cancel!");
        }
      })
    )
  }

  handleClickEdit = (songId) => {
    console.log('song id', songId)
    console.log('handleClick Edit Song')
    this.props.history.push(`/edit-song/${songId}`);
  }

  handleChange = (event) => {
    this.setState({
      search_term: event.target.value
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
    /* MANG STRETCH GOAL: stretch goal is to instead push to 
       a new page that saves the search in the url */
    console.log(filtered_songs)
  }

  caseInsensitiveInclude = (song) => {
    return song.title.toLowerCase().includes(this.state.search_term) ||
      song.title.includes(this.state.search_term) ||
      song.artist.toLowerCase().includes(this.state.search_term) ||
      song.artist.includes(this.state.search_term)
  }

  render() {
    return (
      <Container component="main" maxWidth="lg">
              <Container component="main" maxWidth="sm" style={styles.search}>
                <form onSubmit={this.searchSongs} style={styles.form} noValidate autoComplete="off">
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
                        style={styles.searchButton}
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

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Artist</TableCell>
                  <TableCell>Edit</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.filteredSongs.map(song =>
                  <TableRow key={song.id}>
                    <TableCell>
                      {song.title}
                    </TableCell>
                    <TableCell>
                      {song.artist}
                    </TableCell>
                    <TableCell>
                      <Button
                        style={styles.buttonEdit}
                        variant="outlined"
                        color="primary"
                        type="submit"
                        onClick={() => this.handleClickEdit(song.id)}
                        song={song}>Edit
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        style={styles.buttonDelete}
                        color="secondary"
                        onClick={() => this.handleClickDelete(song.id)}
                        song={song}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>)}
              </TableBody>
            </Table>
            </Container> 
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(ManageSongs);