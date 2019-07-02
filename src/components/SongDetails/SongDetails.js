import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongDetails extends Component {
  state = {
    key: "A",
    artist: "Hillsong United",
    title: "Relentless",
    lyrics: `INST:
    A  D  F#m  D
    
    VERSE 1:
    A                      D     F#m     D
       Salvation sounds a new beginning
    A                       D     F#m     D
       As distant hearts begin believing
    A                      D    F#m
       Redemption’s bid is unrelenting
          D        A
    Your love goes on
          D        F#m
    Your love goes on
    
    PRE-CHORUS:
         D              F#m
    You carry us, carry us
              A           E
    When the world gives way
         D              F#m
    You cover us, cover us
               A        E
    With Your endless grace
    
    CHORUS:
    A                   D
        Your love is relentless
    F#m                 D
        Your love is relentless
    A                   D
        Your love is relentless
    F#m                 D
        Your love is relentless
    
    VERSE 2:
    The time is up for chasing shadows
    You gave the world a light to follow
    A hope that shines beyond tomorrow
    Your love goes on
    Your love goes on
    
    INST 2:
    E   F#m   D   A
    
    BRIDGE:
    E                       F#m
       Tearing through the veil of darkness
    D                  A                 E
       Breaking every chain, You set us free
                      F#m
    Fighting for the furthest heart
         D             A            E
    You gave your life   for all to see`
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
    return (
      <div>
        <h1>Song Details</h1>
        <button onClick={() => this.props.history.push('/')}>Return to Search</button>
              <p>Artist: {this.state.artist}</p>
              <p>Title: {this.state.title}</p>
              <p>Key: {this.state.key}</p>
              <select value={this.state.key} onChange={this.handleChange}>
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
              <pre>Key: {this.state.lyrics}</pre>
      </div>
    );
  }
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(SongDetails);
