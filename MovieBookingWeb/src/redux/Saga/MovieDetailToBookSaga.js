import { call, put, select, takeEvery } from 'redux-saga/effects'
import axios from 'axios';


function getApi(title) {
    const apiUrl = `http://www.omdbapi.com/?&apikey=2a1adccc&t=` + title;
    console.log("saga apiurl for movie detail " , apiUrl)
    return axios.get(apiUrl)
        .then(response => response.data.Search)
        .catch((error) => { throw error })

}

function* fetchMovieDetailsToBook(action) {
    try {
        console.log("Inside movide detail booksaga")
        
        const title = yield select(state=>state)
        console.log("Inside movide detail booksaga state => ", title)
        const movies = yield call(getApi(),title);
        yield put({ type: 'GET_MOVIEDETAILS_SUCCESS', movies: movies });
    } catch (e) {
        yield put({ type: 'GET_MOVIEDETAILS_FAILED', message: e.message });
    }
}


function* MovieDetailsToBookSaga() {
    yield takeEvery('GET_MOVIEDETAILS_REQUESTED', fetchMovieDetailsToBook);
}

export default MovieDetailsToBookSaga;