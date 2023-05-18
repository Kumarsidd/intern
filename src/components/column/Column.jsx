import React from "react";
import "./columns.css";
import image1 from "../../images/1.png";
import image2 from "../../images/2.png";
import image3 from "../../images/3.png";
import imag1 from "../../images/1-1.png";
import imag2 from "../../images/1-2.png";
import imag3 from "../../images/1-3.png";

const Column = () => {
  return (
    <>
      <main className="flexContent">
        <div className="content1">
          <h4>Money gurantee</h4>
          <p>
            Nam liber tempor cum soluta nobis
            <br /> eleifend option congue.
          </p>
        </div>
        <div className="content1">
          <h4>Online support</h4>
          <p>
            Nam liber tempor cum soluta nobis
            <br /> eleifend option congue.
          </p>
        </div>
        <div className="content1">
          <h4>Free delivery</h4>
          <p>
            Nam liber tempor cum soluta nobis
            <br /> eleifend option congue.
          </p>
        </div>
      </main>

      <main className="flexContent1">
        <div className="contentImage">
          <img src={imag1} alt="imag1" className="mainImage" />
          <div>
            <img src={image2} alt="image1" className="imageSize" />
          </div>
        </div>
        <div className="contentImage">
          <img src={imag2} alt="imag1" className="mainImage" />
          <div>
            <img src={image1} alt="image1" className="imageSize" />
          </div>
        </div>
        <div className="contentImage">
          <img src={imag3} alt="imag1" className="mainImage" />
          <div>
            <img src={image3} alt="image1" className="imageSize" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Column;
