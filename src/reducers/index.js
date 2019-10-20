import { combineReducers } from 'redux';
import {
  difficultyLevel,
  setRabbitsToWin,
  setCurrentSpeed,
  setSpeedLimit,
  setSpeedStep,
  setWinCondition,
} from './changeDifficultyLevel';

import {
  setRenderArray, setRabbit, setBang, setMessage, setSpeedRPS, setChooseLevel, setFireworks,
} from './renderState';

import {
  setScale,
} from './other';

const rootReducer = combineReducers({
  difficultyLevel,
  rabbitsToWin: setRabbitsToWin,
  currentSpeed: setCurrentSpeed,
  speedLimit: setSpeedLimit,
  speedStep: setSpeedStep,
  winCondition: setWinCondition,
  renderArray: setRenderArray,
  rabbit: setRabbit,
  bang: setBang,
  message: setMessage,
  speedRPS: setSpeedRPS,
  chooseLevel: setChooseLevel,
  fireworks: setFireworks,
  scale: setScale,
});

export default rootReducer;
