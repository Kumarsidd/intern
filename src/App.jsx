import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/navbar/Navbar";
import NoMatch from "./components/noMatch/NoMatch";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/shop" element={<Shop />}></Route>
          <Route path="*" element={<NoMatch />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
