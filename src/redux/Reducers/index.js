import { combineReducers } from 'redux';
import { registerUserReducer } from './userRegister';
import {userReducer} from "./userReducer"


export default combineReducers({
    registerUserReducer,
    userReducer
});