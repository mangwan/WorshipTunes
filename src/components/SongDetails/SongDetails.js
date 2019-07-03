import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetails extends Component {

  state = {
    artist: '',
    title: '',
    original_key: '',
    lyric: '',
  }

  handleChange = (event) => {
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
    
    const original_key = this.state.key 
    const original_key_value = key_dictionary[original_key] 
    console.log("original_key: ", original_key, " value: ", original_key_value)

    const new_key = event.target.value
    const new_key_value = key_dictionary[new_key]
    console.log("new_key: ", new_key, " value: ", new_key_value)

    const value_difference = new_key_value - original_key_value
    console.log("value_difference: ", value_difference)

    let new_lyrics = this.state.lyrics
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
      key: event.target.value,
      lyrics: new_lyrics
    })
  }
  render() {
    //calling in the song details reducer
    const songDetails = this.props.songDetails;
    return (
      <div>
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
        <h1>Song Details</h1>
        <button onClick={() => this.props.history.push('/')}>Return to Search</button>
              <p>Artist: {songDetails.artist}</p>
              <p>Title: {songDetails.title}</p>
              <p>Key: {songDetails.original_key}</p>
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
              <pre>Lyric: {songDetails.lyric}</pre>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(SongDetails);
