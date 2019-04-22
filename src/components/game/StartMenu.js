import React from 'react';


/*
* Choose difficulty of the game and start game button
*/

export default function StartMenu(props) {
  return (

    <div className="start-menu-container">

      <button
        type="button"
        id="leveldown"
        onClick={props.decreaseDifficultyLevel}
      >
      &#60;
      </button>

      <div id="level">{props.difficultyLevel}</div>

      <button
        type="button"
        id="levelup"
        onClick={props.increaseDifficultyLevel}
      >
        &#62;
      </button>

      <button
        type="button"
        id="startButton"
        onClick={props.restartGame}
      >
        start the game
      </button>

    </div>

  );
}
