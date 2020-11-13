import { RESULTS_CONTRACT_SET } from '../../constants/ModalNames'

const initialState = ''

export default function contract(state=initialState, action) {
    switch (action.type) {
        case RESULTS_CONTRACT_SET:
            return action.value
    }
    return state
}