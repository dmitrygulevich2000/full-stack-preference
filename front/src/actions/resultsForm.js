import {RESULTS_DEALTYPE_SET, 
    RESULTS_PLAYER_SET, 
    RESUTLTS_WHISTLERS_SET, 
    RESUTLTS_WHISTLERS_RESET, 
    RESULTS_CONTRACT_SET,
    RESULTS_TRICKS_SET } from '../constants/ModalNames'

export function setResults(name, value) {
    switch (name) {
        case 'dealType':
            return {
                type: RESULTS_DEALTYPE_SET,
                value: value
        }
        case 'player':
            return {
                type: RESULTS_PLAYER_SET,
                value: value
            }
        case 'contract':
            return {
                type: RESULTS_CONTRACT_SET,
                value: value
            }
    }
}

export function setResultsOnIdx(name, idx, value) {
    switch (name) {
        case 'whistlers':
            return {
                type: RESUTLTS_WHISTLERS_SET,
                idx: idx,
                value: value
            }
            case 'tricks':
                return {
                    type: RESULTS_TRICKS_SET,
                    idx: idx,
                    value: value
                }
    }
}

export function resetValue(name) {
    switch (name) {
        case 'whistlers':
            return {
                type: RESUTLTS_WHISTLERS_RESET
            }
    }
}