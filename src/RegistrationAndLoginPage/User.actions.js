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

export const registerUser = (email, password, fname) => {
  return function (dispatch, getState) {
    dispatch(fetchUserRequested());
    registerWithCredentials(email, password)
      .then((userCredential) => {
        const user = userCredential.user.uid;
        setUser(user, fname, email);
        dispatch(createUser(user));
      })
      .catch((error) => {
        console.log("Error: ", error);
        dispatch(fetchUserFailed());
      });

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

export const createUser = (id) => {
  return function (dispatch, getState) {
    dispatch(fetchUserRequested());
    getUser(id)
      .then((user) => {
        console.log("user1", user)
        user.forEach((el) => {
          dispatch(fetchUserLoggedIn(el.data()));
        });
      })
      .catch((err) => {
        dispatch(fetchUserFailed(err));
      });
  };
};

// Thunk actions
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