import { combineReducers } from 'redux';
import movies from './movies'
import upcomingMovies from './upcomingMovies';
import events from './events';

const rootReducer = combineReducers({
   // movies: movies,
    //upcomingMovies: upcomingMovies,
    movies,upcomingMovies,events
});

export default rootReducer;