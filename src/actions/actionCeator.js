import {
  SET_RABBITS_TO_WIN,
  INCREASE_DIFFICULTY_LEVEL,
  DECREASE_DIFFICULTY_LEVEL,
  SET_CURRENT_SPEED,
  SET_SPEED_LIMIT,
  SET_SPEED_STEP,
  SET_WIN_CONDITION,
  SET_RENDER_ARRAY,
  SET_RABBIT,
  SET_BANG,
  SET_MESSAGE,
  SET_SPEED_RPS,
  SET_CHOOSE_LEVEL,
  SET_FIREWORKS,
  SET_SCALE,
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


export const setRenderArray = renderArray => ({
  type: SET_RENDER_ARRAY,
  renderArray,
});

export const setRabbit = rabbit => ({
  type: SET_RABBIT,
  rabbit,
});

export const setBang = bang => ({
  type: SET_BANG,
  bang,
});

export const setMessage = message => ({
  type: SET_MESSAGE,
  message,
});

export const setSpeedRPS = speedRPS => ({
  type: SET_SPEED_RPS,
  speedRPS,
});

export const setChooseLevel = chooseLevel => ({
  type: SET_CHOOSE_LEVEL,
  chooseLevel,
});

export const setFireworks = fireworks => ({
  type: SET_FIREWORKS,
  fireworks,
});

export const setScale = scale => ({
  type: SET_SCALE,
  scale,
});
