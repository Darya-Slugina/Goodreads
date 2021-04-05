import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Import all reducers
import booksReducer from "./BooksPage/Books.reducer";
import genresReducer from "./GenresPage/Genres.reducer"
import userReducer from "./RegistrationAndLoginPage/User.reducer";


const rootReducer = combineReducers({
    user: userReducer,
    books: booksReducer,
    genres: genresReducer,
});

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;