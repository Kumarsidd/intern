import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <Home /> */}
<<<<<<< HEAD
      {/* <Shop /> */}
      <Router>
        <Home />
        {/* <Shop /> */}
=======
      <Shop />
      <Router>
        <Home />
        <Shop />
>>>>>>> 93120988768e72933ae086a931ca98faa3e2c039
      </Router>
    </>
  );
};

export default App;
