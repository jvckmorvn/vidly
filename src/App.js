import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import MovieForm from "./components/movieForm";
import Movies from "./components/movies";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import SignUpForm from "./components/signUpForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" exact component={MovieForm} />
          <Route path="/movies/new" exact component={MovieForm} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/sign-up" exact component={SignUpForm} />
          <Route path="/movies/" exact component={Movies} />
          <Route path="/404" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/404" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
