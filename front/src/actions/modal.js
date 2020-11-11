import {MODAL_OPEN, MODAL_CLOSE} from '../constants/ModalNames'


export function openModal(modalName) {
    return {
        type: MODAL_OPEN,
        modalName
    }
}

export function closeModal() {
    return {
        type: MODAL_CLOSE
    }
}