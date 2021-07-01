import * as type from '../types';

export default function getMovieDetailsToBook() {
  console.log("getMovieDetails action")
    
  return {
      type: type.GET_MOVIEDETAILS_REQUESTED,
      
    }
  }