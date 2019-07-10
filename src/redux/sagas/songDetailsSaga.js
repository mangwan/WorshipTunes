import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

function* fetchSongDetails(action) {
    const songResponse = yield axios.get(`/client/song/${action.payload}/details`)
    yield put({type: 'SET_SONG_DETAILS', payload: songResponse.data});
    yield put({ type: 'SET_LYRICS', payload: songResponse.data.lyrics })
    console.log('song response data', songResponse.data)
}

function* editSongDetails(action) {
    console.log('in edit song details saga', action)
    const updateSong = yield axios.put(`/admin/edit-song/${action.id}`, action.payload)
    yield put({type: 'SET_SONG_DETAILS', payload: updateSong.data});
    // yield put({ type: 'SET_LYRICS', payload: songResponse.data.lyrics })
    // console.log('song response data', songResponse.data)
}

function* songDetailsSaga() {
    yield takeEvery('GET_SONG_DETAILS', fetchSongDetails)
    yield takeEvery('EDIT_SONG_DETAILS', editSongDetails)

}

export default songDetailsSaga;

