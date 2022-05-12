import { combineReducers } from "redux";
import jobReducer from './jobReducer.js'

export default combineReducers({ jobs: jobReducer })