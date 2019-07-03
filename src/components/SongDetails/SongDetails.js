import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

class SongDetails extends Component {
  componentDidMount = () => {
    this.props.dispatch({
      type: 'GET_SONG_DETAILS',
      payload: this.props.match.params.id,
    });
    console.log('this props', this.props)
  }


  state = {
    artist: '',
    title: '',
    original_key: this.props.songDetails.original_key,
    lyrics: this.props.songDetails.lyrics,
  }

  handleChange = (event) => {
    console.log('this.state', this.state)
    console.log('in select handlechage', event.target.value)
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

    // let new_lyrics = this.state.lyrics
    let new_lyrics = this.props.songDetails.lyrics
    Object.entries(key_dictionary).map((entry) => {
      const chord = entry[0]
      const number = entry[1]
      let regex = new RegExp(`(?![A-Z])${chord} `, 'g');
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
      let regex = new RegExp(`(?![A-Z])${number} `, 'g')
      new_lyrics = new_lyrics.replace(regex, `${new_chord} `)
      regex = new RegExp(` ${number}(?!:)`, 'g')
      new_lyrics = new_lyrics.replace(regex, ` ${new_chord}`)
    })
    this.setState({
      artist: this.state.artist,
      title: this.state.title,
      original_key: new_key,
      lyrics: new_lyrics
    })
    console.log('new state', this.state)
  }
  render() {
    //calling in the song details reducer
    const songDetails = this.props.songDetails;
    console.log('songDetails', songDetails)
    return (
      <div>
        <button onClick={() => this.props.history.push('/')}>Return to Search</button>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <h2>Chords</h2>
            <p>Artist: {songDetails.artist}</p>
            <p>Title: {songDetails.title}</p>
            <p>Key: {this.state.original_key}</p>
            <select value={this.state.original_key} onChange={this.handleChange}>
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
            <pre>Lyrics: {this.state.lyrics}</pre>
          </Grid>
          <Grid item xs={6}>
            <h2>Song Details</h2>
            <p>Tempo: {songDetails.tempo}</p>
            <p>BPM: {songDetails.BPM}</p>
            <p>Original Key: {songDetails.original_key}</p>
            <p>CCLI#: {songDetails.CCLI}</p>
          </Grid>
        </Grid>

      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(withRouter(SongDetails));
