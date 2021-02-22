import React, { useState, useEffect } from "react";
import * as API from "../../utils/API";

function Project(){
    const [projects, projectState] = useState({});
        // projectName:"",
        // projectLink:"",
        // deployedLink:"",
        // projectDescription:""
   

    useEffect(() => {
        API.repoAPI.then((projects) =>{            
            console.log("Repository State:");
            console.log(projects);
            projectState(projects);
        });
    }, );

// function Project(){
//     // for project name
//     const [projects, setProject] = useState([]);
//     // for project link
//     // const
//     // //for deployed link
//     // const
//     //for description

//     useEffect(() =>[{
//         projectName:"NDP_Employee Database",
//             projectLink:"https://github.com/NPitroff/NDP_EmployeeDatabase",
//             deployedLink:"https://ndpendent-employee-database.herokuapp.com/",
//             projectDescription:"A Employee Database filter that sorts based on Names"
//         },
        
//     ])

    return(
        <div className="card">
            <div>
                Project Name: {projects.projectName}
            </div>
            <div>
                Repo Link: {projects.projectLink}
            </div>
            <div>
                Deployed Project Link: {projects.deployedLink}
            </div>
            <div>
                Description: {projects.projectDescription}
            </div>
        </div>
    );
}

export default Project;