import React from "react";
import "./index.css";
import Navbar from "../components/navbar/Navbar";
import Landing from "../components/landing/Landing";
import Column from "../components/column/Column";
import Seller from "../components/seller/Seller";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <>
      <section>
        <Navbar />
        <Landing />
      </section>
      <Column />
      <Seller />
      <Footer />
    </>
  );
};

export default Home;
