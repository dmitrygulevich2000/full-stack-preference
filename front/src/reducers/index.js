import { combineReducers } from 'redux'

import modal from './modal.js'
import userLogin from './userLogin'
import setLocalLogin from './userLogin'
import tables from './tables'
import resultsForm from './resultsForm'
import score from './score'
import scoreHistory from './scoreHistory'

export default combineReducers({modal, userLogin, tables, resultsForm, score, scoreHistory, setLocalLogin})