import {
    FETCH_GENRES_FAILED,
    FETCH_GENRES_REQUESTED,
    FETCH_GENRES_SUCCEEDED,
  } from "./Genres.actions";
  
  const INITIAL_STATE = {
    genres: [],
    error: null,
    isLoading: false,
  };
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_GENRES_REQUESTED:
        return {
          ...state,
          isLoading: true,
        };
  
      case FETCH_GENRES_SUCCEEDED:
        return {
          ...state,
          genres: action.payload,
          isLoading: false,
          error: null,
        };
  
      case FETCH_GENRES_FAILED:
        return {
          ...state,
          error: action.payload,
          isLoading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;