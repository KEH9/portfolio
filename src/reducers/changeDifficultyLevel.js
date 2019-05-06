import {
  INCREASE_DIFFICULTY_LEVEL,
  DECREASE_DIFFICULTY_LEVEL,
} from '../constants/actionTypes';

import { newbie, veteran, ace } from '../constants/difficultyLevels';

// const initialState = {
//   rabbitsToWin: 100,
//   difficultyLevel: veteran,
// };

export default function difficultyLevel(state = veteran, action) {
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
