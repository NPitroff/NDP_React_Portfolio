import React, { useState, useEffect } from "react";
import * as API from "../../utils/API";

function Project(){
    const [repoState, setRepoState] = useState({
            projectName:"",
            projectLink:"",
            deployedLink:"",
            projectDescription:""
    });

    useEffect(() => {
        API.repoAPI.then((res) =>{
            setRepoState(res);
            console.log("Repository State:");
            console.log(repoState);
        });
    }, []);

    return(
        <div className="card">
            <div>
                Project Name: {repoState.projectName}
            </div>
            <div>
                Repo Link: {repoState.projectLink}
            </div>
        </div>
    )
}




export default Project;