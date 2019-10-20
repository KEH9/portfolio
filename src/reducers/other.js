/* eslint-disable import/prefer-default-export */
import {
  SET_SCALE,
} from '../constants/actionTypes';

const initialState = {
  scale: 25,
};

export function setScale(state = initialState.scale, action) {
  if (action.type === SET_SCALE) {
    return action.scale;
  }
  return state;
}
