import { combineReducers } from 'redux'

import modal from './modal.js'
import userLogin from './userLogin'
import tables from './tables'
import resultsForm from './resultsForm'
import score from './score'

export default combineReducers({modal, userLogin, tables, resultsForm, score})