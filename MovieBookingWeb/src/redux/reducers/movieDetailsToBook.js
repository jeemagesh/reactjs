import * as type from '../types';

const initialState = {
    movieDetailsToBook: [],
    loading: false,
    error: null,
}

export default function movies(state = initialState, action) {

    switch (action.type) {
        case type.GET_MOVIEDETAILS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case type.GET_MOVIEDETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                movieDetailsToBook: action.movieDetailsToBook
            }
        case type.GET_MOVIEDETAILS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.message,
            }
        default:

            return state
    }
}