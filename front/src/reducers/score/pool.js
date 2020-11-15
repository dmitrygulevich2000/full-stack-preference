import {SCORE_POOL_ADD_ON_IDX, SCORE_POOL_ADD} from '../../constants/Score'

const initialState = [0, 0, 0, 0]

export default function pool(state=initialState, action) {
    switch (action.type) {
        case SCORE_POOL_ADD_ON_IDX:
            return state.map((elem, idx)=>((idx === action.idx) ? elem + action.delta : elem))
        case SCORE_POOL_ADD:
            return state.map((elem, idx)=>(elem + action.delta[idx]))
    }
    return initialState
}