import "./App.css";
import TinderDate from "./TinderDate/TinderDate";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import Profile from "./ProfilePage/Profile";
import Login from "./Login/Login";
import Matches from "./Matches/Matches";
import React from "react";

function App() {
  const element = <h1>Pesho</h1>;
  const username = "Slatkata93";
  const isLoggedIn = true;
  const isAdmin = false;

  return (
    <BrowserRouter>
      <div className="App">
        <h2>Zdraveite tova e moq sait za zapoznastva. </h2>

        <button className="button">Test Button</button>

        <nav className="header">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/matches">Matches</Link>cd
          <Link to="/login">Login</Link>
        </nav>

        <Switch>
          <Route exact path="/">
            {isLoggedIn ? <TinderDate /> : <Redirect to="/login" />}
          </Route>

          {/* {isLoggedIn && (
            <React.Fragment> */}
          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/adminPanel">
            {isAdmin ? <h3>This is the admin panel</h3> : <Redirect to="/" />}
          </Route>

          <Route path="/matches/:matchId">
            <Matches />
          </Route>
          {/* </React.Fragment>
          )} */}

          <Route path="/login">
            <Login />
          </Route>

          <Route path="*">
            <h2>Not Found Page</h2>
          </Route>
        </Switch>

        <footer>This is my footer</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
