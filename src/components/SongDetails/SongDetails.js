import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetails extends Component {
  
  render() {
    return (
      <>
      <h1>Song Details</h1>
      </>
    );
  }
}

const mapStateToProps = reduxState => reduxState; 
  

export default connect(mapStateToProps)(SongDetails);

