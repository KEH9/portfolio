import { SET_RABBITS_TO_WIN } from '../constants/actionTypes';
// import { veteran } from '../constants/difficultyLevels';

// const initialState = {
//   rabbitsToWin: 100,
//   difficultyLevel: veteran,
// };

export default function setRabbitToWin(state = 100, action) {
  if (action.type === SET_RABBITS_TO_WIN) {
    return action.rabbitsToWin;
  }
  return state;
}
