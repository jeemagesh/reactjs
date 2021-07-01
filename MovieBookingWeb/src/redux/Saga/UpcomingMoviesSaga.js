import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';
const apiUrl = `https://www.omdbapi.com/?&apikey=2a1adccc&type="movie"&y=2021&s=love`;

function getApi() {
    return axios.get(apiUrl)
        .then(response => response.data.Search)
        .catch((error) => { throw error })

}

function* fetchUpcomingMovies(action) {
    try {
        const upcomingMovies = yield call(getApi);
        yield put({ type: 'GET_UPCOMINGMOVIES_SUCCESS', upcomingMovies: upcomingMovies });
    } catch (e) {
        yield put({ type: 'GET_UPCOMINGMOVIES_FAILED', message: e.message });
    }
}


function* UpcomingMoviesSaga() {
    yield takeEvery('GET_UPCOMINGMOVIES_REQUESTED', fetchUpcomingMovies);
}

export default UpcomingMoviesSaga;