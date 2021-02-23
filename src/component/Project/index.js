import React, { useState, useEffect } from "react";
import Container from "../Container/index";
import * as API from "../../utils/API";
import "./style.css"

function Project() {
  const [projects, projectState] = useState([]);
  

  useEffect(() => {
    API.repoAPI.then((projects) => {
      console.log("Repository State:");
      console.log(projects);
      projectState(projects);
    });
  });
  console.log("Outside the useEffect", projects);
  return (
    <Container style={{ minHeight: "80%" }}>
      <h1 className="text-center">My Projects</h1>

      <div className="row">
        {projects.map((project) => {
          

          return (
            <div className="card col-3">
              
              <div className="bold-label">Project Name:</div>
              <span>{project.projectName}</span>
              <div className="bold-label">Project Code Link: <a href={project.projectLink}>Github</a></div>
              <div className="bold-label">Deployed Project: <a href={project.deployedLink}>Live Project</a></div>
              <div className="bold-label">About the Project: </div>
              <span>{project.projectDescription}</span>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Project;
