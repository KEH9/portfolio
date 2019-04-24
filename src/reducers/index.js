import { combineReducers } from 'redux';
import rabbitsToWin from './setRabbitsToWin';

const rootReducer = combineReducers({
  rabbitsToWin,
});

export default rootReducer;
