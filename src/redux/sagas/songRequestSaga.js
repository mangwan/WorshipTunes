import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* postSongRequest(action) {
    try {
        console.log('in post song request saga', action)
        yield axios.post('/client/song-request', action.payload);
        yield  put({type: 'SET_SONG_REQUESTS', payload: action.payload});
    } catch (error) {
        console.log('Error with post song request saga', error);
    }
}

function* fetchSongRequests() {
    try {
        const songRequests = yield axios.get('/admin/song-request');
        yield put({type: 'SET_SONG_REQUESTS', payload: songRequests.data})
    } catch (error) {
        console.log('Error with post song request saga', error);
    }
}


function* songRequestSaga() {
    yield takeLatest('POST_SONG_REQUEST', postSongRequest);
    yield takeEvery('FETCH_SONG_REQUESTS', fetchSongRequests);
}

export default songRequestSaga;