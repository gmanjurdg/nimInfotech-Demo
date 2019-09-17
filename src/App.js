import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import SelectionBar from "./Component/SelectionBar";
import Information from "./Component/Information";
import Navbar from "./Component/Navbar";

export default function App() {
  return (
      <Router>
      <div>
        <ul className="" style={{display:'flex', justifyContent:'space-evenly'}}>
         <li> <Link exact to="/">Jobs</Link></li> 
         <li><Link to="/Home">Inbox </Link> </li>
          <li><Link to="/SelectionBar">Calendar</Link></li> 
          <li><Link to="/Information">Career Page</Link> </li>
          <li><Link to="/Navbar">Reports</Link></li>
        </ul>
        <hr/>
        <Route exact path="/" component={SelectionBar} />
        <Route path="/Home" component={Home} />
        <Route path="/Information" component={Information} />
        <Route path="/Navbar" component={Navbar} />
      </div>
    </Router>
  );
}
