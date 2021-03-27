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
// import Books from "./BooksPage/Books";
import Footer from "./Footer/Footer";
import React, { useEffect, useState } from "react";
import Error from "./ErrorPage/Error";
import firebase from "./firebase";




// function Header({user}) {

//   return (
//     <div>
//       HomePage
//       <input></input>

//       {user.isLoggedIn ? }
//     </div>
//   )
// }

function App() {


  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        console.log("Signed in user: ", user);
        setUser(user);
      } else {
        // No user is signed in.
        console.log("No user: ", user);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header user={user}/> */}

        {/* {user.isLoggedIn ? <Header />: <GuestUserHeader />} */}

        <Switch>
          <Route exact path="/">
            {user ? <HomePageLoggedIn /> : <HomePage />}
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/registration">
            <Registration />
          </Route>

          <Route path="/categories">
            <Categories />
          </Route>

          <Route path="/genres/:currentGenre">
            <Genres isLoggedIn={user}/>
          </Route>

          <Route path="/genres">
            <AllGenres />
          </Route>

          <Route path="/books/:currentGenre/:bookId">
            <Books isLoggedIn={user} />
          </Route>

          <Route exact path="/user/edit">
            <UserEditPage isLoggedIn={user}/>
          </Route>

          <Route exact path="/user/:userName">
            <UserPage />
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
