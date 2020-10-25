import React from 'react';
import { Link } from "react-router-dom";

const EnterPlayerNames = ({teamName1, setTeamName1, teamName2, setTeamName2}) => {
  const SaveTeamNamesHandler = () => {
    setTeamName1(document.querySelector(".team1").value.trim());
    setTeamName2(document.querySelector(".team2").value.trim());
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
        <input className="team1" defaultValue={teamName1} onKeyDown={TeamNameKeyDownHandler} />
      </label>
      <label>
        Name Team 2:
        <input className="team2" defaultValue={teamName2} onKeyDown={TeamNameKeyDownHandler} />
      </label>
      <div>
        <Link className="btn btnSave" to="/" onClick={SaveTeamNamesHandler}>Speichern</Link>
      </div>
    </>
  );
}

export default EnterPlayerNames;
