import "./App.css";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import HomePageLoggedIn from "./HomePage/HomePageLoggedIn";
import Registration from "./RegistrationPage/Registration";
import Categories from "./CategoriesPage/Categories";
import Genres from "./GenresPage/Genres";
import Footer from "./Footer/Footer";
import React from "react";

function App() {
  const isLoggedIn = false;

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
          {isLoggedIn ? <HomePageLoggedIn /> : <HomePage/>}
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

          <Route path="/books/:bookId">
            {/* <Books /> */}
          </Route>

          <Route path="*">
            <h2>Not Found Page</h2>
          </Route>
        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
