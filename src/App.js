import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Ukraine from "./Components/Ukraine";
import Other from "./Components/Other";
import "./styles.css"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ukraine">Ukraine</Link>
            </li>
            <li>
              <Link to="/other">Other</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/ukraine" element={<Ukraine />} />
          <Route path="/other" element={<Other />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;