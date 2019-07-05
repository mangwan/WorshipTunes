import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const InfoPage = () => (
  <div>
    <header>
      <img img width="100%" src="images/mountain.jpg" alt="mountain"></img>
    </header>
    <div>
      <h2>
        Request a Song
    </h2>
      <label>Name</label>
      <br />
      <input type="text"></input>
      <br />
      <label>Email</label>
      <br />
      <input type="text"></input>
      <br />
      <label>Song Title</label>
      <br />
      <input type="text"></input>
      <br />
      <label>Artist Name</label>
      <br />
      <input type="text"></input>
      <br />
      <button>Submit</button>
    </div>
  </div>
);

export default InfoPage;
