import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';

//Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }



  render() {
    return (
      <Container component="main" maxWidth="xs">
        {this.props.errors.loginMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.loginMessage}
          </h2>
        )}
        <form onSubmit={this.login} noValidate>
          <div>
            <h1>Login</h1>
          </div>
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

          <Button
            type="submit"
            fullWidth
            variant="outlined"
            // className={classes.root}                  
            value="Log In"
          >
            Sign In
          </Button>
        </form>
        <center>
          <Link
            component="button"
            variant="body2"
            // type="submit"
            fullWidth
            variant="outlined"
            className="link"
            onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
          >
            {"Don't have an account? Sign Up"}
          </Link>
        </center>
      </Container>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);
