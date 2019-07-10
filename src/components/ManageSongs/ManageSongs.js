import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const styles = {
  buttonEdit: {
    fontSize: '10px',
  },
  buttonDelete: {
    fontSize: '10px',
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
    console.log('song id', songId)
    if (window.confirm('Are you sure you want to delete this song?')) {
      console.log("You pressed OK!")
      this.props.dispatch({
        type: 'DELETE_SONG',
        payload: songId,
      })
    }
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
      <div>
        <header>
          <img img width="100%" src="images/mountain.jpg" alt="mountain"></img>
        </header>
        <div className="container">
          <div>
            <h2>Manage Songs</h2>
            <input onChange={this.handleChange}></input>
            <button onClick={this.searchSongs}>Search</button>
          </div>
          <div>
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
                      {/* <Button
                        style={styles.button}
                        variant="outlined"
                        color="secondary"
                        type="submit"
                        onClick={() => this.handleClickDelete(song.id)}
                        song={song}>Delete
                      </Button> */}
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
          </div>
          {/* <pre>
          {JSON.stringify(this.props, null, 2)}
        </pre> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(ManageSongs);