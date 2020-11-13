import { RESULTS_DEALTYPE_SET } from '../../constants/ModalNames'

const initialState = ''

export default function dealType(state=initialState, action) {
    switch (action.type) {
        case RESULTS_DEALTYPE_SET:
            return action.value
    }
    return state
}