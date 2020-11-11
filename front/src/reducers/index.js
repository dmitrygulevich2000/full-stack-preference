import { combineReducers } from 'redux'
import modal from './modal.js'
import userLogin from './userLogin'
import tables from './tables'

export default combineReducers({modal, userLogin, tables})