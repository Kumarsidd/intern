import React from "react";
import "./arrival.css";
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
const Arrival = () => {
  return (
    <div>
      <div className="arrivalContainer">
        <h1 className="arrivalHead">
          <AiFillStar /> NEW ARRIVALS <AiFillStar />
        </h1>
        <h1 className="arrivalHead1">
          <AiFillStar /> OUR PRODUCTS <AiFillStar />
        </h1>
        <p className="arrivalPara">
          Claritas est etiam processus dynamicus, qui sequitur mutationem
          consuetudium lectorum.
        </p>
        <div className="cards">
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
        </div>
      </div>
    </div>
  );
};

export default Arrival;
