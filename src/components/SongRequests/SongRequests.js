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
  title: {
    textAlign: 'center',
    // color: '#1DB954',
    fontSize: '20px',
  },
};

class SongRequests extends Component {
  state = {
    requests: this.props.songRequests,
  }

  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_SONG_REQUESTS' })
  }

  handleClickDelete = (requestId) => {
    console.log('in delete song request', requestId)
    if (window.confirm('Are you sure you want to delete this song request?')) {
      console.log("You pressed OK!")
      this.props.dispatch({
        type: 'DELETE_SONG_REQUEST',
        payload: requestId,
      })
    }
  }

  render() {
    return (
      <div>
        <header>
          <img img width="100%" src="images/mountain.jpg" alt="mountain"></img>
        </header>
        <div className="container">
          <div style={styles.title}>
            <h2>Song Requests</h2>
          </div>
          <div>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Song Title</TableCell>
                  <TableCell>Arist Name</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.songRequests.map(request =>
                  <TableRow key={request.id}>
                    <TableCell>
                      Date
                      </TableCell>
                    <TableCell>
                      {request.name}
                    </TableCell>
                    <TableCell>
                      {request.email}
                    </TableCell>
                    <TableCell>
                      {request.song_title}
                    </TableCell>
                    <TableCell>
                      {request.artist_name}
                    </TableCell>
                    <TableCell>
                      <Button 
                      variant="outlined"
                      style={styles.buttonDelete}
                      color="secondary"
                      onClick={() => this.handleClickDelete(request.id)} 
                      request={request}>Delete
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

export default connect(mapStateToProps)(SongRequests);