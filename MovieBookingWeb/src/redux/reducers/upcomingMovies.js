import * as type from '../types';

const initialState = {
  upcomingMovies: [],
  loading: false,
  error: null,
}

export default function upcomingMovies(state = initialState, action) {
  
  
  switch (action.type) {
    case type.GET_UPCOMINGMOVIES_REQUESTED:
      return {
        ...state,
        loading: true,
      }
    case type.GET_UPCOMINGMOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        upcomingMovies: action.upcomingMovies
      }
    case type.GET_UPCOMINGMOVIES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      }
    default:
      return state
  }
}