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
import React from "react";
import Error from "./ErrorPage/Error";

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
  const isLoggedIn = true;

  // const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header user={user}/> */}

        {/* {user.isLoggedIn ? <Header />: <GuestUserHeader />} */}

        <Switch>
          <Route exact path="/">
            {isLoggedIn ? <HomePageLoggedIn /> : <HomePage />}
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
            <Genres isLoggedIn={isLoggedIn}/>
          </Route>

          <Route path="/genres">
            <AllGenres />
          </Route>

          <Route path="/books/:currentGenre/:bookId">
            <Books isLoggedIn={isLoggedIn} />
          </Route>

          <Route path="/user/edit">
            <UserEditPage isLoggedIn={isLoggedIn}/>
          </Route>

          <Route path="/user/:userName">
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
