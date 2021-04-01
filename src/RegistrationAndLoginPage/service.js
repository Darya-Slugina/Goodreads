import firebase from "../firebase";

export const registerWithCredentials = (email, password) =>
firebase.auth().createUserWithEmailAndPassword(email, password);

export const loginWithCredentials = (email, password) =>
firebase.auth().signInWithEmailAndPassword(email, password);

