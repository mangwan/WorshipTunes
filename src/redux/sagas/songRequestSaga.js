import { put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* postSongRequest(action) {
    try {
        console.log('in post song request saga', action)
        yield axios.post('/client/song-request', action.payload);
        yield put({type: 'FETCH_SONG_REQUESTS'});
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

function* deleteSongRequest(action) {
    console.log('in delete song reqeust saga', action)
    yield axios.delete(`/admin/delete/song-requests/${action.payload}`)
    yield put({type: 'FETCH_SONG_REQUESTS'});
}

function* songRequestSaga() {
    yield takeLatest('POST_SONG_REQUEST', postSongRequest);
    yield takeEvery('FETCH_SONG_REQUESTS', fetchSongRequests);
    yield takeEvery('DELETE_SONG_REQUEST', deleteSongRequest)
}

export default songRequestSaga;