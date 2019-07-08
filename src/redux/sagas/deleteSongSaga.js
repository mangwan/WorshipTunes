// import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

function* fetchDeleteSong(action) {
    console.log('in delete saga. action', action)
    // const songResponse = yield axios.get(`/client/song/${action.payload}/details`)
    // yield put({type: 'SET_SONG_DETAILS', payload: songResponse.data});
    // console.log('song response data', songResponse.data)
}

function* songDetailsSaga() {
    yield takeEvery('DELETE_SONG', fetchDeleteSong)
}

export default songDetailsSaga;

