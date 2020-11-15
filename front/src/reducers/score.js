import { combineReducers } from 'redux'

import mountain from './score/mountain'
import pool from './score/pool'
import whists from './score/whists'


const score = combineReducers({mountain, pool, whists})

export default score