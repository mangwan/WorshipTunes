const songsDetailsReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_SONG_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

  // user will be on the redux state at:
  // state.user
  export default songsDetailsReducer;
  