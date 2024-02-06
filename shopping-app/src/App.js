import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./layout/Home";
import About from "./layout/About";
import Blog from "./layout/Blog";
import "./App.css"
import Logo from "./images/logo.png";
import Service from "./layout/Service";
import Contact from "./layout/Contact";


export default function App() {
  return (
    <Router>
      <div className="header">
        <div className="nav">
        <nav className="navbar">
          <div id="logo">
            <img src={Logo} alt="logo-img"/>
            <h1>Electrochip</h1>
          </div>
          <ul>
            <li>
              <Link to="/" className="home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Service">Service</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
           
          </ul>
        </nav>
       </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About/>}/>

          <Route path="/" element={<Home/>}/>

          <Route path="/blog" element={<Blog/>}/>

          <Route path="/service" element={<Service/>}/>
          
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}
