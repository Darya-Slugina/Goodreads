import {
  FETCH_USER_FAILED,
  FETCH_USER_REQUESTED,
  FETCH_USER_REGISTER,
  FETCH_USER_LOGGEDIN,
  ADD_TO_FAVOURITE_GENRES,
  REMOVE_FROM_FAVOURITE_GENRES,
  ADD_TO_FAVOURITE_USERS,
  REMOVE_FROM_FAVOURITE_USERS,
  ADD_TO_FRIENDS,
  ADD_TO_WANT_TO_READ,
  REMOVE_FROM_WANT_TO_READ,
  ADD_TO_READ,
  REMOVE_FROM_READ,
  ADD_TO_CURRENTLY_READING,
  REMOVE_FROM_CURRENTLY_READING,
} from "./User.actions";

const INITIAL_STATE = {
  user: {},
  error: {
    loginError: null,
    registerError: null
  },
  isLoading: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_USER_REGISTER:
      return {
        ...state,
        user: action.payload,
        error: null,
        isLoading: false,
      };

    case FETCH_USER_LOGGEDIN:
      return {
        ...state,
        user: action.payload,
        error: null,
        isLoading: false,
      };

    case FETCH_USER_FAILED:
      return {
        ...state,
        error: { ...state.error, [action.errorType]: action.payload },
        isLoading: false,
      };

    case ADD_TO_FAVOURITE_GENRES:
      return {
        ...state,
        user: { ...state.user, favouriteGenres: [...state.user.favouriteGenres, action.payload] },
      };

    case REMOVE_FROM_FAVOURITE_GENRES:
      return {
        ...state,
        user: { ...state.user, favouriteGenres: [...state.user.favouriteGenres].filter(el => el !== action.payload) },
      };

    case ADD_TO_WANT_TO_READ:
      return {
        ...state,
        user: { ...state.user, wantToRead: [...state.user.wantToRead, action.payload] },
      };

    case REMOVE_FROM_WANT_TO_READ:
      return {
        ...state,
        user: { ...state.user, wantToRead: [...state.user.wantToRead].filter(id => id !== action.payload) },
      };

    case ADD_TO_READ:
      return {
        ...state,
        user: { ...state.user, read: [...state.user.read, action.payload] },
      };

    case REMOVE_FROM_READ:
      return {
        ...state,
        user: { ...state.user, read: [...state.user.read].filter(id => id !== action.payload) },
      };

    case ADD_TO_CURRENTLY_READING:
      return {
        ...state,
        user: { ...state.user, currentlyReading: [...state.user.currentlyReading, action.payload] },
      };

    case REMOVE_FROM_CURRENTLY_READING:
      return {
        ...state,
        user: { ...state.user, currentlyReading: [...state.user.currentlyReading].filter(id => id !== action.payload) },
      };

    case ADD_TO_FAVOURITE_USERS:
      return {
        ...state,
        user: { ...state.user, favouritesUser: [...state.user.favouritesUser, action.payload] },
      };

    case REMOVE_FROM_FAVOURITE_USERS:
      return {
        ...state,
        user: { ...state.user, favouritesUser: [...state.user.favouritesUser].filter(id => id !== action.payload) },
      };

    case ADD_TO_FRIENDS:
      return {
        ...state,
        user: { ...state.user, favouritesUser: [...state.user.favouritesUser, action.payload] },
      };

    default:
      return state;
  }
};

export default userReducer;