import React from "react";
// Images for the Wrapper::::::::::::
import AZ from "../../Images/Grand_Canyon.jpg";
import LB from "../../Images/Long Beach.jpg";
import RN from "../../Images/reno.jpg";
import LA from "../../Images/Los Angeles.jpg";
// CSS for the Wrapper::::::::::::::
import "./style.css";


function Wrapper() {
    return(
        <div className="row">
        <div className="column" id="travels">
          <img alt="Grand Canyon" src={AZ}></img>
        </div>
        <div className="column">
          <img alt="Long Beach" src={LB}></img>
        </div>
        <div className="column">
          <img alt="Reno" src={RN}></img>
        </div>
        <div className="column">
          <img alt="Los Angeles" src={LA}></img>
        </div>
      </div>
    )
}

export default Wrapper;