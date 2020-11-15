import * as C from '../constants/Score'

export function scoreAddOnIdxs(name, idxs, delta) { // прибавление к i,j элементу; idxs - пара
    switch (name) {
        case 'whists':
            return {
                type: C.SCORE_WHISTS_ADD_ON_IDXs,
                idx: idxs, 
                delta: delta
            }
    }
}

export function scoreAddOnIdx(name, idx, delta) { // прибавление(м.б покомпонентное) к i-му элементу
    switch (name) {
        case 'pool':
            return {
                type:  C.SCORE_POOL_ADD_ON_IDX,
                idx: idx,
                delta: delta
            }
        case 'mountain':
            return {
                type: C.SCORE_MOUNTAIN_ADD_ON_IDX,
                idx: idx, 
                delta: delta
            }
        case 'whists':
            return {
                type: C.SCORE_WHISTS_ADD_ON_IDX,  // expects scalar as idx
                idx: idx, 
                delta: delta
            }
    }
}

export function scoreAdd(name, delta) {  // покомпонентное прибавление
    switch (name) {
        case 'pool':
            return {
                type:  C.SCORE_POOL_ADD,
                delta: delta
            }
        case 'mountain':
            return {
                type: C.SCORE_MOUNTAIN_ADD,
                delta: delta
            }
        case 'whists':
            return {
                type: C.SCORE_WHISTS_ADD,
                delta: delta
            }
    }
}