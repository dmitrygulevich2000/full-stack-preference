import { combineReducers } from 'redux'

import dealType from './resultsForm/dealType'
import player from './resultsForm/player'

const resultsForm = combineReducers({dealType: dealType, player: player})

export default resultsForm