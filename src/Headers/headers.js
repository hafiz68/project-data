import React from "react";
import "./headers.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Tools from "../Tools/tools";
import HomePage from "../Home/homePage";
import Vision from "../Vision/vision";
// import News from "../News/news";
import Form from "../Form/form";
import Partners from "../Partners/partners";
import ScrollButton from "../Scroll-Button/scrollButton";
import { BiMenu } from "react-icons/bi";
import Footer from "../Footer/footer";
import Logo from "../Assests/logo/logo 1.png";
import ReactCarousel from "../ReactCarousel/reactCarousel";

const Headers = () => {
  const slideOpen = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const slideClose = () => {
    document.getElementById("mySidebar").style.display = "none";
  };
  return (
    <div data-spy="scroll" className="top-head header_style">
      <div className="nav-bar-sl ">
        <div className="slides" id="mySidebar">
          <div className="slide-down-1" onClick={slideClose}>
            <p>Close</p>
          </div>
          <div className="slide-down">
            <AnchorLink className="nav-links  single active " href="#homepage">
              <p> Home </p>
            </AnchorLink>
          </div>
          <div className="slide-down">
            <AnchorLink className="nav-links  single active " href="#vision">
              <p>Vision </p>{" "}
            </AnchorLink>{" "}
          </div>
          <div className="slide-down">
            <AnchorLink
              className="nav-links single "
              id="target2"
              href="#tools"
            >
              <p>Tools</p>
            </AnchorLink>
          </div>
          <div className="slide-down">
            <AnchorLink className="nav-links single" id="target3" href="#news">
              <p>Media</p>{" "}
            </AnchorLink>
          </div>
          <div className="slide-down">
            <AnchorLink className="nav-links single " href="#partners">
              {" "}
              <p>Partner</p>{" "}
            </AnchorLink>
          </div>
          <div className="slide-down">
            <AnchorLink className="nav-links single " href="#faqs">
              {" "}
              <p>FAQ</p>{" "}
            </AnchorLink>
          </div>
          <div className="slide-down">
            <AnchorLink className="nav-links single " href="#form">
              {" "}
              <p>Contact</p>{" "}
            </AnchorLink>
          </div>
        </div>
        <div className="haed-nav-img ">
          <img src={Logo} alt="head" />
        </div>
        <button onClick={slideOpen}>
          <BiMenu size={35} />
        </button>
      </div>

      <div className="slide-down" id="mySidebar"></div>
      {/* <div className="container"> */}
      <div className="nav-bar col-md-12">
        <div className="haed-nav-img col-sm-4">
          <img src={Logo} alt="head"  />
        </div>
        <div className="haed-nav-btns  col-sm-8">
          <AnchorLink className="nav-linkss  single active " href="#homepage">
            Home
            <div></div>
          </AnchorLink>
          <AnchorLink className="nav-linkss single " id="target1" href="#vision">
            Vision
            <div></div>
          </AnchorLink>
          <AnchorLink className="nav-linkss single " id="target2" href="#tools">
            Tools
            <div></div>
          </AnchorLink>
          <AnchorLink className="nav-linkss single" id="target3" href="#news">
           Media
            <div></div>
          </AnchorLink>
          <AnchorLink className="nav-linkss single " href="#partners">
            Partner
            <div></div>
          </AnchorLink>

          <AnchorLink className="nav-linkss single " href="#faqs">
            FAQ
            <div></div>
          </AnchorLink>
          <AnchorLink className="nav-linkss single " href="#form">
            Contact
            <div></div>
          </AnchorLink>
{/* 
          <div>
            <button className="btn-1">Login</button>
            <button className="btn-2">Sign up</button>
          </div> */}
        </div>
        {/* </div> */}
      </div>
      <section id="homepage">
        <HomePage />
      </section>
      <section id="vision">
        <Vision />
      </section>
      <section id="tools">
        <Tools />
      </section>
      <section id="news">
        {/* <News /> */}
        <ReactCarousel />
      </section>
      <section id="partners">
        <Partners />
      </section>
      <section id="form">
        <Form />
      </section>
      <section id="footer">
        <Footer />
      </section>
      <section id="scroll">
        <ScrollButton />
      </section>
    </div>
  );
};

export default Headers;
