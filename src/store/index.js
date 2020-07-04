import { combineReducers, createStore } from 'redux'
import file from './file/reducer';
import dialog from './dialog/reducer';

import {showFileDropDown, hideFileDropDown} from './file/actions';
import {renderDialog, hideDialog} from './dialog/action';


const reducer = combineReducers({ file, dialog});

const store = createStore(reducer);

export default store;

export {
    showFileDropDown, 
    hideFileDropDown,
    renderDialog,
    hideDialog
}