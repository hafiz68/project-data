import React from "react";
// import HomeImage from "../Assests/HomeImage.png";
import HomePageImage from "../Assests/HomePage.png"

import "./homePage.css";
const HomePage = () => {
  return (
    <div>
      {/* <div className="homePage_bbackground__color"> */}
        <div className="homePage_content__style col-md-12 col-lg-12 row">
          
          <div className="home_content col-md-6  col-lg-6 text-content">
            <h1> Metaverse Games </h1>
            <h2>Xverse Token</h2>
            <p>
              We are building the token that will power the future of the
              inyteractive enytertainment industry{" "}
            </p>
            <h2>Contract Address</h2>
            <p>
            Xverse Token is an multi token that is based on multinets. This is
              the official contact address of the  Xverse Token (XVT).
            </p>

            <p>
              <span>Contract Adress="0x00000000000000000000"</span>
            </p>

          </div>

          <div className="col-md-6 col-lg-6">
<div className="header-remote-image">
<img src={HomePageImage} alt="img" />
</div>
          </div>
          </div>

      {/* </div> */}

    </div>
  );
};

export default HomePage;
