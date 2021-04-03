import firebase, { database } from "../firebase"

export const getReviewsForCurrentBook = (id) => {
    return database.collection("reviewsList").where("forBookId", "==", id).get()
}

export const addInFavouriteGenres = (id, genre) => {
    return database.collection("users").doc(id).update({
        favouriteGenres: firebase.firestore.FieldValue.arrayUnion(genre),
    })
}

export const removeFromFavouriteGenres = (id, genre) => {
    return database.collection("users").doc(id).update({
        favouriteGenres: firebase.firestore.FieldValue.arrayRemove(genre),
    })
}