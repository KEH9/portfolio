import { combineReducers } from 'redux';
import rabbitsToWin from './setRabbitsToWin';
import difficultyLevel from './changeDifficultyLevel';

const rootReducer = combineReducers({
  rabbitsToWin,
  difficultyLevel,
});

export default rootReducer;
