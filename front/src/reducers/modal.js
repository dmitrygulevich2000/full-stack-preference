import {MODAL_OPEN, MODAL_CLOSE} from '../constants/ModalNames'


const initialState = {
    modalName: ''
}


export default function modal(state = initialState, action) {
    switch(action.type) {
      case MODAL_OPEN:
        return {
          modalName: action.modalName
        }
      case MODAL_CLOSE:
        return {
          modalName: ''
        }
    }
    return state
  }