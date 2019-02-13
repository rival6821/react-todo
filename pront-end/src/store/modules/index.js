import { combineReducers } from 'redux';
import login from './login';
import join from './join';

export default combineReducers({
    login, join
});