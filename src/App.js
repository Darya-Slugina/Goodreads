import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import HomePageLoggedIn from "./HomePage/HomePageLoggedIn";
import Login from "./RegistrationAndLoginPage/Login";
import Registration from "./RegistrationAndLoginPage/Registration";
import Categories from "./CategoriesPage/Categories";
import AllGenres from "./GenresPage/AllGenres";
import Genres from "./GenresPage/Genres";
import Terms from "./ConditionsPages/Terms";
import Privacy from "./ConditionsPages/Privacy";
import AboutUs from "./AboutUs/AboutUs";
import AdPrefs from "./ConditionsPages/AdPrefs";
import Cookies from "./ConditionsPages/Cookies";
import Books from "./BooksPage/Books";
import UserPage from "./UserPage/UserPage";
import UserEditPage from "./UserPage/UserEditPage"
import Header from "./Headers/Header";
import GuestUserHeader from "./Headers/GuestUserHeader";
import Footer from "./Footer/Footer";
import React, { useEffect, useState } from "react";
import Error from "./ErrorPage/Error";
import firebase from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "./Reducers/Books.actions";
import { fetchGenres } from "./Reducers/Genres.actions";
import { fetchUser } from "./RegistrationAndLoginPage/User.actions";


function App() {

  const loggedInUser = firebase.auth().currentUser;
  console.log(loggedInUser);

  // const [user, setUser] = useState(null);

  const dispatch = useDispatch();

  const books = useSelector((state) => state.books.books);
  const genresList = useSelector((state) => state.genres.genres);
  const user = useSelector((state) => state.user.user);
  // const [user, setUser] = useState('olga');
  // const [books, setBooks] = useState([]);
  // const [genresList, setGenresList] = useState([]);

  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchGenres());
    if(loggedInUser) {    console.log('loggedInUser', loggedInUser);
      dispatch(fetchUser(loggedInUser.uid));
    }
    
  }, [loggedInUser, dispatch]);


  // useEffect(() => {
  //   // firebase.auth().onAuthStateChanged(function (user) {
  //   //   if (user) {
  //   //     // User is signed in.
  //   //     console.log("Signed in user: ", user);
  //   //     setUser(user);
  //   //   } else {
  //   //     // No user is signed in.
  //   //     console.log("No user: ", user);
  //   //   }
  //   // });
  //   dispatch(fetchUser());
  // }, []);

  return (
    <BrowserRouter>
      <div className="App"> 
        {/* <Header user={user}/> */}

        {loggedInUser ? <Header />: <GuestUserHeader />}

        <Switch>
          <Route exact path="/">
            {loggedInUser ? <HomePageLoggedIn /> : <HomePage books={books} genresList={genresList}/>}
            {/* {user ? <HomePageLoggedIn /> : <HomePage books={books} genresList={genresList}/>} */}
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/registration">
            <Registration />
          </Route>

          <Route path="/genres/:currentGenre">
            <Genres books={books} genresList={genresList} isLoggedIn={loggedInUser}/>
          </Route>

          <Route path="/genres">
            <AllGenres books={books} genresList={genresList} />
          </Route>

          <Route path="/books/:currentGenre/:bookId">
            <Books books={books} />
          </Route>

          <Route exact path="/user/edit">
            {loggedInUser && <UserEditPage user={loggedInUser}/>}
          </Route>

          <Route exact path="/user/:id" >
            <UserPage isLoggedIn={loggedInUser}/>
          </Route>

          <Route path="/terms">
            <Terms />
          </Route>

          <Route path="/privacy">
            <Privacy />
          </Route>

          <Route path="/aboutUs">
            <AboutUs />
          </Route>

          <Route path="/adprefs">
            <AdPrefs />
          </Route>

          <Route path="/cookies">
            <Cookies />
          </Route>

          <Route path="*">
            <Error />
          </Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
