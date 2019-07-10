import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const styles = {
  title: {
    textAlign: 'center',
    color: '#F7882F',
    fontSize: '22px',
    marginTop: '80px',
  },
}

class RegisterPage extends Component {
  state = {
    first_name: '',
    last_name: '',
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.first_name && this.state.last_name && this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <Container component="main" maxWidth="xs" style={styles.main}>
        <div>
          {this.props.errors.registrationMessage && (
            <h2
              className="alert"
              role="alert"
            >
              {this.props.errors.registrationMessage}
            </h2>
          )}
          <form onSubmit={this.registerUser} noValidate>
            <div style={styles.title}>
              <h1>Register</h1>
            </div>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="First Name"
              name="firstname"
              autoComplete="firstname"
              autoFocus
              value={this.state.first_name}
              onChange={this.handleInputChangeFor('first_name')}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="lastname"
              name="lastname"
              autoComplete="lastname"
              autoFocus
              value={this.state.last_name}
              onChange={this.handleInputChangeFor('last_name')}
            />
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
              type="password"
              fullWidth
              id="password"
              label="password"
              name="password"
              autoComplete="password"
              autoFocus
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
             <div style={styles.button}>>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              style={styles.button}
              value="Sign In"
            >
              Sign In
          </Button>
          </div>
          </form>
          <center>
            <Link
              component="button"
              variant="body2"
              fullWidth
              variant="outlined"
              className="link"
              style={styles.register}
              value="Sign In"
              onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}                >
              {"Back to Login"}
            </Link>
          </center>
        </div>
      </Container>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

