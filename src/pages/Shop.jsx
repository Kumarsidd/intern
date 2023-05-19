import React from "react";
import Category from "../components/Shop/Category";
import ItemList from "../components/Shop/ItemList";
import "../components/Shop/Shop.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function Shop() {
  return (
    <>
      <Navbar />
      <div className="shopping">
        <Category className="category" />
        <ItemList className="shopList" />
      </div>
      <Footer />
    </>
  );
}

export default Shop;
