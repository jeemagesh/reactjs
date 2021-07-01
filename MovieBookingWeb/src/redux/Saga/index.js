import { all } from 'redux-saga/effects'
import Events from './EventsSaga';
import MovieDetailsSaga from './MovieDetailsSaga'
import MovieDetailsToBookSaga from './MovieDetailToBookSaga';
import UpcomingMoviesSaga from './UpcomingMoviesSaga';


export default function* rootSaga() {
    //Struggled a lot. 
    // () is important in below line after saga name to get that saga middle ware called

    yield all([
        MovieDetailsSaga(),UpcomingMoviesSaga(),Events(),MovieDetailsToBookSaga(),
    ])
}