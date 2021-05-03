import React from "react";
import { Animated } from "react-animated-css";

const Tools = () => {
  return (
    <div>
      <Animated
        animationIn="bounceInRight"
        animationOut="zoomOutDown"
        animationInDuration={2000}
        animationOutDuration={1000}
        isVisible={true}
      >
        <h2>Programming Language:</h2>
        <div className="d-flex">
          <h6 className="bg-primary rounded p-2 m-2">HTML</h6>
          <h6 className="bg-primary rounded p-2 m-2">CSS</h6>
          <h6 className="bg-primary rounded p-2 m-2">JavaScript</h6>
          <h6 className="bg-primary rounded p-2 m-2">Php</h6>
        </div>

        <h2 className="pt-3 text-warning">Web</h2>
        <h4 className="">Frontend:</h4>
        <div className="d-flex">
          <h6 className="bg-secondary rounded p-2 m-2">Html</h6>
          <h6 className="bg-secondary rounded p-2 m-2">Css</h6>
          <h6 className="bg-secondary rounded p-2 m-2">bootstrap</h6>
          <h6 className="bg-secondary rounded p-2 m-2">JavaScript</h6>
          <h6 className="bg-secondary rounded p-2 m-2">React JS</h6>
          <h6 className="bg-secondary rounded p-2 m-2">ES6</h6>
        </div>
        <h4 className="">Backend:</h4>
        <div className="d-flex">
          <h6 className="bg-secondary rounded p-2 m-2">Node JS</h6>
          <h6 className="bg-secondary rounded p-2 m-2">Express JS</h6>
          <h6 className="bg-secondary rounded p-2 m-2">MongoDB</h6>
        </div>
        <h4 className="">Deploy:</h4>
        <div className="d-flex">
          <h6 className="bg-secondary rounded p-2 m-2">Heroku</h6>
          <h6 className="bg-secondary rounded p-2 m-2">Netlify</h6>
          <h6 className="bg-secondary rounded p-2 m-2">Firebase</h6>
          <h6 className="bg-secondary rounded p-2 m-2">MongoDB</h6>
        </div>


      </Animated>
    </div>
  );
};

export default Tools;
