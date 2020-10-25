import React from 'react';
import './App.css';
import TeamName from "./TeamName";

function App() {
  const [teamName1, setTeamName1] = React.useState("Name Team 1");
  const [teamName2, setTeamName2] = React.useState("Name Team 2");

  return (
    <div className="App">
      <h1>Tichu</h1>
      <table className="TichuTable">
        <tr>
          <th><TeamName name={teamName1} setName={setTeamName1} /></th>
          <th><TeamName name={teamName2} setName={setTeamName2} /></th>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
