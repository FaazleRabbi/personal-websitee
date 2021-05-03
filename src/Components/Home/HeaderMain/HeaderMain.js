import React from "react";
import headerImage from "../../../images/headerImage.jpg";
import Navbar from "../Navbar/Navbar";
import "./HeaderMain.css";
import { Animated } from "react-animated-css";

const HeaderMain = () => {
  return (
    <div className="text-center headerMain p-2 ">
        <Navbar></Navbar>
      <div className="p-3 headerNav">
        <Animated
           animationIn="bounceInDown"
          animationOut="zoomOutDown"
          animationInDuration={2000}
          animationOutDuration={1000}
          isVisible={true}
        >
          <img className="headerImage" src={headerImage} />
        </Animated>
      </div>
      {/* <div className="p-3">
        <img className="headerImage" src={headerImage} alt="" />
      </div> */}
      <div className="p-3">
        <h1 className="text-light">Hi,I am</h1>
        <h2 className="text-warning">Fazle Rabbi</h2>
        <h5 className="text-secondary">Full stack web developer</h5>
      </div>
    </div>
  );
};

export default HeaderMain;
