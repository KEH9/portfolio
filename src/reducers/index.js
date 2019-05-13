import { combineReducers } from 'redux';
import {
  difficultyLevel,
  setRabbitsToWin,
  setCurrentSpeed,
  setSpeedLimit,
  setSpeedStep,
  setWinCondition,
} from './changeDifficultyLevel';

const rootReducer = combineReducers({
  difficultyLevel,
  rabbitsToWin: setRabbitsToWin,
  currentSpeed: setCurrentSpeed,
  speedLimit: setSpeedLimit,
  speedStep: setSpeedStep,
  winCondition: setWinCondition,
});

export default rootReducer;
