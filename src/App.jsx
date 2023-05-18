import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/product" component={Product} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
