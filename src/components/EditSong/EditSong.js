import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditSong extends Component {

    render() {
        return (
            <h2>Edit Song Page</h2>
        )
    }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(EditSong);