const songsRequestsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_SONG_REQUESTS':
            return action.payload;
        default:
            return state;
    }
}

  // user will be on the redux state at:
  // state.user
  export default songsRequestsReducer;
  