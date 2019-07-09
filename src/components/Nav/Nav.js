import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

const styles = {
  toolbarTitle: {
    flexGrow: 1,
  },
};

const Nav = (props) => (
  <div>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
  rel="stylesheet"></link>
  <div className="nav">
  <Button><Link to="/home">
  <Typography variant="h6" color="inherit" noWrap styles={styles.toolbarTitle}>
      <h2 className="nav-title">Prime Solo Project</h2>
      </Typography>
    </Link></Button>
    <div className="nav-right">
    <Button><Link className="nav-link" to="/home">
        {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
        {props.user.id ? 
          'Search' 
          : 
          'Login / Register'}
      </Link></Button>
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id && (
        <>
          <Button><Link className="nav-link" to="/request-song">
            Request Song
          </Link></Button>
          <Button><Link className="nav-link" to="/manage-songs">
            Manage Songs
          </Link></Button>
          <Button><Link className="nav-link" to="/song-requests">
            Song Requests
          </Link></Button>
          <Button><Link className="nav-link" to="/add-song">
            Add Song
          </Link></Button>
         {/* <LogOutButton className="nav-link"/> */}
         
         <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
    <Button
      // This button shows up in multiple locations and is styled differently
      // because it's styled differently depending on where it is used, the className
      // is passed to it from it's parents through React props
      className={props.className}
      onClick={() => props.dispatch({ type: 'LOGOUT' })}
    ><Link className="nav-link" > 
      <i class="material-icons">account_circle</i>
      <span> </span>
      {props.user.username}
      <span> </span>
      <i class="material-icons">expand_more</i>
    </Link></Button>
        </>
      )}
      {/* Always show this link since the about page is not protected */}
      {/* <Link className="nav-link" to="/about">
        About
      </Link> */}
    </div>
  </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);