import { combineReducers, createStore } from 'redux'
import file from './file/reducer';

import {showFileDropDown, hideFileDropDown} from './file/actions';


const reducer = combineReducers({ file });

const store = createStore(reducer);

export default store;

export {
    showFileDropDown, 
    hideFileDropDown
}