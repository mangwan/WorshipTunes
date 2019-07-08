import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ManageSongs extends Component {
state = {
  songs: this.props.songs,
}

  componentDidMount() {
    this.props.dispatch({ type: 'GET_SONGS' })
  }

  handleClickDelete = (songId) => {
    console.log('song id', songId)
    if (window.confirm('Are you sure you want to delete this song?')){
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
            <input></input>
            <button>Search</button>

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
                {this.props.songs.map(song =>
                  <TableRow key={song.id}>
                    <TableCell>
                      {song.title}
                    </TableCell>
                    <TableCell>
                      {song.artist}
                    </TableCell>
                    <TableCell>
                      <button onClick={() => this.handleClickEdit(song.id)} song={song}>Edit</button>
                    </TableCell>
                    <TableCell>
                      <button onClick={() => this.handleClickDelete(song.id)} song={song}>Delete</button>
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