import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';

function* fetchSongs() {
    const songResponse = yield axios.get('/client/song');
    yield put({type: 'SET_SONGS', payload: songResponse.data})
}


function* addNewSong(action) {
    try {
        console.log('in add new song saga', action)
        yield axios.post('/admin/add-song', action.payload);
        yield put({type: 'GET_SONGS'});
    } catch (error) {
        console.log('Error with post new song saga', error);
    }
}

function* songSaga() {
    yield takeEvery('GET_SONGS', fetchSongs)
    yield takeEvery('ADD_NEW_SONG', addNewSong)
}

export default songSaga;