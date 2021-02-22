import React, { useState, useEffect } from "react";
import Container from "../Container/index";
import * as API from "../../utils/API";

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
              
              <div>Project Name: {project.projectName}</div>
              <div>Project Code Link: {project.projectLink}</div>
              <div>Deployed Project: {project.deployedLink}</div>
              <div>About the Project: {project.projectDescription}</div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Project;
