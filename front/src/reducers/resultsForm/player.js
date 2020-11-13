import { RESULTS_PLAYER_SET } from '../../constants/ModalNames'

const initialState = ''

export default function player(state=initialState, action) {
    switch (action.type) {
        case RESULTS_PLAYER_SET:
            return action.value
    }
    return state
}