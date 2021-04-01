import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import HomePageLoggedIn from "./HomePage/HomePageLoggedIn";
import Login from "./RegistrationAndLoginPage/Login";
import Registration from "./RegistrationAndLoginPage/Registration";
// import Categories from "./CategoriesPage/Categories";
import AllGenres from "./GenresPage/AllGenres";
import Genres from "./GenresPage/Genres";
import Terms from "./ConditionsPages/Terms";
import Privacy from "./ConditionsPages/Privacy";
import AboutUs from "./AboutUs/AboutUs";
import AdPrefs from "./ConditionsPages/AdPrefs";
import Cookies from "./ConditionsPages/Cookies";
import Books from "./BooksPage/Books";
import UserPage from "./UserPage/UserPage";
import UserEditPage from "./UserPage/UserEditPage";
import Destroy from "./UserPage/Destroy";
import Header from "./Headers/Header";
import Footer from "./Footer/Footer";
import React, { useEffect, useState } from "react";
import Error from "./ErrorPage/Error";
import firebase, { database } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./Reducers/Books.actions";
import { fetchGenres } from "./Reducers/Genres.actions";
import { fetchUser } from "./RegistrationAndLoginPage/User.actions";



function App() {

  const loggedInUser = firebase.auth().currentUser;

  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books);
  const genresList = useSelector((state) => state.genres.genres);
  const user = useSelector((state) => state.user.user);



  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchGenres());
    if (loggedInUser) {
      console.log('loggedInUser', loggedInUser);
      dispatch(fetchUser(loggedInUser.uid));
    }

  }, [loggedInUser, dispatch]);


  return (
    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route exact path="/">
            {loggedInUser ? <HomePageLoggedIn /> : <HomePage books={books} genresList={genresList} />}
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/registration">
            <Registration />
          </Route>

          <Route path="/genres/:currentGenre">
            <Header />
            <Genres books={books} genresList={genresList} isLoggedIn={loggedInUser} />
          </Route>

          <Route path="/genres">
            <Header />
            <AllGenres books={books} genresList={genresList} />
          </Route>

          <Route path="/books/:currentGenre/:bookId">
            <Header />
            <Books books={books} />
          </Route>

          <Route exact path="/user/destroy">
            <Header />
            <Destroy />
          </Route>

          <Route exact path="/user/edit">
            <Header />
            {loggedInUser &&  <UserEditPage user={loggedInUser} />}
          </Route>

          <Route exact path="/user/:userId" >
            <Header />
            <UserPage isLoggedIn={loggedInUser} />
          </Route>

          <Route path="/terms">
            <Header />
            <Terms />
          </Route>

          <Route path="/privacy">
            <Header />
            <Privacy />
          </Route>

          <Route path="/aboutUs">
            <Header />
            <AboutUs />
          </Route>

          <Route path="/adprefs">
            <Header />
            <AdPrefs />
          </Route>

          <Route path="/cookies">
            <Header />
            <Cookies />
          </Route>

          <Route path="*">
            <Header />
            <Error />
          </Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
