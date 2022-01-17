import React from "react";
// import CoverPageVideo from "../Assests/Bloktopiatrailer.mp4";
import CoverPageVideo from "../Assests/Crypto33.mp4";

import "./coverPage.css";
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
const CoverPage = () => {
  const history = useHistory();

  const handleNextPage = () => {
    history.push("/headers");
  };
  return (
    <>
      <video
        className="video_coverpage"
        src={CoverPageVideo}
        loop={true}
        muted={true}
        autoPlay={true}
      />

      <div className="content-style-coverpage">
      <Link className="coverPage_button__style " onClick={handleNextPage} href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
     Enter Xverse
    </Link>
        {/* <button className="coverPage_button__style" onClick={handleNextPage}>
          Click To Enter Website
        </button> */}
      </div>
    </>
  );
};
export default CoverPage;
