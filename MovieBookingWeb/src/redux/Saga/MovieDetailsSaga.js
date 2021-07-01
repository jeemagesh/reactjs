import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
const apiUrl = `https://www.omdbapi.com/?&apikey=2a1adccc&s=terminator&type="movie"`;

function getApi() {
    return axios.get(apiUrl)
        .then(response => response.data.Search)
        .catch((error) => { throw error })

}

function* fetchMovieDetails(action) {
    try {
        const movies = yield call(getApi);
        yield put({ type: 'GET_MOVIES_SUCCESS', movies: movies });
    } catch (e) {
        yield put({ type: 'GET_MOVIES_FAILED', message: e.message });
    }
}


function* MovieDetailsSaga() {
    yield takeEvery('GET_MOVIES_REQUESTED', fetchMovieDetails);
}

export default MovieDetailsSaga;