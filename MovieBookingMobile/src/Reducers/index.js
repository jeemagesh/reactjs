import { combineReducers } from 'redux';
import movieReducer from './MovieDetails';


const rootReducer = combineReducers({
   // movies: movies,
    //upcomingMovies: upcomingMovies,
    movieReducer
});

export default rootReducer;