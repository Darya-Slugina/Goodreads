import {
    FETCH_USER_FAILED,
    FETCH_USER_REQUESTED,
    FETCH_USER_REGISTER,
    FETCH_USER_LOGGEDIN,
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
  
    //   case "USER_ADDED":
    //     return {
    //       ...state,
    //       user: [...state.user, action.payload],
    //     };
      default:
        return state;
    }
  };
  
  export default userReducer;