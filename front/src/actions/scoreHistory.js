import { SCORE_HISTORY_PUSH} from '../constants/Score'

export function historyPush(state) {
    return {
        type: SCORE_HISTORY_PUSH,
        state: state
    }
}