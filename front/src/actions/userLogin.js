import {USER_LOGGED, USER_LOGGEDOUT} from '../constants/ModalNames'
import { ApiClient } from '../services/ApiClient'


export function logUser(username, password) {
    return async (dispatch) => {
        try {
            
            const response = await ApiClient(
                "token/",
                {
                    method : "POST",
                    headers : {
                        "Content-Type": "Application/json",
                    },
                    body: JSON.stringify({username, password})
                },
                false
            )()
            console.log(response)
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
    window.localStorage.setItem("refresh", "")
    window.localStorage.setItem("access", "")
    return {
        type: USER_LOGGEDOUT
    }
}