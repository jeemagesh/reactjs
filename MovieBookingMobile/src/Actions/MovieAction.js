export const FETCH_MOVIES_BEGIN = 'FETCH_MOVIES_BEGIN' ;
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS' ;
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE' ;

import axios from "axios";

export const fetchMoviesBegin = ()=> ({
    type: FETCH_MOVIES_BEGIN
});

export const fetchMoviesSuccess = movies => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: movies
});

export const fetchMoviesFailure = error => ({
    type: FETCH_MOVIES_FAILURE,
    payload: {error}
});

// Thunk Method
export function fetchMovies(){
    return dispatch => {
        dispatch(fetchMoviesBegin());
        //Make and API Call
        return axios.get('https://www.omdbapi.com/?&apikey=2a1adccc&s=terminator&type="movie"')
        .then (resp => {
            const movies = resp.data.Search;
            dispatch(fetchMoviesSuccess(movies))
        })
       /*  .error(error=>{
            dispatch(fetchFoodsFailure(error.message))
        }) */
    }
}