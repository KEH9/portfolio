import {
  SET_RABBITS_TO_WIN,
  INCREASE_DIFFICULTY_LEVEL,
  DECREASE_DIFFICULTY_LEVEL,
  SET_CURRENT_SPEED,
  SET_SPEED_LIMIT,
  SET_SPEED_STEP,
  SET_WIN_CONDITION,
} from '../constants/actionTypes';

export const setRabbitsToWin = rabbitsToWin => ({
  type: SET_RABBITS_TO_WIN,
  rabbitsToWin,
});

export const increaseDifficultyLevel = () => ({
  type: INCREASE_DIFFICULTY_LEVEL,
});

export const decreaseDifficultyLevel = () => ({
  type: DECREASE_DIFFICULTY_LEVEL,
});

export const setCurrentSpeed = currentSpeed => ({
  type: SET_CURRENT_SPEED,
  currentSpeed,
});

export const setSpeedLimit = speedLimit => ({
  type: SET_SPEED_LIMIT,
  speedLimit,
});

export const setSpeedStep = speedStep => ({
  type: SET_SPEED_STEP,
  speedStep,
});

export const setWinCondition = winCondition => ({
  type: SET_WIN_CONDITION,
  winCondition,
});
