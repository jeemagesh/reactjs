import * as type from '../types';

export default function getMovieDetails() {
  console.log("getMovieDetails action")
    
  return {
      type: type.GET_MOVIES_REQUESTED,
    }
  }