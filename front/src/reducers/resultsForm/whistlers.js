import { RESUTLTS_WHISTLERS_SET, RESUTLTS_WHISTLERS_RESET } from '../../constants/ModalNames'

const initialState = ['blank', 'blank']

export default function whistlers(state=initialState, action) {
    switch (action.type) {
        case RESUTLTS_WHISTLERS_SET:
            return state.map((elem, idx)=>((idx === action.idx) ? action.value : elem))
        case RESUTLTS_WHISTLERS_RESET:
            return initialState
    }
    return state
}