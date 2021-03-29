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

// "Music", "Art","Biography", "Business", "Chick Lit", "Classics","Childrens", "Christian", "Classics","Comics","Contemporary","Cookbooks","Crime","Ebooks",
// "Fantasy", "Fiction","LGBT","Graphic Novels", "Historical Fiction", "History", "Horror", "Humor", "Memoir", "Mystery", "Nonfiction", "Philosophy", "Poetry",
// "Psychology", "Romance","Science","Science Fiction", "Self Help", "Sports", "Thriller", "Travel", "Young Adult",


const users = [
    {
        id: 1,
        fname: "Lex Kent",
        lname: null,
        gender: "female",
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/479984.jpg?alt=media&token=fe7dcab8-d308-4fe1-93fc-b2e6a89358b6",
        city: null,
        country: null,
        interests: "Reading (of course), health & nutrition, cooking, travel, wine, knitting, exercise/walking",
        favouriteBooks: "Literary fiction, historical fiction, biography, memoirs, psychological thrillers, mystery, police procedurals, non-fiction.....really just about anything if it's well-written.",
        favouriteGenres: ["Science Fiction", "Self Help", "Sports", "Thriller", "Travel"],
        favouriteUsers: [2,3,5,8,10,12],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 2,
        fname: "Alison",
        lname: null,
        gender: "female",
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/124482.jpg?alt=media&token=b0cae97f-948b-43a6-8ccb-7bbe2eddfc43",
        city: null,
        country: null,
        interests: "Reading, hiking, traveling, kayaking, scrapbooking",
        favouriteBooks: "Contemporary fiction, historical fiction, nonfiction (particularly history), biography",
        favouriteGenres: [ "Art","Biography", "Business", "Chick Lit", "Classics"],
        favouriteUsers: [11,6,8,15,1],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 3,
        fname: "Shira",
        lname: null,
        gender: "female",
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2634685.jpg?alt=media&token=b1f5c131-39bc-44fb-b585-3ef627ed0f6f",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: "U.S. history, biographies, superheroes, private eye or procedurals, true crime, rock music, movies & sports",
        favouriteGenres: ["Biography", "Business", "Chick Lit", "Classics","Historical Fiction"],
        favouriteUsers: [18,15,21,19,6,8],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 4,
        fname: "Amanda",
        lname: null,
        gender: "female",
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/4678252.jpg?alt=media&token=1a7afedb-e647-43d9-80c6-750a7923c832",
        city: null,
        country: null,
        interests: "Books, TV shows, movies and music",
        favouriteBooks: null,
        favouriteGenres: ["Humor", "Memoir", "Mystery", "Nonfiction", "Philosophy", "Poetry"],
        favouriteUsers: [19,17,15,2,6,7],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 5,
        fname: "Sarina",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/34502206.jpg?alt=media&token=84d58ddd-2c7c-4109-9737-a8c77af53e73",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 6,
        fname: "Nicole",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/40997852.jpg?alt=media&token=00a7f9e4-888c-450c-b244-bdd371334170",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 7,
        fname: "Sarah",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/18894476.jpg?alt=media&token=45612f4b-a7dc-4010-9e57-4232964cb79c",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 8,
        fname: "David Baldacci",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/25479304.jpg?alt=media&token=fa826fa8-73c3-4aae-975d-4b5f6a189a0f",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 9,
        fname: "Dem",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2752994.jpg?alt=media&token=78398b19-3ac3-439c-ac1b-59d36e38e18d",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 10,
        fname: "Carlene",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1068337.jpg?alt=media&token=33727a46-d81f-4fe8-adfe-f272f323777d",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 11,
        fname: "Bandit",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1916695.jpg?alt=media&token=68f1c983-51e6-44b3-9319-89e324855b2c",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 12,
        fname: "Dennis",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2764493.jpg?alt=media&token=8af7ac4d-6247-47d9-aa72-15e97a4afea6",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 13,
        fname: "Craig",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1613125.jpg?alt=media&token=b8dcf0f9-3498-4987-928a-e689a23df3f4",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 14,
        fname: "Erin",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/1668821.jpg?alt=media&token=afc73239-7638-441f-ae37-64c020d086d7",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 15,
        fname: "Nicole",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/40997852.jpg?alt=media&token=00a7f9e4-888c-450c-b244-bdd371334170",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 16,
        fname: "Kemper",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/405390.jpg?alt=media&token=943f6795-b5fb-4d4d-973e-1ae23000004d",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 17,
        fname: "Annalisa",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/542037.jpg?alt=media&token=b6fab23c-ef13-454c-a0b5-ad91609fce33",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 18,
        fname: "Destiny Henderson",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/64443319.jpg?alt=media&token=aab215e9-7c4d-4c04-9094-24fbfa51a59c",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 19,
        fname: "Ashley",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/5874251.jpg?alt=media&token=047c4d87-1425-4192-a5c2-772e46989355",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 20,
        fname: "Logan Hughes",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/15052079.jpg?alt=media&token=41fbc1fc-d3f1-47e1-aac1-c71f63aec037",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
    {
        id: 21,
        fname: "Blair",
        lname: null,
        gender: null,
        userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/2888524.jpg?alt=media&token=8267c36f-f487-4a46-ab7a-3719bf70e4f3",
        city: null,
        country: null,
        interests: null,
        favouriteBooks: null,
        favouriteGenres: [],
        favouriteUsers: [],
        read: [],
        wantToRead: [],
        currentlyReading: [],
        rated: [],
    },
]

var db = firebase.firestore();

users.forEach(obj => {
  db.collection("users").add({
    id: obj.id,
    fname: obj.fname,
    lname: obj.lname,
    gender: obj.gender,
    userImg: obj.userImg,
    city: obj.city,
    country: obj.country,
    interests: obj.interests,
    favouriteBooks: obj.favouriteBooks,
    favouriteGenres: obj.favouriteGenres,
    favouriteUsers: obj.favouriteUsers,
    read: obj.read,
    wantToRead: obj.wantToRead,
    currentlyReading: obj.currentlyReading,
    rated: obj.rated,
  })
    .then((obj) => {
      console.log("My users :" + obj.fname)
    })
    .catch((error) => {
      console.log("Error" + error)
    })
});

// node src/Data/Books/Users.js