import { emit } from 'process'
import { useReducer } from 'react'
import {baseUrl} from '../services/ApiClient'
import {logUser} from '../actions/userLogin'

export function register(username, email, password) {
    const req_body = JSON.stringify({username, email, password})
    const req_headers = {
        "Content-Type": "Application/json",
    }
    console.log(req_body)
    console.log(req_headers)
    return async (dispatch) => {
        try {
            const response = await fetch(baseUrl + 'users/', {method: 'POST', headers: req_headers, body: req_body})
            response.text().then((val)=>console.log('response body: ', val))
            dispatch(logUser(username, password))
        } catch(err) {
            console.log(err)
        }
    }
}