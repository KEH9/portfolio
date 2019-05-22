import React from 'react';
import { connect } from 'react-redux';

/*
* Choose difficulty of the game and start game button
*/

function StartMenu(props) {
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


const mapStateToProps = state => ({
  difficultyLevel: state.difficultyLevel,
});

export default connect(
  mapStateToProps,
)(StartMenu);
