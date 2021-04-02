import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import HomePageLoggedIn from "./HomePage/HomePageLoggedIn";
import Login from "./RegistrationAndLoginPage/Login";
import Registration from "./RegistrationAndLoginPage/Registration";
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
import React, { useEffect } from "react";
import Error from "./ErrorPage/Error";
import firebase  from "./firebase";
import { useDispatch } from "react-redux";
import { fetchBooks } from "./Reducers/Books.actions";
import { fetchGenres } from "./Reducers/Genres.actions";
import { fetchUser } from "./RegistrationAndLoginPage/User.actions";



function App() {

  const loggedInUser = firebase.auth().currentUser;

  const dispatch = useDispatch();

  // const books = useSelector((state) => state.books.books);
  // const genresList = useSelector((state) => state.genres.genres);


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
            {loggedInUser ? <HomePageLoggedIn /> : <HomePage /> }
            <Footer />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/registration">
            <Registration />
          </Route>

          <Route path="/genres/:currentGenre">
            <Header />
            <Genres />
            <Footer />
          </Route>

          <Route path="/genres">
            <Header />
            <AllGenres />
            <Footer />
          </Route>

          <Route path="/books/:currentGenre/:bookId">
            <Header />
            <Books  />
            <Footer />
          </Route>

          <Route exact path="/user/destroy">
            <Header />
            <Destroy />
            <Footer />
          </Route>

          <Route exact path="/user/edit">
            <Header />
            {loggedInUser &&  <UserEditPage />}
            <Footer />
          </Route>

          <Route exact path="/user/:userId" >
            <Header />
            <UserPage />
            <Footer />
          </Route>


          <Route path="/terms">
            <Header />
            <Terms />
            <Footer />
          </Route>

          <Route path="/privacy">
            <Header />
            <Privacy />
            <Footer />
          </Route>

          <Route path="/aboutUs">
            <Header />
            <AboutUs />
            <Footer />
          </Route>

          <Route path="/adprefs">
            <Header />
            <AdPrefs />
            <Footer />
          </Route>

          <Route path="/cookies">
            <Header />
            <Cookies />
            <Footer />
          </Route>

          <Route path="*">
            <Header />
            <Error />
            <Footer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
