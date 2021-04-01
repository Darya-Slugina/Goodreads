import { database } from "../firebase";

// Requests

export const getUser = (id) => {
    return database.collection("users").where("id", "==", id).get();
}

export const setUser = (id, fname, email) => {
    database
        .collection("users")
        .doc(id)
        .set({
            id: id,
            fname: fname,
            email: email,
            userImg: "https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/default-profile-big.png?alt=media&token=e1cc93c3-ccd2-4269-8fd3-156fb157dd5a",
            lname: "",
            gender: "",
            city: "",
            country: "",
            interests: "",
            favouriteBooks: "",
            read: [],
            wantToRead: [],
            currentlyReading: [],
            favouritesUser: [],
            favouriteGenres: [],
        })
}

