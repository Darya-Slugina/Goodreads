import {
    FETCH_BOOKS_FAILED,
    FETCH_BOOKS_REQUESTED,
    FETCH_BOOKS_SUCCEEDED,
  } from "./Books.actions";
  
  const INITIAL_STATE = {
    books: [],
    error: null,
    isLoading: false,
  };
  
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_BOOKS_REQUESTED:
        return {
          ...state,
          isLoading: true,
        };
  
      case FETCH_BOOKS_SUCCEEDED:
        return {
          ...state,
          books: action.payload,
          isLoading: false,
          error: null,
        };
  
      case FETCH_BOOKS_FAILED:
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