import {RESULTS_DEALTYPE_SET, RESULTS_PLAYER_SET} from '../constants/ModalNames'

export default function setResults(name, value) {
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
    }
}