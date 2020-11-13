import { combineReducers } from 'redux'

import dealType from './resultsForm/dealType'
import player from './resultsForm/player'
import whistlers from './resultsForm/whistlers'
import contract from './resultsForm/contract'
import tricks from './resultsForm/tricks'

const resultsForm = combineReducers({dealType: dealType, 
                                    player: player,
                                    whistlers: whistlers, 
                                    contract: contract,
                                    tricks: tricks})

export default resultsForm