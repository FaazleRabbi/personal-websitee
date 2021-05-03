import React from "react";
import headerImage from "../../images/headerImage.jpg";
import { Animated } from "react-animated-css";
import Navbar from "../Home/Navbar/Navbar";
import Skills from "./Skills/Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faGithubSquare,
  faLinkedinIn,
  faMailchimp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Tools from "./Tools/Tools";

const About = () => {
  return (
    <div className="headerMain">
      <Navbar></Navbar>
      <div className="row w-100 mt-5 pt-5 pb-5">
        <div className="col-md-4 offset-md-1 text-center">
          <Animated
            animationIn="bounceInLeft"
            animationOut="zoomOutDown"
            animationInDuration={2000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <img className="headerImage" src={headerImage} />
          </Animated>
        </div>
        <div className="col-md-5 text-light text-center">
          <Animated
            animationIn="bounceInRight"
            animationOut="zoomOutDown"
            animationInDuration={2000}
            animationOutDuration={1000}
            isVisible={true}
          >
            <h1 className="text-warning">Fazle Rabbi</h1>
            <div>
              <a className="h1 m-3 text-light" href="">
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
              </a>
              <a className="h1 m-3 text-primary" href="">
                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
              </a>
              <a className="h1 m-3 text-light" href="">
                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              </a>
            </div>
            <h3 className="m-2 ">
              <FontAwesomeIcon
                className=" text-primary"
                icon={faPhone}
              ></FontAwesomeIcon>{" "}
              +880 1796127162
            </h3>
          </Animated>
        </div>
      </div>
      <div className="bg-secondary p-3">
        <div className="d-flex justify-content-center pt-2 col-md-10 offset-md-1 ">
          <div className="">
            <h4 className="text-warning text-center pt-4">SKILLS</h4>
            <h6 className="text-light">
              Learning new thing is my one of the skill developing hobby and I
              always enjoy to learn new thing. For this reason I have been
              learning web design and development for a long time and I have
              build 10+ projects. To build project I have to know lots of new
              thing and I am developing my skill continuesly. See my skill that
              mention below :
            </h6>
          </div>
        </div>
        <div className="row text-light pt-2">
          <div className="col-md-5 offset-md-1">
            <Tools></Tools>
          </div>
          <div className="col-md-5">
            <Skills></Skills>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
