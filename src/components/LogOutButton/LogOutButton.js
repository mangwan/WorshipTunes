import React from 'react';
import { connect } from 'react-redux';
import './LogOutButton.css';

import Grid from '@material-ui/core/Grid';

const LogOutButton = props => (
  <>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
    <button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => props.dispatch({ type: 'LOGOUT' })}
    >
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <i class="material-icons">account_circle</i>
          </div>
        </Grid>
        <Grid item>
          {props.user.username} Log Out
          <i class="material-icons">expand_more</i>
  </Grid>
      </Grid>
    </button>
    {/* <p>Your ID is: {props.user.id}</p>  */}
  </>
);

const mapStateToProps = state => ({
  user: state.user,
});
// This component doesn't need 'mapStateToProps'
// because it doesn't care what the current state is.
// No matter what the redux state is, this button will always be a log out button
// this component still needs 'connect' though, because it is going to dispatch a redux action
export default connect(mapStateToProps)(LogOutButton);

