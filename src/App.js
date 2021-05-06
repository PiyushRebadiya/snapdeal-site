import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Accordionfiles from './component/Accordionfiles';
import Cardfile from './component/Cardfile';

function App() {
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000)
  }, []);

  return (
    <Router>
      {
        spinner ? <p>Refresh....</p> :
          <div>
            <div id="header">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-8 col-12 firstDiv">
                    <h1 id="logo"><Link to="/" className="none">snapdeal</Link></h1>
                  </div>
                  <div className="col-md-4 col-12 justify-content-left">
                    <ul id="menu" className="float-md-right">
                      <li className="ml-7"><Link to="/accordion">Accordion</Link></li>
                      <li><Link to="/card">Card</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Switch>
              <Route path="/accordion">
                <Accordionfiles />
              </Route>
              <Route path="/card">
                <Cardfile />
              </Route>
            </Switch>

          </div>
      }
    </Router>
  );
}

export default App;
