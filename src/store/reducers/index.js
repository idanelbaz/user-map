import { combineReducers } from 'redux';
import locationReducer from './locationReducer';

const combinedReducer = combineReducers({
  locationReducer
})

export default combinedReducer;
