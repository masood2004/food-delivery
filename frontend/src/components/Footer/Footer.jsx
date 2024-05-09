import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <p className="logo">Yumway.</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            aliquid labore quidem et excepturi perspiciatis, sequi autem rem
            sunt error eligendi animi, tenetur impedit corporis maiores. Quis
            vitae exercitationem ullam ab ducimus eum eos?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+923123456789</li>
            <li>contact@yumway.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Yumway.com - All Right Reversed.
      </p>
    </div>
  );
};

export default Footer;
