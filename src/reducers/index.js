import { combineReducers } from "redux";
import candidatesReducer from "./candidatesReducer.js";
import jobReducer from './jobReducer.js';

export default combineReducers(
    {
        jobs: jobReducer,
        candidates: candidatesReducer
    });