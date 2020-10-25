import React from 'react';
import { Link } from "react-router-dom";

const EnterPlayerNames = ({ teamNames, setTeamNames }) => {
  const SaveTeamNamesHandler = () => {
    setTeamNames({
      team1: document.querySelector(".team1").value.trim(),
      team2: document.querySelector(".team2").value.trim()
    });
  };

  const TeamNameKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.querySelector(".btnSave").click();
    }
  };

  return (
    <>
      <label>
        Name Team 1:
        <input className="team1" defaultValue={teamNames.team1} onKeyDown={TeamNameKeyDownHandler} />
      </label>
      <label>
        Name Team 2:
        <input className="team2" defaultValue={teamNames.team2} onKeyDown={TeamNameKeyDownHandler} />
      </label>
      <div>
        <Link className="btn btnSave" to="/" onClick={SaveTeamNamesHandler}>Speichern</Link>
      </div>
    </>
  );
}

export default EnterPlayerNames;
