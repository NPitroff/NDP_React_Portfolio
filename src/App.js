import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header";
import Wrapper from "./component/Wrapper";
// import Footer from "./component/Footer";
// import Project from "./component/Project";

//bootstrap script::::::::::::::::::::::
import "bootstrap/dist/css/bootstrap.css";
// Import the bootswatch stylesheet:::::::::::
import "../src/stylesheet.css";
// Import mystylesheet:::::::::
import "../src/mystyle.css";

function App() {
  return (
    <Router>
    <Header />
      <Wrapper />
      
    
      </Router>
  );
}

export default App;