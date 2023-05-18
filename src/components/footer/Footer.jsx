import React from "react";
import "./footer.css";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaSkype,
  FaYoutube,
  FaCopyright,
  FaMap,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        <li className="nav__item">
          <h1 className="">About us</h1>
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit. <br />
            Mauris aliquet lacinia nulla ut laoreet.
            <br /> Quisque ultricies et tortor nec laoreet.
          </p>
          <div classNameName="icons">
            <FaInstagram className="icon" />
            <FaFacebook className="icon" />
            <FaSkype className="icon" />
            <FaWhatsapp className="icon" />
            <FaYoutube className="icon" />
          </div>
        </li>

        <li className="nav__item nav__item--extra">
          <h1 className="">Information</h1>

          <ul className="nav__ul nav__ul--extra">
            <li>
              <a href="/#">About</a>
            </li>

            <li>
              <a href="/#">Delivery information</a>
            </li>

            <li>
              <a href="/#">Privacy Policy</a>
            </li>

            <li>
              <a href="/#">Sales</a>
            </li>

            <li>
              <a href="/#">Terms & Conditions </a>
            </li>

            <li>
              <a href="/#">EMI Payment</a>
            </li>
          </ul>
        </li>

        <li>
          <h1 className="">Contact us</h1>

          <address>
            If you have any query, please contact us{" "}
            <span className="red">qwertyui@gmail.com</span>
          </address>
          <p>
            <FaMap className="icon" />
            India
          </p>
          <p>
            {" "}
            <FaPhone className="icon" /> +91 123456789
          </p>
        </li>
      </ul>
      <hr />

      <div className="legal">
        <p>
          <FaCopyright className="icon" /> 2022 Something. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
