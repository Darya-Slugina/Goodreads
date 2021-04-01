import {
    FETCH_USER_FAILED,
    FETCH_USER_REQUESTED,
    FETCH_USER_REGISTER,
    FETCH_USER_LOGGEDIN,
    ADD_TO_FAVOURITE_GENRES,
    ADD_TO_FAVOURITE_USERS,
    REMOVE_FROM_FAVOURITE_USERS,
  } from "./User.actions";
  
  const INITIAL_STATE = {
    user: {},
    error: null,
  };
  
  const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case FETCH_USER_REQUESTED:
        return {
          ...state,
        };
  
      case FETCH_USER_REGISTER:
        return {
          ...state,
          user: action.payload,
          error: null,
        };

        case FETCH_USER_LOGGEDIN:
        return {
          ...state,
          user: action.payload,
          error: null,
        };
  
      case FETCH_USER_FAILED:
        return {
          ...state,
          error: action.payload,
        };

        // case ADD_TO_FAVOURITE_GENRES:
        // return {
        //   ...state,
        //   user: action.payload,
        // };

        case ADD_TO_FAVOURITE_USERS:
        return {
          ...state,
          user: {...state.user, favouritesUser: [...state.user.favouritesUser, action.payload]},
        };

        case REMOVE_FROM_FAVOURITE_USERS:
          return {
            ...state,
          user: {...state.user, favouritesUser: [...state.user.favouritesUser].filter(id => id !== action.payload)},
          };
  
      default:
        return state;
    }
  };
  
  export default userReducer;