import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import './RegisterPage';

const styles = {
  title: {
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '150px',
    color: '#FFF',
  },
  button: {
    marginTop: '5px',
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
              style={styles.TextField}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.5)"
                  }}
                  InputProps={{
                    style: {
                      color: "black"
                    }
                  }
                  }
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Last Name"
              name="lastname"
              autoComplete="lastname"
              autoFocus
              value={this.state.last_name}
              onChange={this.handleInputChangeFor('last_name')}
              style={styles.TextField}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.6)"
                  }}
                  InputProps={{
                    style: {
                      color: "black"
                    }
                  }
                  }
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
              style={styles.TextField}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.6)"
                  }}
                  InputProps={{
                    style: {
                      color: "black"
                    }
                  }
                  }
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
              style={styles.TextField}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.6)"
                  }}
                  InputProps={{
                    style: {
                      color: "black"
                    }
                  }
                  }
            />
             <div style={styles.button}>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              style={styles.button}
              value="Sign In"
              color="primary"
            >
              Sign In
          </Button>
          </div>
          </form>
          <center style={styles.link}>
            <Link
              component="button"
              variant="body2"
              fullWidth
              variant="outlined" 
              style={styles.register}
              value="Sign In"
              onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}                >
              {"Back to Login"}
            </Link>
          </center>
        </div>
      </Container>
      </ThemeProvider>
      </div>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

