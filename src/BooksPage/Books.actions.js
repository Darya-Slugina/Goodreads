import { getBooks } from "./service";

export const FETCH_BOOKS_FAILED = "FETCH_BOOKS_FAILED";
export const FETCH_BOOKS_REQUESTED = "FETCH_BOOKS_REQUESTED";
export const FETCH_BOOKS_SUCCEEDED = "FETCH_BOOKS_SUCCEEDED";

// Normal action
export const fetchBooksSucceded = (books) => ({
  type: FETCH_BOOKS_SUCCEEDED,
  payload: books,
});

export const fetchBooksFailed = (err) => ({
  type: FETCH_BOOKS_FAILED,
  payload: err,
});

export const fetchBooksRequested = () => ({
  type: FETCH_BOOKS_REQUESTED,
});

// Thunk actions
export const fetchBooks = () => {
  return function (dispatch, getState) {
    const books = getState().books.books;

    if (!books.length) {
      dispatch(fetchBooksRequested());
      getBooks
        .then((books) => {
          let dbBooks = [];

          books.forEach((book) => {
            dbBooks.push(book.data());
          });
          
          dispatch(fetchBooksSucceded(dbBooks));
        })
        .catch((err) => {
          dispatch(fetchBooksFailed(err));
        });
    }
  };
};
