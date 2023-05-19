import React from "react";
import Category from "./Category";
import ItemList from "./ItemList";
import "./Shop.css";

function Shop() {
  return (
    <div className="shopping">
      <Category className="category" />
      <ItemList className="shopList" />
    </div>
  );
}

export default Shop;
