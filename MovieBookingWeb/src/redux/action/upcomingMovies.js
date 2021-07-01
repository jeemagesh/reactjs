import * as type from '../types';

export default function getUpcomingMovies() {
  console.log("getMovieDetails action")
    return {
      type: type.GET_UPCOMINGMOVIES_REQUESTED,
    }
  }