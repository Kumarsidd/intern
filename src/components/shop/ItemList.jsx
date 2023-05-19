import React from "react";

import {
  FaListUl,
  FaGripHorizontal,
  FaGripVertical,
  FaChessBoard,
} from "react-icons/fa";

import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import img1 from "../../images/13.png";

function ItemList() {
  return (
    <main>
      <div className="sort">
        <div className="icons">
          <FaGripHorizontal className="icon active1" />
          <FaGripVertical className="icon" />
          <FaChessBoard className="icon" />
          <FaListUl className="icon" />
          <span>Showing list 1 to 9 to 37 items</span>
        </div>
        <div className="sortText">
          <p>
            Show :<a href="/#">10</a>
          </p>

          <div className="sortBy">
            <p>
              Sort by :<a href="/#">Date, old to New</a>
            </p>
          </div>
        </div>
      </div>
      <div className="items">
        <div className="item">
          <img src={img1} alt="item" className="itemImage" />
          <div className="itemInfo">
            <div className="stars">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <h4>Claritas est etiam processus</h4>
            <p>$ 150</p>
            <button>
              <AiOutlineShoppingCart />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ItemList;
