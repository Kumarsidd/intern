import React from "react";
import Category from "../components/shop/Category";
import ItemList from "../components/shop/ItemList";
import "../components/shop/shop.css";
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
