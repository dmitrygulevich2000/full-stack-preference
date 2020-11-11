import {USER_LOGGED, USER_LOGGEDOUT} from '../constants/ModalNames'


export function logUser(userLogin) {
    return {
        type: USER_LOGGED,
        userLogin
    }
}

export function logOutUser() {
    return {
        type: USER_LOGGEDOUT
    }
}