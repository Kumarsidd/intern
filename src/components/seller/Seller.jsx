import React from "react";
import { FaStar } from "react-icons/fa";
import image1 from "../../images/65.png";
import "./seller.css";

const Seller = () => {
  return (
    <main className="seller">
      <div className="heading">
        <h1>
          <FaStar className="red" />
          BEST SELLER PRODUCTS
          <FaStar className="red" />
        </h1>
        <p>Nam liber tempor cum soluta nobis eleifend option congue.</p>
      </div>
      <div className="products">
        <div className="product pro1">
          <div className="productimg">
            <img src={image1} alt="nav" className="productImage" />
          </div>
          <div className="productInfo">
            <div className="stars">
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <span>1 review</span>
            </div>
            <h3>CLARTAIAS EST TEAM</h3>
            <p> $ 150</p>
          </div>
        </div>
        <div className="product pro1">
          <div className="productimg">
            <img src={image1} alt="nav" className="productImage" />
          </div>
          <div className="productInfo">
            <div className="stars">
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <span>1 review</span>
            </div>
            <h3>CLARTAIAS EST TEAM</h3>
            <p> $ 150</p>
          </div>
        </div>
        <div className="product pro1">
          <div className="productimg">
            <img src={image1} alt="nav" className="productImage" />
          </div>
          <div className="productInfo">
            <div className="stars">
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <span>1 review</span>
            </div>
            <h3>CLARTAIAS EST TEAM</h3>
            <p> $ 150</p>
          </div>
        </div>
        <div className="product">
          <div className="productimg">
            <img src={image1} alt="nav" className="productImage" />
          </div>
          <div className="productInfo">
            <div className="stars">
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <span>1 review</span>
            </div>
            <h3>CLARTAIAS EST TEAM</h3>
            <p> $ 150</p>
          </div>
        </div>
        <div className="product">
          <div className="productimg">
            <img src={image1} alt="nav" className="productImage" />
          </div>
          <div className="productInfo">
            <div className="stars">
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <span>1 review</span>
            </div>
            <h3>CLARTAIAS EST TEAM</h3>
            <p> $ 150</p>
          </div>
        </div>
        <div className="product">
          <div className="productimg">
            <img src={image1} alt="nav" className="productImage" />
          </div>
          <div className="productInfo">
            <div className="stars">
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <FaStar className="yellow" />
              <span>1 review</span>
            </div>
            <h3>CLARTAIAS EST TEAM</h3>
            <p> $ 150</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Seller;
