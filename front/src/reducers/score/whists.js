import {SCORE_WHISTS_ADD_ON_IDXs, SCORE_WHISTS_ADD_ON_IDX, SCORE_WHISTS_ADD} from '../../constants/Score'

// state[i][j] содержит висты i-го игрока на j-го игрока
const initialState = [[0, 0, 0, 0],
                      [0, 0, 0, 0],
                      [0, 0, 0, 0],
                      [0, 0, 0, 0]]

export default function whists(state=initialState, action) {
    switch (action.type) {
        case SCORE_WHISTS_ADD_ON_IDXs: // прибавляем к i,j-му элементу
            return state.map((arr, idx0)=>(  // нужно проитерироваться по квадратному массиву
                    (idx0 === action.idx[0]) ? 
                        arr.map((elem, idx1)=>((idx1 === action.idx[1]) ? elem + action.delta : elem)) :
                        arr)
                )
        case SCORE_WHISTS_ADD_ON_IDX:  // прибавляем к срочке с номером action.idx покомпонентно
            return state.map((arr, idx0)=>(
                (idx0 === action.idx) ? 
                    arr.map((elem, idx1)=>(elem + action.delta[idx1])) :
                    arr)
            )
        case SCORE_WHISTS_ADD:  // прибавляем ко всей матрице покомпонентно
            return state.map((arr, idx0)=>(
                    arr.map((elem, idx1)=>(elem + action.delta[idx0][idx1])))
                )
    }
    return initialState
}