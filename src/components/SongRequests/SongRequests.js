import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongRequests extends Component {
  render() {
    return (
        <h2>Song Requests Page</h2>
        );
    }
  }
  
export default connect()(SongRequests);