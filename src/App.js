import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
import React, { useEffect, Link } from "react";
import Error from "./ErrorPage/Error";
import firebase from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./Reducers/Books.actions";
import { fetchGenres } from "./Reducers/Genres.actions";
import { fetchUser } from "./RegistrationAndLoginPage/User.actions";





function App() {
  const dispatch = useDispatch();
  const { user, error, isLoading } = useSelector((state) => state.user);


  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchGenres());

    // When the user gets logged in
    firebase.auth().onAuthStateChanged((autenticUser) => {
      if (autenticUser.uid) {
        console.log('loggedInUser', autenticUser);
        dispatch(fetchUser(autenticUser.uid));
      }
    });
  }, [dispatch]);

  if (isLoading) {
    return <div className="loader"><img src="https://firebasestorage.googleapis.com/v0/b/goodreads-9c368.appspot.com/o/Spinner-1s-384px.gif?alt=media&token=fb00c3cc-2dbc-4545-b238-c6181b20c473" alt="loader" className="loaderImg" /></div>
  }

  return (
    <BrowserRouter>
      <div className="App">

        {error && (
          <div className="error"> Something was wrong. Please try to login/register again
            <Link to="/login">Login</Link> or continue like a gues user..
          </div>
        )}

        <Switch>
          <Route exact path="/">
            {user.id ? <HomePageLoggedIn /> : <HomePage />}
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
            <Books />
            <Footer />
          </Route>

          <Route exact path="/user/destroy">
            <Header />
            <Destroy />
            <Footer />
          </Route>

          <Route exact path="/user/edit">
            <Header />
            {user.id && <UserEditPage />}
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
