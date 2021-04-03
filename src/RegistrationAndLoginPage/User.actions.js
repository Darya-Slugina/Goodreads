import { getUser, setUser } from "./User.service";
import { loginWithCredentials } from './service';
import { registerWithCredentials } from './service';
import firebase, { database } from "../firebase";



export const FETCH_USER_FAILED = "FETCH_USER_FAILED";
export const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
export const FETCH_USER_REGISTER = "FETCH_USER_REGISTER";
export const FETCH_USER_LOGGEDIN = "FETCH_USER_LOGGEDIN";
export const ADD_TO_FAVOURITE_GENRES = "ADD_TO_FAVOURITE_GENRES";
export const ADD_TO_FAVOURITE_USERS = "ADD_TO_FAVOURITE_USERS";
export const REMOVE_FROM_FAVOURITE_USERS = "REMOVE_FROM_FAVOURITE_USERS";
export const ADD_TO_FRIENDS = "ADD_TO_FRIENDS";

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

export const addToFavouriteUsers = (userId) => ({
  type: ADD_TO_FAVOURITE_USERS,
  payload: userId,
});

export const removeFromFavouriteUsers = (userId) => ({
  type: REMOVE_FROM_FAVOURITE_USERS,
  payload: userId,
});

export const addToFriends = (userId) => ({
  type: ADD_TO_FRIENDS,
  payload: userId,
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
  console.log(email)
  return function (dispatch, getState) {
    dispatch(fetchUserRequested());
    loginWithCredentials(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      console.log(user);
        dispatch(fetchUser(user.uid));
      })
      .catch((error) => {
        console.log("Error: ", error);
        dispatch(fetchUserFailed());
      });
    // }
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
    console.log(user);

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

export const addToFavourite = (userId, loggedUserId) => {
  return function (dispatch, getState) {
    const favUser = getState().user.user.favouritesUser;
    console.log("favUser");

    if (!favUser.includes(userId)) {
      database.collection("users").doc(loggedUserId).update({
        favouritesUser: firebase.firestore.FieldValue.arrayUnion(userId),
      })
        .then(() => {
          console.log("Document successfully written!");
          dispatch(addToFavouriteUsers(userId));
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  }
}

export const removeFromFavourite = (userId, loggedUserId) => {
  return function (dispatch, getState) {
    const favUser = getState().user.user.favouritesUser;

    if (favUser.length > 0 && favUser.includes(userId)) {
      database.collection("users").doc(loggedUserId).update({
        favouritesUser: firebase.firestore.FieldValue.arrayRemove(userId),
      })
        .then(() => {
          console.log("Document successfully written!");
          dispatch(removeFromFavouriteUsers(userId));
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  }
}

export const addToFriendsList = (userId, loggedUserId) => {
  return function (dispatch, getState) {
    const myFriends = getState().user.user.myFriends;
    console.log("favUser");

    if (!myFriends.includes(userId)) {
      database.collection("users").doc(loggedUserId).update({
        myFriends: firebase.firestore.FieldValue.arrayUnion(userId),
      })
        .then(() => {
          console.log("Document successfully written!");
          dispatch(addToFriends(userId));
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    }
  }
}