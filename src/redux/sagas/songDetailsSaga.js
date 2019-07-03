import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

function* fetchSongDetails(action) {
    console.log('log action', action);
    console.log('log action.payload', action.payload);
    const songResponse = yield axios.get(`/client/song/${action.payload}/details`)
    yield put({type: 'SET_SONG_DETAILS', payload: songResponse.data});
    console.log('song response data', songResponse.data)
}

function* songDetailsSaga() {
    yield takeEvery('GET_SONG_DETAILS', fetchSongDetails)
}

export default songDetailsSaga;