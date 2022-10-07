import weatherReducer from "./weather";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({weather: weatherReducer});

export default rootReducer;