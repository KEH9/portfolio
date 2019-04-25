import { SET_RABBITS_TO_WIN } from '../constants/actionTypes';

export default function setRabbitToWin(state = 100, action) {
  if (action.type === SET_RABBITS_TO_WIN) {
    return action.rabbitsToWin;
  }
  return state;
}
