import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home.js"
import About from "./About.js"
import Service from "./Service.js"
import Contact from "./Contact.js"
import Blog from "./Blog.js"


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/service">Service</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about"><About /></Route>

          <Route path="/service"><Service /></Route>

          <Route path="/contact"><Contact /></Route>

          <Route path="/blog"><Blog /></Route>

          <Route path="/"><Home/></Route>

        </Switch>
      </div>
    </Router>
  );
}