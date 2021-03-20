import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import HomePageLoggedIn from "./HomePage/HomePageLoggedIn";
import Login from "./LoginPage/Login";
import Registration from "./RegistrationPage/Registration";
import Categories from "./CategoriesPage/Categories";
import Genres from "./GenresPage/Genres";
import Terms from "./Footer/Terms";
import Privacy from "./Footer/Privacy";
import AboutUs from "./Footer/AboutUs";
import AdPrefs from "./Footer/AdPrefs";
import Cookies from "./Footer/Cookies";
import Books from "./BooksPage/Books";
import Footer from "./Footer/Footer";
import React from "react";

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

          <Route path="/genres">
            <Genres />
          </Route>

          <Route path="/books">
            <Books />
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
            <h2>Not Found Page</h2>
          </Route>
        </Switch>

        <Footer />

        {/* {isLoggedIn ? <Footer /> : null} */}
      </div>
    </BrowserRouter>
  );
}

export default App;
