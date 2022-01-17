import React from "react";
import "./visionCards.css";
import Safety_icon from "../Assests/icons/safety_icon.png";
import Skills_icon from "../Assests/icons/skills_icon.png";
import Easy_icon from "../Assests/icons/easy_icon.png";
import Muchmore_icon from "../Assests/icons/muchmore_icon.png";

const VisionCards = () => {
  return (
    <>
              <div className="container">

      <div className="col-md-12 row top-cards-style">
        <div className="col-md-3  ">
        {/* <div className="container"> */}
        <div className="smart-contract px-4 ">
          <img src={Safety_icon} alt="safetyicon" />
          <h1>Smart contract security</h1>
          <p>
            Since each transaction is stored on a distributed ledger, tampering
            with a recorded history or minting new tokens from thin air to
            manipulate value is impossible.
          </p>
          {/* </div> */}
          </div>

        </div>
        <div className="col-md-3 ">
        {/* <div className="container"> */}
        <div className=" easy-integration px-4">

          <img src={Easy_icon} alt="safetyicon" />
          <h1>EASY INTEGRATION</h1>
          <p>
            We aim to enable other developers to easily integrate the Atari
            Token in their games and blockchain-based applications.{" "}
          </p>
          </div>

        {/* </div> */}
      </div>
      <div className="col-md-3 ">
        {/* <div className="container"> */}

        <div className=" skills-matter px-4">

      <img src={Skills_icon} alt="safetyicon" />
          <h1>SKILLS MATTER</h1>
          <p>
            We are working on innovative games in which you can stake tokens
            against other players. The best player wins the prize.
          </p>
          </div>


        {/* </div> */}
      </div>

      <div className="col-md-3">
          <div className=" much-more px-4">
        {/* <div className="container"> */}
        <img src={Muchmore_icon} alt="safetyicon" />
          <h1>MUCH MORE</h1>
          <p>
            This is a long-term plan and we will continue to develop our
            portfolio of use cases in accordance with applicable regulations.
            Stay tuned for updates!
          </p>
          </div>


        {/* </div> */}
      </div>
      </div>

      </div>




   

    </>
  );
};

export default VisionCards;
