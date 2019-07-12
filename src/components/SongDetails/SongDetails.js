import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './SongDetails.css';

//material UI
import Grid from '@material-ui/core/Grid';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';


const styles = {
  Breadcrumb: {
    margin: '10px',
  },
};
class SongDetails extends Component {
  componentDidMount = () => {
    const song_id = this.props.match.params.id
    this.props.dispatch({
      type: 'GET_SONG_DETAILS',
      payload: song_id,
    });
  }

  handleChange = (event) => {
    const key_dictionary = {
      C: 0,
      Db: 1,
      D: 2,
      Eb: 3,
      E: 4,
      'F#': 6,
      F: 5,
      G: 7,
      Ab: 8,
      A: 9,
      Bb: 10,
      B: 11,
    }

    const number_to_chord_dictionary = {
      11: 'B',
      10: 'Bb',
      0: 'C',
      1: 'Db',
      2: 'D',
      3: 'Eb',
      4: 'E',
      5: 'F',
      6: 'F#',
      7: 'G',
      8: 'Ab',
      9: 'A',
    }

    const original_key = this.props.songDetails.original_key
    const original_key_value = key_dictionary[original_key]
    console.log("original_key: ", original_key, " value: ", original_key_value)

    const new_key = event.target.value
    const new_key_value = key_dictionary[new_key]
    console.log("new_key: ", new_key, " value: ", new_key_value)

    const value_difference = new_key_value - original_key_value
    console.log("value_difference: ", value_difference)

    let new_lyrics = this.props.songDetails.lyrics
    Object.entries(key_dictionary).map((entry) => {
      const chord = entry[0]
      const number = entry[1]
      let regex = new RegExp(`(?<![A-Z])${chord} `, 'g');
      new_lyrics = new_lyrics.replace(regex, `${number} `);
      regex = new RegExp(` ${chord}(?![:A-z])`, 'g')
      new_lyrics = new_lyrics.replace(regex, ` ${number}`)
    })

    const order_array = [11, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    order_array.map((number) => {
      console.log(number)
      let new_chord_value = number + value_difference
      if (new_chord_value < 0) {
        new_chord_value += 12
      } else if (new_chord_value > 11) {
        new_chord_value -= 12
      }
      const new_chord = number_to_chord_dictionary[new_chord_value]
      let regex = new RegExp(`(?<![A-Z])${number} `, 'g')
      new_lyrics = new_lyrics.replace(regex, `${new_chord} `)
      regex = new RegExp(` ${number}(?!:A-z)`, 'g')
      new_lyrics = new_lyrics.replace(regex, ` ${new_chord}`)
    })

    this.props.dispatch({ type: 'SET_LYRICS', payload: new_lyrics })
    console.log('new state', this.state)
  }
  render() {
    return (
      <div>

        <Grid item xs={12} sm={2}>
        </Grid>
        <div style={styles.Breadcrumb}>
          <Breadcrumbs
            separator="›"
            aria-label="Breadcrumb">
            <Link
              color="inherit"
              onClick={() => this.props.history.push('/')}>
              Search
          </Link>
            <Typography
              color="textPrimary">
              Song Details
          </Typography>
          </Breadcrumbs>
        </div>
        <Container component="main" maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h2>Chords</h2>
              <h4>{this.props.songDetails.title}</h4>
              <h4>{this.props.songDetails.artist}</h4>
              <div class="custom-select">
              Key: <select
                value={this.props.songDetails.current_key} onChange={this.handleChange}>
                <option>Ab</option>
                <option>A</option>
                <option>Bb</option>
                <option>B</option>
                <option>C</option>
                <option>Db</option>
                <option>D</option>
                <option>Eb</option>
                <option>E</option>
                <option>F</option>
                <option>F#</option>
                <option>G</option>
              </select>
              </div>
              <br/>
              <pre className="pre">
              {this.props.currentLyrics}
              </pre>
            </Grid>
            <Grid item xs={6}>
              <Grid>
                <h2>Song Details</h2>
              </Grid>
              <Grid container spacing={4}>
                <Grid item xs={5}>
                  Tempo:
                </Grid>
                <Grid item xs={7}>
                  {this.props.songDetails.tempo}
                </Grid>
                <Grid xs={10}>
                <Divider></Divider>
                  </Grid>
                <Grid item xs={5}>
                  BPM
                </Grid>
                <Grid item xs={7}>
                  {this.props.songDetails.BPM}
                </Grid>
                <Grid xs={10}>
                <Divider></Divider>
                  </Grid>
                <Grid item xs={5}>
                  Original Key
                </Grid>
                <Grid item xs={7}>
                  {this.props.songDetails.original_key}
                </Grid>
                <Grid xs={10}>
                <Divider></Divider>
                  </Grid>
                <Grid item xs={5}>
                  CCLI#:
                </Grid>
                <Grid item xs={7}>
                  {this.props.songDetails.CCLI}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(withRouter(SongDetails));
