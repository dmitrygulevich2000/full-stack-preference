import {USER_LOGGED, USER_LOGGEDOUT} from '../constants/ModalNames'
import { ApiClientAuth } from '../services/ApiClient'


export function logUser(username, password) {
    // console.log(login , password)
    return async (dispatch) => {
        try {
            const response = await ApiClientAuth(
                "token/",
                {
                    method : "POST",
                    headers : {
                        "Content-Type": "Application/json",
                    },
                    body: JSON.stringify({username, password})
                }
            );
            if (!response.ok) {
                return
            }
            const {access, refresh} = await response.json()
            window.localStorage.setItem("refresh", refresh)
            window.localStorage.setItem("access", access)
            dispatch(setLocalLogin(username))
        } catch(err) {
            console.log(err)
        }
    }
}

export function setLocalLogin(userLogin) {
    return {
        userLogin: userLogin,
        type: USER_LOGGED
    }
}

export function logOutUser() {
    return {
        type: USER_LOGGEDOUT
    }
}