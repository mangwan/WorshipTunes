import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import SongDetails from '../SongDetails/SongDetails';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

// import AboutPage from '../AboutPage/AboutPage';
import ClientSearchPage from '../ClientSearchPage/ClientSearchPage';
import RequestSongPage from '../RequestSongPage/RequestSongPage';
import ManageSongs from '../ManageSongs/ManageSongs';
import SongRequests from '../SongRequests/SongRequests';
import AddSong from '../AddSong/AddSong';
import EditSong from '../EditSong/EditSong';



import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            {/* <Route
              exact
              path="/about"
              component={AboutPage}
            /> */}
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={ClientSearchPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/request-song"
              component={RequestSongPage}
            />
            <ProtectedRoute
              exact
              path="/song-details/:id"
              component={SongDetails} />

              {/* MANG TO DO: Add an if statement to check if user is an admin */}
               {/* Routes for Admin*/}
               
              {this.props.user.is_admin && (
               <>
               <ProtectedRoute
                exact
                path="/manage-songs"
                component={ManageSongs} />
                <ProtectedRoute
                exact
                path="/song-requests"
                component={SongRequests} />
                <ProtectedRoute
                exact
                path="/add-song"
                component={AddSong} />
                <ProtectedRoute
                exact
                path="/edit-song/:id"
                component={EditSong} />
                </>
              )
              }
              
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(App);
