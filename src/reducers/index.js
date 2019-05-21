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
  setRenderArray, setRabbit, setBang, setMessage, setSpeedRPS,
} from './renderState';

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
});

export default rootReducer;
