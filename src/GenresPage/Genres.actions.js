import { getGenres } from "./service";

export const FETCH_GENRES_FAILED = "FETCH_GENRES_FAILED";
export const FETCH_GENRES_REQUESTED = "FETCH_GENRES_REQUESTED";
export const FETCH_GENRES_SUCCEEDED = "FETCH_GENRES_SUCCEEDED";

// Normal action
export const fetchGenresSucceded = (genres) => ({
  type: FETCH_GENRES_SUCCEEDED,
  payload: genres,
});

export const fetchGenresFailed = (err) => ({
  type: FETCH_GENRES_FAILED,
  payload: err,
});

export const fetchGenresRequested = () => ({
  type: FETCH_GENRES_REQUESTED,
});

// Thunk actions
export const fetchGenres = () => {
  return function (dispatch, getState) {
    const genres = getState().genres.genres;

    if (!genres.length) {
      dispatch(fetchGenresRequested());
      getGenres
        .then((books) => {
          let dbBooks = [];

          books.forEach((book) => {
            dbBooks.push(book.data());
          });

          dispatch(fetchGenresSucceded(dbBooks));
        })
        .catch((err) => {
          dispatch(fetchGenresFailed(err));
        });
    }
  };
};