import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';
import EnterPlayerNames from "./EnterPlayerNames";

function App() {
  const [teamName1, setTeamName1] = React.useState("Name Team 1");
  const [teamName2, setTeamName2] = React.useState("Name Team 2");

  return (
    <div className="App">
      <h1>Tichu</h1>
      <Router>
        <Switch>
          <Route path="/" exact>
            <table className="TichuTable">
              <tbody>
                <tr>
                  <th>{teamName1}</th>
                  <th>{teamName2}</th>
                </tr>
                <tr>
                <td>1</td>
                <td>2</td>
                </tr>
              </tbody>
            </table>
            <div className="buttonBar">
              <Link className="btn" to="/team-names">Team-Namen</Link>
            </div>
          </Route>
          <Route path="/team-names" render={(props) => <EnterPlayerNames {...props} teamName1={teamName1} setTeamName1={setTeamName1} teamName2={teamName2} setTeamName2={setTeamName2} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
