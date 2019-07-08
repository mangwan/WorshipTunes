import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddSongs extends Component {
  render() {
    return (
        <h2>Add Songs Page</h2>
        );
    }
  }
  
export default connect()(AddSongs);