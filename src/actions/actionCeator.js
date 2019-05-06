import {
  SET_RABBITS_TO_WIN,
  INCREASE_DIFFICULTY_LEVEL,
  DECREASE_DIFFICULTY_LEVEL,
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
