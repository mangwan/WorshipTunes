import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

function* fetchSongDetails(action) {
    const songResponse = yield axios.get(`/client/song/deatils/${action.payload.songId}`);
    yield put({type: 'GET_SONG_DETAILS', payload: songResponse.data})
}

// function* addSong(action) {
//     try {
//         yield axios.post('/client/song', action.payload);
//       } catch (error) {
//           console.log('Error with add song POST route:', error);
//       }
//     }


function* songDetailsSaga() {
    yield takeEvery('GET_SONG_DETAILS', fetchSongDetails)
    // yield takeEvery('ADD_SONG', addSong)
}

export default songDetailsSaga;