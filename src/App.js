import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import EnterPlayerNamesForm from "./EnterPlayerNamesForm";
import TichuTable from './TichuTable';

function App() {
  const [teamNames, setTeamNames] = useState({ team1: "Name Team 1", team2: "Name Team 2"});

  return (
    <div className="App">
      <h1>Tichu</h1>
      <Router>
        <Switch>
          <Route path="/" exact>
            <TichuTable teamNames={teamNames} />
            <div className="buttonBar">
              <Link className="btn" to="/team-names">Team-Namen</Link>
            </div>
          </Route>
          <Route path="/team-names" render={(props) => <EnterPlayerNamesForm {...props} teamNames={teamNames} setTeamNames={setTeamNames} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
