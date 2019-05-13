import {
  INCREASE_DIFFICULTY_LEVEL,
  DECREASE_DIFFICULTY_LEVEL,
  SET_RABBITS_TO_WIN,
  SET_CURRENT_SPEED,
  SET_SPEED_LIMIT,
  SET_SPEED_STEP,
  SET_WIN_CONDITION,
} from '../constants/actionTypes';

import { newbie, veteran, ace } from '../constants/difficultyLevels';

const initialState = {
  difficultyLevel: veteran,
  setRabbitsToWin: 100,
  setCurrentSpeed: 170,
  setSpeedLimit: 103,
  setSpeedStep: 1,
  setWinCondition: 100,
};

export function difficultyLevel(state = initialState.difficultyLevel, action) {
  if (action.type === INCREASE_DIFFICULTY_LEVEL) {
    if (state === newbie) {
      return veteran;
    } if (state === veteran) {
      return ace;
    }
  } if (action.type === DECREASE_DIFFICULTY_LEVEL) {
    if (state === ace) {
      return veteran;
    } if (state === veteran) {
      return newbie;
    }
  }
  return state;
}


export function setRabbitsToWin(state = initialState.setRabbitsToWin, action) {
  if (action.type === SET_RABBITS_TO_WIN) {
    return action.rabbitsToWin;
  }
  return state;
}

export function setCurrentSpeed(state = initialState.setCurrentSpeed, action) {
  if (action.type === SET_CURRENT_SPEED) {
    return action.currentSpeed;
  }
  return state;
}

export function setSpeedLimit(state = initialState.setSpeedLimit, action) {
  if (action.type === SET_SPEED_LIMIT) {
    return action.speedLimit;
  }
  return state;
}

export function setSpeedStep(state = initialState.setSpeedStep, action) {
  if (action.type === SET_SPEED_STEP) {
    return action.speedStep;
  }
  return state;
}

export function setWinCondition(state = initialState.setWinCondition, action) {
  if (action.type === SET_WIN_CONDITION) {
    return action.winCondition;
  }
  return state;
}
