import React from "react";
import "./vision.css";
// import VisionImage from "../Assests/VisionImage.png";
// import Render8 from "../Assests/renders/render 8.png"
// import Render8 from "../Assests/display.png"
import Display from "../Assests/DisplayC.png"
// import Safety_icon from "../Assests/icons/safety_icon.png";
// import Skills_icon from "../Assests/icons/skills_icon.png";
// import Easy_icon from "../Assests/icons/easy_icon.png";
// import Muchmore_icon from "../Assests/icons/muchmore_icon.png";
// import Liquidity_icon from "../Assests/Liquidity_icon.png";
import Phone from "../Assests/Phone.png";
import VisionCards from "../Vision/visionCards"
const Vision = () => {
  return (
    <>
    <div className="background-color-vision">
      <h2 className="vision_heading__style">  Idea</h2>
      <div className="container">
      <div className="col-md-12 row vision_section ">
        <div className="col-md-6 row">
          <img
            src={Display}
            alt="visionimage"
            // width="200px"
            // height="300px"
            className="visionImage_style"
          
          />
        </div>
        <div className="col-md-6 row  vision_content">
          <div className="container">
          <h2> The White paper</h2>
          <p>
          Xverse Token is a decentralized cryptocurrency that was created to
            become the token of reference for the interactive entertainment
            industry. Our goal is to have the Xverse Token  used as widely as
            possible across the interactive entertainment industry, allowing
            developers and publishers new options for the exploitation of their
            products, integration of smart contracts, protection of in-game
            assets and so much more. Read about all our latest developments
            below!
          </p>
          {/* <button className="vision-button-style">White Paper <img className="button-icon-style" src="https://atarichain.com/img/white_paper_icon.png" alt="" height="14px" width="14px"
          /></button> */}
<div className="white-paper-button-style">
<a  href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
   WHITE PAPER
    </a>
    </div>
          </div>
        </div>
        </div>
      </div>
      <VisionCards/>
      {/* --------------------------------------------------------------------------------------------------------- */}
      
      {/* <div className="container cards-font-style">
        <div className="col-md-12 row visionCard__style">

          <div className="col-md-3 row">
            
            <div className="vision-small-card-One">
              <div className="vision_card_design">
                <img src={Safety_icon} alt="safetyicon" />
                <h2>Smart contract security</h2>
                <p>
                  Since each transaction is stored on a distributed ledger,
                  tampering with a recorded history or minting new tokens from
                  thin air to manipulate value is impossible.
                </p>
                <img src={Skills_icon} alt="safetyicon" />
                <h2>SKILLS MATTER</h2>
                <p>
                  We are working on innovative games in which you can stake
                  tokens against other players. The best player wins the prize.
                </p>
              </div>
            </div>




       
          </div>






          <div className="col-md-6 row  " >
            <div className="vision_middle_card">
<div className="container">
      
            <div>
            <h2>LIQUIDITY</h2>
            <p>
              We intend to list the Atari Token on as many exchanges as
              possible, allowing token holders to easily make exchanges for
              other currencies. The choice of platforms will depend on different
              criteria, such as regulations, safety, and volume of transactions.
            </p>
            <div className="middle-img-section">
            <img src={Phone} alt="phone" width="100%" />
            </div>
            </div>

            </div>
          </div>
          </div>




          <div className="col-md-3 row">
            
              <div className="vision_card_designSectionTwo-One">
                <img src={Easy_icon} alt="safetyicon" />
                <h2>EASY INTEGRATION</h2>
                <p>
                  We aim to enable other developers to easily integrate the
                  Atari Token in their games and blockchain-based applications.{" "}
                </p>
                <div className="vision-second-card">
                <img src={Muchmore_icon} alt="safetyicon" />
                <h2>MUCH MORE</h2>
                <p>
                  This is a long-term plan and we will continue to develop our
                  portfolio of use cases in accordance with applicable
                  regulations. Stay tuned for updates!{" "}
                </p>
                </div>
              </div>



          </div>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default Vision;
