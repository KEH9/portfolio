import {
  SET_RENDER_ARRAY,
  SET_RABBIT,
  SET_BANG,
  SET_MESSAGE,
  SET_SPEED_RPS,
  SET_CHOOSE_LEVEL,
  SET_FIREWORKS,
} from '../constants/actionTypes';

const initialState = {
  renderArray: [],
  rabbit: '',
  bang: '',
  message: '',
  speedRPS: 0,
  chooseLevel: '',
  fireworks: '',
};

export function setRenderArray(state = initialState.renderArray, action) {
  if (action.type === SET_RENDER_ARRAY) {
    return action.renderArray;
  }
  return state;
}

export function setRabbit(state = initialState.rabbit, action) {
  if (action.type === SET_RABBIT) {
    return action.rabbit;
  }
  return state;
}

export function setBang(state = initialState.bang, action) {
  if (action.type === SET_BANG) {
    return action.bang;
  }
  return state;
}

export function setMessage(state = initialState.message, action) {
  if (action.type === SET_MESSAGE) {
    return action.message;
  }
  return state;
}

export function setSpeedRPS(state = initialState.speedRPS, action) {
  if (action.type === SET_SPEED_RPS) {
    return action.speedRPS;
  }
  return state;
}
export function setChooseLevel(state = initialState.chooseLevel, action) {
  if (action.type === SET_CHOOSE_LEVEL) {
    return action.chooseLevel;
  }
  return state;
}

export function setFireworks(state = initialState.fireworks, action) {
  if (action.type === SET_FIREWORKS) {
    return action.fireworks;
  }
  return state;
}
