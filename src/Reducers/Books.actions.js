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

// export const postAdded = (post) => ({
//   type: "POST_ADDED",
//   payload: post,
// });

// // Thunk actions
// export const subscribeToRealTimePosts = () => {
//   return function (dispatch, getState) {
//     database.collection("posts").onSnapshot((snapshot) => {
//       // code....
//       // if new post was added:
//       dispatch(postAdded({name: 'haha'}));

//     });

//     //   if (!posts.length) {
//     //     dispatch(fetchPostsRequested());
//     //     getPosts
//     //       .then((users) => {
//     //         let dbPosts = [];

//     //         users.forEach((doc) => {
//     //           console.log(doc.data());
//     //           dbPosts.push(doc.data());
//     //         });

//     //         dispatch(fetchPostsSucceded(dbPosts));
//     //       })
//     //       .catch((err) => {
//     //         dispatch(fetchPostsFailed(err));
//     //       });
//     //   }
//   };
// };
  