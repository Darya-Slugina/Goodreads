import { getUser, setUser } from "./User.service";
import { loginWithCredentials } from './service';
import { registerWithCredentials } from './service';

export const FETCH_USER_FAILED = "FETCH_USER_FAILED";
export const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
export const FETCH_USER_REGISTER = "FETCH_USER_REGISTER";
export const FETCH_USER_LOGGEDIN = "FETCH_USER_LOGGEDIN";


// Normal action
export const fetchUserRegister = (user) => ({
  type: FETCH_USER_REGISTER,
  payload: user,
});

export const fetchUserLoggedIn = (user) => ({
  type: FETCH_USER_LOGGEDIN,
  payload: user,
});


export const fetchUserFailed = (err) => ({
  type: FETCH_USER_FAILED,
  payload: err,
});

export const fetchUserRequested = () => ({
  type: FETCH_USER_REQUESTED,
});

// Thunk actions
export const registerUser = (email, password, fname) => {
  return function (dispatch, getState) {
    const userTmp = getState().user.user;

    if (!userTmp.length) {
      dispatch(fetchUserRequested());
      registerWithCredentials(email, password)
        .then((userCredential) => {
          const user = userCredential.user.uid;
          dispatch(createUser(user, fname, email));
        })
        .catch((error) => {
          console.log("Error: ", error);
          dispatch(fetchUserFailed());
        });
    }
  }
}

export const authenticateUser = (email, password) => {
  return function (dispatch, getState) {
    const user = getState().user.user;

    if (!user) {
      dispatch(fetchUserRequested());
      loginWithCredentials(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(fetchUser(user.uid));
        })
        .catch((error) => {
          console.log("Error: ", error);
          dispatch(fetchUserFailed());
        });
    }
  }
}

export const createUser = (id, fname, email) => {
  return function (dispatch, getState) {
    dispatch(fetchUserRequested());
    setUser(id, fname, email);
    getUser(id)
      .then((user) => {
        user.forEach((el) => {
          dispatch(fetchUserRegister(el.data()));
        });
      })
      .catch((err) => {
        dispatch(fetchUserFailed(err));
      });
  };
};


export const fetchUser = (id) => {
  return function (dispatch, getState) {
    const user = getState().user.user;

    if (!user.length) {
      dispatch(fetchUserRequested());
      getUser(id)
        .then((user) => {
          user.forEach((el) => {
            dispatch(fetchUserLoggedIn(el.data()));
          });
        })
        .catch((err) => {
          dispatch(fetchUserFailed(err));
        });
    }
  };
};