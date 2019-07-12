import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

//Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const styles = {
  title: {
    textAlign: 'center',
    fontSize: '20px',
    marginTop: '150px',
    color: '#FFF',
  },
  button: {
    marginTop: '15px',
  },
  TextField: {
    borderColor: 'white',
  },
  link: {
    margin: '20px',
  }
};

const theme = createMuiTheme({
  palette: {
    primary: { main: '#FFF' },
  },
});

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
      <div className="background">
        <div class="overlay">
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <form onSubmit={this.login} noValidate>
                <div style={styles.title}>
                  <h1>Login</h1>
                </div>
                {this.props.errors.loginMessage && (
                  <h5
                    className="alert"
                    role="alert"
                  >
                    {this.props.errors.loginMessage}
                  </h5>
                )}
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
                  style={styles.TextField}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.6)"
                  }}
                  InputProps={{
                    style: {
                      color: "black"
                    }
                  }}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="password"
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="password"
                  autoFocus
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('password')}
                  color="primary"
                  style={styles.TextField}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.6)"
                  }}
                  InputProps={{
                    style: {
                      color: "black"
                    }
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  style={styles.button}
                  value="Log In"
                  color="primary"
                >
                  Sign In
          </Button>
              </form>
              <center style={styles.link}>
                <Link
                  component="button"
                  variant="body2"
                  fullWidth
                  variant="outlined"
                  onClick={() => { this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' }) }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </center>
            </Container>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(LoginPage);