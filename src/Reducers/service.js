import firebase, { database } from "../firebase";


// Requests
export const getBooks = database.collection("books").get()
export const getGenres = database.collection("genresList").get()

