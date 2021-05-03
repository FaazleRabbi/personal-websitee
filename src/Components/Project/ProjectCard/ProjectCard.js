import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";
import { projectsInfo } from "../ProjectsInfo/ProjectsInfo";


const ProjectCard = ({ info }) => {
  console.log(info);
  
  const {
    id,
    projectName,
    features1,
    features2,
    features3,
    features4,
    githubLInk,
    image,
  } = info;
  console.log(image);

  return (
    <div className="col-md-4 pt-5 pb-5 rounded">
        <Animated
           animationIn="bounceInLeft"
          animationOut="zoomOutDown"
          animationInDuration={2000}
          animationOutDuration={1000}
          isVisible={true}
        >
      <div className="border rounded">
        <div className="rounded bg-primary p-2">
          <img className="img-fluid rounded " src={image} />
        </div>
        <div className="bg-light">
            <h4>{projectName}</h4>
            <p className="text-center p-2"><Link to={`/project/${id}`} className=" bg-warning p-2  rounded font-weight-bold  text-dark ">Case Study</Link></p>
            <div className="d-flex justify-content-between p-3">
                <Link className="bg-primary rounded font-weight-bold p-2  text-light" to="#"> <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Github</Link>
                <Link className=" bg-primary p-2  text-light rounded font-weight-bold " to="#"> <FontAwesomeIcon icon={faLink}></FontAwesomeIcon> Live </Link>
            </div>
        </div>
      </div>
      </Animated>
    </div>
  );
};

export default ProjectCard;
