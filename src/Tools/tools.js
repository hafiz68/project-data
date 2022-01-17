import React from "react";
import "./tools.css";

const Tools = () => {
  return (
    <>
        <div className="tools-background-color">

      <h1 className="tools_heading__style" >
        TOOLS
      </h1>
      <div className="col-md-12 row tool-card-main">
        <div className="col-md-3 row tools_card_design_first">
          <h4>OUR PORTAL</h4>
          {/* <p>Buy with Atarichain</p> */}
          {/* <button className="tool-button-style">VISIT WEB </button> */}
          <div className="tool-buttons">
          <a  href="#" >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
   <span> VISIT WEB </span>
    </a>
            </div>
        </div>

        <div className="col-md-3 row tools_card_design_Second">
          <h4>XVERSE</h4>
          {/* <p>Buy with your wallet</p> */}
          {/* <button className="tool-button-style">DEV APP</button> */}
          <div className="tool-buttons">
          <a  href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
  DEV APP
    </a>
            </div>
        </div>

        <div className="col-md-3 row tools_card_design_Third">
          <h4>TOKEN</h4>
          {/* <p>SMART WALLET</p> */}
          {/* <button className="tool-button-style">CONTACT  </button> */}
          <div className="tool-buttons">
          <a  href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
 CONTACT
    </a>
            </div>
        </div>

        <div className="col-md-3 row tools_card_design_Fourth">
          <h4>FARM </h4>
          {/* <p>DECENTRALIZED EXCHANGE</p> */}
          {/* <button className="tool-button-style">VISIT APP </button> */}
          <div className="tool-buttons">
          <a  href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
  VISIT APP
    </a>
            </div>
        </div>

      </div>
      </div>

    </>
  );
};

export default Tools;
