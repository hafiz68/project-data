import React from "react";
// import piccir from '../img/ilv-circle.svg';
import { IoLogoGameControllerB } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaYoutube, FaTwitter, FaFacebook, FaMediumM } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../Assests/logo/logo 1.png"


import "./footer.css";

const Footer = () => {
  return (
    <div
      class="footer2"
      style={{
        background: "black",
      }}
    >
      <div className="container">
        <center>
          <div className="red-slide col-md-12">
            <div className="red-text col-md-3">
              <h3>Newslist</h3>
            </div>
            <div className="red-text1 col-md-6">
              <input placeholder="Enter email address"></input>
            </div>
            <div className="red-text2 col-md-3">
              <button>
                Submit <AiOutlineArrowRight size={15} />
              </button>
            </div>
          </div>
        </center>
        <div className="footer-nav col-md-12">
          <div className="img-top col-md-4">
            {/* <img src="https://atarichain.com/img/logo.png" height="30px" width="30%"/> */}
            <img src={Logo} alt="head"   />

            <p>
              Atari stands firmly in support of freedom and the liberty that
              blockchain provides globally for anyone to voluntarily participate
              in a permissionless and decentralized network.
            </p>
          </div>
          <div className="img-top2 col-md-2">
            <h2>Quick links</h2>
            <AnchorLink className="nav-links" href="#homepage">
              Home
              <div></div>
            </AnchorLink>

            <AnchorLink className="nav-links" href="#vision">
              Vision
              <div></div>
            </AnchorLink>


            <AnchorLink className="nav-links" href="#tools">
              Tools
              <div></div>
            </AnchorLink>


            <AnchorLink className="nav-links" href="#faqs">
              FAQ
              <div></div>
            </AnchorLink>


            <AnchorLink className="nav-links" href="#form">
              Contact
              <div></div>
            </AnchorLink>

          </div>
          <div className="img-top3 col-md-2">
            <h4>Address</h4>
            <h6>Argon Floor-7 Arfa kareem Tower</h6>
          </div>
          <div className="follow-icons col-md-4">
            <h4>Follow Us</h4>
            <div>
            <a href="#">
              <IoLogoGameControllerB size={50} />
            </a>
            <a href="#">
              <FaTwitter size={50} />
            </a>
            <a href="#">
              <FaFacebook size={50} />
            </a>
            <a href="#">
              <FaMediumM size={50} />
            </a>
            <a href="#">
              <FaYoutube size={50} />
            </a></div>
          </div>
        </div>
        <div class="footer1 col-md-12">
          <p>Privacy Policy </p>
          <p>Terms of Use</p>
          <p>Regulatory Oversight </p>
          <p>AML / CFT Policy </p>
          <p>Useful Links</p>
          {/* <p>Cookie Policy</p> */}
        </div>

        <div class="footer">
          <div class="footer-text">
            <p>Xverse © 2022, All rights reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
