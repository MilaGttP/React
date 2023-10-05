import Timer from './Components/Timer';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function Home() {
  return (
    <>
      <h2>This is world times service</h2>
    </>
  );
}

function Ukraine() {
  return (
    <>
      <Timer name="Europe/Kiev" />
    </>
  );
}

function Other() {
  return (
    <div className="App">
      <Timer name="Europe/Kiev" />
      <Timer name="America/New_York" />
      <Timer name="Asia/Hong_Kong" />
    </div>
  );
}

function Nav() {
  return (
    <>
    <nav className="nav">
          <ul>
            <li>
              <NavLink to="/" exact activeClassName={'custom-active'}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/ukraine">Ukraine</NavLink>
            </li>
            <li>
              <NavLink to="/other">Other</NavLink>
            </li>
          </ul>
      </nav>
      <hr/>
    </>
  );
}

function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ukraine" component={Ukraine} />
            <Route path="/other" component={Other} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;