import React from "react";

import {
  FaListUl,
  FaGripHorizontal,
  FaGripVertical,
  FaChessBoard,
} from "react-icons/fa";
import {
  AiFillStar,
  AiOutlineStar,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsCurrencyRupee, BsStarHalf } from "react-icons/bs";
import img1 from "../../images/19.png";
import img2 from "../../images/13.png";
import img3 from "../../images/65.png";
import img4 from "../../images/19.png";

function ItemList() {
  return (
    <main className="container">
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
      <div className="itemss">
        <div className="card">
          <div className="cardImg">
            <img src={img1} alt="img" />
          </div>
          <div className="cardContent">
            <div className="review">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf />
              <AiOutlineStar />
              <span>No review</span>
            </div>
            <hr />
            <h1>Claritas est etiam processus</h1>
            <hr />
            <div className="prices">
              <p className="price1">-33%</p>
              <p className="price2">
                <BsCurrencyRupee />
                100
              </p>
              <p className="price3">
                <BsCurrencyRupee />
                150
              </p>
            </div>
            <button className="arrivalBTN">
              <AiOutlineShoppingCart />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src={img2} alt="img" />
          </div>
          <div className="cardContent">
            <div className="review">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf />
              <AiOutlineStar />
              <span>1 review</span>
            </div>
            <hr />
            <h1>Claritas est etiam processus</h1>
            <hr />
            <div className="prices">
              <p className="price1">-33%</p>
              <p className="price2">
                <BsCurrencyRupee />
                100
              </p>
              <p className="price3">
                <BsCurrencyRupee />
                150
              </p>
            </div>
            <button className="arrivalBTN">
              <AiOutlineShoppingCart />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src={img3} alt="img" />
          </div>
          <div className="cardContent">
            <div className="review">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf />
              <AiOutlineStar />
              <span>No review</span>
            </div>
            <hr />
            <h1>Claritas est etiam processus</h1>
            <hr />
            <div className="prices">
              <p className="price1">-33%</p>
              <p className="price2">
                <BsCurrencyRupee />
                100
              </p>
              <p className="price3">
                <BsCurrencyRupee />
                150
              </p>
            </div>
            <button className="arrivalBTN">
              <AiOutlineShoppingCart />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src={img4} alt="img" />
          </div>
          <div className="cardContent">
            <div className="review">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf />
              <AiOutlineStar />
              <span>No review</span>
            </div>
            <hr />
            <h1>Claritas est etiam processus</h1>
            <hr />
            <div className="prices">
              <p className="price1">-33%</p>
              <p className="price2">
                <BsCurrencyRupee />
                100
              </p>
              <p className="price3">
                <BsCurrencyRupee />
                150
              </p>
            </div>
            <button className="arrivalBTN">
              <AiOutlineShoppingCart />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src={img1} alt="img" />
          </div>
          <div className="cardContent">
            <div className="review">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf />
              <AiOutlineStar />
              <span>No review</span>
            </div>
            <hr />
            <h1>Claritas est etiam processus</h1>
            <hr />
            <div className="prices">
              <p className="price1">-33%</p>
              <p className="price2">
                <BsCurrencyRupee />
                100
              </p>
              <p className="price3">
                <BsCurrencyRupee />
                150
              </p>
            </div>
            <button className="arrivalBTN">
              <AiOutlineShoppingCart />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src={img2} alt="img" />
          </div>
          <div className="cardContent">
            <div className="review">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf />
              <AiOutlineStar />
              <span>1 review</span>
            </div>
            <hr />
            <h1>Claritas est etiam processus</h1>
            <hr />
            <div className="prices">
              <p className="price1">-33%</p>
              <p className="price2">
                <BsCurrencyRupee />
                100
              </p>
              <p className="price3">
                <BsCurrencyRupee />
                150
              </p>
            </div>
            <button className="arrivalBTN">
              <AiOutlineShoppingCart />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src={img3} alt="img" />
          </div>
          <div className="cardContent">
            <div className="review">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf />
              <AiOutlineStar />
              <span>No review</span>
            </div>
            <hr />
            <h1>Claritas est etiam processus</h1>
            <hr />
            <div className="prices">
              <p className="price1">-33%</p>
              <p className="price2">
                <BsCurrencyRupee />
                100
              </p>
              <p className="price3">
                <BsCurrencyRupee />
                150
              </p>
            </div>
            <button className="arrivalBTN">
              <AiOutlineShoppingCart />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src={img4} alt="img" />
          </div>
          <div className="cardContent">
            <div className="review">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf />
              <AiOutlineStar />
              <span>No review</span>
            </div>
            <hr />
            <h1>Claritas est etiam processus</h1>
            <hr />
            <div className="prices">
              <p className="price1">-33%</p>
              <p className="price2">
                <BsCurrencyRupee />
                100
              </p>
              <p className="price3">
                <BsCurrencyRupee />
                150
              </p>
            </div>
            <button className="arrivalBTN">
              <AiOutlineShoppingCart />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="cardImg">
            <img src={img4} alt="img" />
          </div>
          <div className="cardContent">
            <div className="review">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <BsStarHalf />
              <AiOutlineStar />
              <span>No review</span>
            </div>
            <hr />
            <h1>Claritas est etiam processus</h1>
            <hr />
            <div className="prices">
              <p className="price1">-33%</p>
              <p className="price2">
                <BsCurrencyRupee />
                100
              </p>
              <p className="price3">
                <BsCurrencyRupee />
                150
              </p>
            </div>
            <button className="arrivalBTN">
              <AiOutlineShoppingCart />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ItemList;
