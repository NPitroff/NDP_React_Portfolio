import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/Header";
import Wrapper from "./component/Wrapper";
import Footer from "./component/Footer";
import Gitrepo from "./pages/gitRepo";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
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
      <div>
    <Header />
      <Wrapper />
      <Route exact path ="/" component ={Home}/>
      <Route exact path ="/gitrepo" component={Gitrepo} />
      <Route exact path="/Contact" component={Contact}/>
      <Footer />
      </div>
      </Router>
  );
}

export default App;
