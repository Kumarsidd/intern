import React from "react";
import "./index.css";
import Navbar from "../components/navbar/Navbar";
import Landing from "../components/landing/Landing";

const Home = () => {
  return (
    <section>
      <Navbar />
      <Landing />
    </section>
  );
};

export default Home;
