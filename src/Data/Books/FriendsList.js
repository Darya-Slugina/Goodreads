const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDTjLCxR3pIvJ7DT_pU_H_ofSUzjnqAjbs",
  authDomain: "goodreads-9c368.firebaseapp.com",
  databaseURL: "https://goodreads-9c368-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "goodreads-9c368",
  storageBucket: "goodreads-9c368.appspot.com",
  messagingSenderId: "427942194216",
  appId: "1:427942194216:web:86bdc3fb72e303ef90991d",
  measurementId: "G-38S3RLP5ZK"
};

firebase.initializeApp(firebaseConfig);

const friendrequests = [
  {
    requestFrom: "",
    requestTo: "", 
  },

]

var db = firebase.firestore();

friendrequests.forEach(obj => {
  db.collection("friendsRequests").add({
    requestFrom: obj.requestFrom,
    requestTo: obj.requestTo,
  })
});

// node src/Data/Books/FriendsList.js