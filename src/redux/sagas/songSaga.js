import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

function* fetchSongs() {
    const songResponse = yield axios.get('/client/song');
    yield put({type: 'SET_SONGS', payload: songResponse.data})
}

// function* addSong(action) {
//     try {
//         yield axios.post('/client/song', action.payload);
//       } catch (error) {
//           console.log('Error with add song POST route:', error);
//       }
//     }


function* songSaga() {
    yield takeEvery('GET_SONGS', fetchSongs)
    // yield takeEvery('ADD_SONG', addSong)
}

export default songSaga;