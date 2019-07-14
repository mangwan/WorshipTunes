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
import swal from 'sweetalert';

const styles = {
  buttonEdit: {
    fontSize: '10px',
  },
  buttonDelete: {
    fontSize: '10px',
  },
  title: {
    textAlign: 'center',
    fontSize: '20px',
    marginTop: '40px',
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
    (swal({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this song request?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.dispatch({
            type: 'DELETE_SONG_REQUEST',
            payload: requestId,
          })
          swal("Song request has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Cancel!");
        }
      })
    )
  }

  render() {
    return (
      <Container component="main" maxWidth="lg">
          <div style={styles.title}>
            <h2>Song Requests</h2>
          </div>
          <div>
            <Table>
              <TableHead>
                <TableRow>           
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
      </Container>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(SongRequests);