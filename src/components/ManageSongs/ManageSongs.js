import React, { Component } from 'react';
import { connect } from 'react-redux';

//material ui
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ManageSongs extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'GET_SONGS' })
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
            <h1 className="songlist">Song List</h1>
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
                                        {this.props.songs.map(song=>
                                            <TableRow key={song.id}>
                                                <TableCell>
                                                    {song.title}
                                                </TableCell>
                                                <TableCell>
                                                    {song.artist}
                                                </TableCell>
                                                <TableCell>
                                                    <button>Edit</button>
                                                </TableCell>
                                                <TableCell>
                                                    <button>Delete</button>
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