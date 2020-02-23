// src/App.js
import React from "react";
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import history from "./utils/history";

import Landing from "./components/Landing";
import Profile from "./components/Profile";
import MyStocks from "./components/MyStocks";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <PrivateRoute path="/mystocks" component={MyStocks} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;