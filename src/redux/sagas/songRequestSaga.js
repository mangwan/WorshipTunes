import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* postSongRequest(action) {
    try {
        console.log('in post song request saga')
        yield axios.post('/client/song-request', action.payload);
    } catch (error) {
        console.log('Error with post song request saga', error);
    }
}
function* songRequestSaga() {
    yield takeLatest('POST_SONG_REQUEST', postSongRequest);
}

export default songRequestSaga;