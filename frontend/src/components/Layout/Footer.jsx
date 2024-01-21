import React from "react";
import "../../styles/layouts/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="main">
        <div className="fot-1-left">
          <h1>Be the First one to know</h1>
          <input placeholder="Enter E-mail" />
          <button>Subscribe</button>
        </div>
        <div className="fot-1-right">
          <h3>Contact Us</h3>
          <p>+9122323232</p>
          <p>customercare@promilo.com</p>
          <h3>Our Message</h3>
          <p>
            We here at Promilo work with customer as sole target. We love to
            serve you.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
