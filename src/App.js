import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Component/Home";
import SelectionBar from "./Component/SelectionBar";
import Information from "./Component/Information";
import Navbar from "./Component/Navbar";
import Calender from "./Component/Calender";

export default function App() {
  return (
      <Router>
      <div>
      <hr/>
        <ul style={{display:'flex', justifyContent:'space-evenly', background: '#2563'}}>
           <Link exact to="/">Jobs</Link>  
           <Link to="/Home">Inbox </Link>  
           <Link to="/Calender">Calendar</Link>  
           <Link to="/Information">Career Page</Link>  
           <Link to="/Navbar">Reports</Link> 
        </ul>
        <hr/>
        <Route exact path="/" component={SelectionBar} />
        <Route path="/Home" component={Home} />
        <Route path="/Calender" component={Calender} />
        <Route path="/Information" component={Information} />
        <Route path="/Navbar" component={Navbar} />
      </div>
    </Router>
  );
}
