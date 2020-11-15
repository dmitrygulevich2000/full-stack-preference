import {SCORE_MOUNTAIN_ADD_ON_IDX, SCORE_MOUNTAIN_ADD} from '../../constants/Score'

const initialState = [0, 0, 0, 0]

export default function mountain(state=initialState, action) {
    switch (action.type) {
        case SCORE_MOUNTAIN_ADD_ON_IDX:
            return state.map((elem, idx)=>((idx === action.idx) ? elem + action.delta : elem))
        case SCORE_MOUNTAIN_ADD:
            return state.map((elem, idx)=>(elem + action.delta[idx]))
    }
    return initialState
}