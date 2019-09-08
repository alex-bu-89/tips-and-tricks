import { combineReducers } from 'redux';
import { profileReducer, aviabilityReducer } from './playerArchive';

export default combineReducers({ 
  playerProfile: profileReducer,
  playerAviability: aviabilityReducer,
});