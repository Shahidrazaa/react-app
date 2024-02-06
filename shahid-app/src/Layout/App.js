import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About';
import Service from './Service';
import Home from './Home'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul className="flex">
            <li>
              <Link to="/" className="home">Home</Link>
            </li>
            <li>
              <Link to="/About" className="about">About</Link>
            </li>
            <li>
              <Link to="/Service" className="service">Service</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/About">
            <About />
          </Route>
          <Route path="/Service">
            <Service />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}