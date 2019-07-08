import React, { Component } from 'react';
import { connect } from 'react-redux';

class ManageSongs extends Component {
  render() {
    return (
        <h2>Mange Songs Page</h2>
        );
    }
  }
  
export default connect()(ManageSongs);