import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.css';

//Material UI
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
  toolbarTitle: {
    flexGrow: 1,
  },
};

const Nav = (props) => (
  <div>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
    <div className="nav">
      <Button><Link to="/home">
        <Typography variant="h6" color="inherit" noWrap styles={styles.toolbarTitle}>
          <h2 className="nav-title">WorshipTunes</h2>
        </Typography>
      </Link></Button>
      <div className="nav-right">
        <Button><Link className="nav-link" to="/home">
          {/* Show this link if they are logged in or not, but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
          {props.user.id ? 'Search' : 'Login / Register'}
        </Link></Button>
        {props.user.id && (<Button><Link className="nav-link" to="/request-song">
          Request Song
          </Link></Button>)}
        {props.user.id && props.user.is_admin && (
          <>
            <Button><Link className="nav-link" to="/song-requests">
              Song Requests
          </Link></Button>
            <Button><Link className="nav-link" to="/add-song">
              Add Song
          </Link></Button>
          <Button><Link className="nav-link" to="/manage-songs">
              Manage Songs
          </Link></Button>
          </>
        )}
        {props.user.id && (
          <>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
            <Button
              // This button shows up in multiple locations and is styled differently
              // because it's styled differently depending on where it is used, the className
              // is passed to it from it's parents through React props
              className={props.className}
              onClick={() => props.dispatch({ type: 'LOGOUT' })}
            >
              <Link className="nav-link" >
                <i class="material-icons">account_circle</i>
                <span> </span>
                {props.user.username}
                <span> </span>
                <i class="material-icons">expand_more</i>
              </Link>
            </Button>
          </>
        )}
        {/* <LogOut /> */}
      </div>
    </div>
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);