import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "../../../Home/Navbar/Navbar";
import { projectsInfo } from "../../ProjectsInfo/ProjectsInfo";

const ProjectDetails = () => {
  let { id } = useParams();
  console.log(id);
  const project = projectsInfo.filter((info) => info.id == id);
  console.log(project);
  console.log(projectsInfo);
  const {
    projectName,
    image,
    features1,
    features2,
    features3,
    features4,
  } = project[0];
  console.log(projectName);
  return (
    <div className="headerMain ">
      <Navbar></Navbar>
      <div className="w-75 m-auto">
        <div class="card">
          <img
            class="card-img-top bg-secondary rounded p-4"
            src={image}
            alt="Card image cap"
          ></img>
          <div class="card-body ">
            <h5 class="card-title text-danger">{projectName}</h5>
          </div>
          <h4 className="pl-2">Features:</h4>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{features1}</li>
            <li class="list-group-item">{features2}</li>
            <li class="list-group-item">{features3}</li>
            <li class="list-group-item">{features4}</li>
          </ul>
          <div class="card-body">
            <div className="d-flex justify-content-between p-3">
              <Link
                className="bg-primary rounded font-weight-bold p-2  text-light"
                to="#"
              >
                {" "}
                <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> Github
              </Link>
              <Link
                className=" bg-primary p-2  text-light rounded font-weight-bold "
                to="#"
              >
                {" "}
                <FontAwesomeIcon icon={faLink}></FontAwesomeIcon> Live{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
