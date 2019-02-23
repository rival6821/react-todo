import { combineReducers } from 'redux';
import login from './login';
import join from './join';
import list from './list';

export default combineReducers({
    login, join, list
});