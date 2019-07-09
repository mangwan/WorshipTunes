import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';

//Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles(theme => ({
  // '@global': {
  //   body: {
  //     backgroundColor: theme.palette.common.white,
  //   },
  // },
  button: {
    alignContent: 'center',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  // form: {
  //   width: '100%',
  //   marginTop: theme.spacing(1),
  // },
  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  // },
}));


class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  } // end login

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }



  render() {
    return (
      <Container component="main" maxWidth="xs">
        <div>
          {this.props.errors.loginMessage && (
            <h2
              className="alert"
              role="alert"
            >
              {this.props.errors.loginMessage}
            </h2>
          )}
          <form onSubmit={this.login} styles={styles.form} noValidate>
            <h1>Login</h1>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />

            {/* <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div> */}

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              autoFocus
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />

            {/* <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div> */}
            <Grid container>
              <Grid item>
                <Button
                  type="submit"
                  styles={styles.button}
                  fullWidth
                  variant="outlined"
                  styles={styles.submit}
                  value="Log In"
                >
                  Sign In
          </Button>
              </Grid>
              <Grid item styles={styles.button}>
                {/* <div>
            <input
              className="log-in"
              type="submit"
              name="submit"
              value="Log In"
            />
          </div> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  className="link-button"
                  onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
                >
                  Register
          </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
