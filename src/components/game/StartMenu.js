import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  setRabbitsToWin,
  increaseDifficultyLevel,
  decreaseDifficultyLevel,
  setCurrentSpeed,
  setSpeedLimit,
  setSpeedStep,
  setWinCondition,
} from '../../actions/actionCeator';
import { newbie, veteran, ace } from '../../constants/difficultyLevels';


/*
* Choose difficulty of the game and start game button
*/

function StartMenu(props) {
  function increaseDifficultyLevelfunction() {
    if (props.difficultyLevel === newbie) {
      props.actions.setRabbitsToWin(100);
      props.actions.setCurrentSpeed(170);
      props.actions.setSpeedLimit(130);
      props.actions.setSpeedStep(1);
      props.actions.setWinCondition(100);
    } else if (props.difficultyLevel === veteran) {
      props.actions.setRabbitsToWin(120);
      props.actions.setCurrentSpeed(150);
      props.actions.setSpeedLimit(120);
      props.actions.setSpeedStep(1);
      props.actions.setWinCondition(120);
    }
    props.actions.increaseDifficultyLevel();
  }
  function decreaseDifficultyLevelfunction() {
    if (props.difficultyLevel === veteran) {
      props.actions.setRabbitsToWin(65);
      props.actions.setCurrentSpeed(200);
      props.actions.setSpeedLimit(150);
      props.actions.setSpeedStep(2);
      props.actions.setWinCondition(65);
    } else if (props.difficultyLevel === ace) {
      props.actions.setRabbitsToWin(100);
      props.actions.setCurrentSpeed(170);
      props.actions.setSpeedLimit(130);
      props.actions.setSpeedStep(1);
      props.actions.setWinCondition(100);
    }
    props.actions.decreaseDifficultyLevel();
  }

  const decreaseLevel = () => decreaseDifficultyLevelfunction(props);
  const increaseLevel = () => increaseDifficultyLevelfunction(props);


  return (
    <div className="start-menu-container">

      <button
        type="button"
        id="leveldown"
        onClick={decreaseLevel}
      >
      &#60;
      </button>

      <div id="level">{props.difficultyLevel}</div>

      <button
        type="button"
        id="levelup"
        onClick={increaseLevel}
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
  rabbitsToWin: state.rabbitsToWin,
});

const actions = {
  setRabbitsToWin,
  increaseDifficultyLevel,
  decreaseDifficultyLevel,
  setCurrentSpeed,
  setSpeedLimit,
  setSpeedStep,
  setWinCondition,
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartMenu);
