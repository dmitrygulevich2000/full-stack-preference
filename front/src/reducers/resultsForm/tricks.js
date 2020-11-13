import { RESULTS_TRICKS_SET } from '../../constants/ModalNames'

const initialState = [0, 0, 0, 0]

export default function tricks(state=initialState, action) {
    switch (action.type) {
        case RESULTS_TRICKS_SET:
            return state.map((elem, idx)=>((idx === action.idx) ? action.value : elem))
    }
    return state
}