import firebase from "firebase";

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

  const database = firebase.firestore();
  const storage = firebase.storage();
  
  export default firebase;
  
  export { database, storage };