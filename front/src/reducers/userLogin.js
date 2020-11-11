import {USER_LOGGED, USER_LOGGEDOUT} from '../constants/ModalNames'


const initialState = {
    userLogin: ''
}


export default function userLogin(state = initialState, action) {
    switch(action.type) {
      case USER_LOGGED:
        return {
          userLogin: action.userLogin
        }
      case USER_LOGGEDOUT:
        return {
          userLogin: ''
        }
    }
    return state
  }