import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

function* fetchDeleteSong(action) {
    console.log('in delete saga. action', action)
    yield axios.delete(`/admin/delete/${action.payload}`)
    yield put({type: 'GET_SONGS'});
}

function* songDetailsSaga() {
    yield takeEvery('DELETE_SONG', fetchDeleteSong)
}

export default songDetailsSaga;

