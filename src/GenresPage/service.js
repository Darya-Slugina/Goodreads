import { database } from "../firebase"

export const getGenres = database.collection("genresList").get()

export const getReviewsForCurrentBook = (id) => {
    return database.collection("reviewsList").where("forBookId", "==", id).get()
}
