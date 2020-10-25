import React from "react";
import "./TeamName.css";

const TeamName = ({ name, setName }) => {
  const TeamNameChangeHandler = (e) => {
    let input = e.target
      .innerText
      .replace("\n", "")
      .trim();
    setName(input);
  };

  /**
   * Handle enter key press
   */
  const TeamNameKeyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  };

  return (
    <span
      className="teamname"
      contenteditable="true"
      onBlur={TeamNameChangeHandler}
      onKeyDown={TeamNameKeyDownHandler}
    >
      {name}
    </span>
  );
};

export default TeamName;
