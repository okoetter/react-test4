import React from 'react';
import "./TichuTable.css";

function TichuTable({ teamNames }) {
  return (
    <table className="TichuTable">
      <tbody>
        <tr>
          <th>{teamNames.team1}</th>
          <th>{teamNames.team2}</th>
        </tr>
        <tr>
        <td>1</td>
        <td>2</td>
        </tr>
      </tbody>
    </table>
  );
}

export default TichuTable;
