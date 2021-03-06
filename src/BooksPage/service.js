import {database} from "../firebase"

export const getBooks = database.collection("booksList").get()

export const setNewReview = (text, bookId, rating, id, userImg, userName) => {
    return  database.collection("reviewsList").doc().set({
        review: text,
        date: Date.now(),
        forBookId: bookId,
        likes: [],
        rate: rating,
        userId: id,
        userImg: userImg,
        userName: userName,
    })
}

export const getReviewsForCurrentBook = (bookId) => {
   return database.collection("reviewsList").where("forBookId", "==", bookId).get()
}


export const getReviewForCurrentBookAndUser = (bookId, userId) => {
    return  database.collection("reviewsList").where("forBookId", "==", bookId).where("userId", "==", userId).get()
}