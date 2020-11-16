import {SCORE_HISTORY_SIZE, SCORE_HISTORY_PUSH} from '../constants/Score'

const initialState = []

export default function scoreHistory(state=initialState, action) {
    switch (action.type) {
        case SCORE_HISTORY_PUSH: // новые элементы приходят в начало массива-очереди
            if (state.length < SCORE_HISTORY_SIZE) {
                return [action.state, ...state]
            } else {
                return [action.state, ...state.slice(0, -1)]
            }
    }
    return initialState
}