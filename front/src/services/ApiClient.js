import { logOutUser } from '../actions/userLogin'
const baseUrl = 'http://localhost:8000/api/'

export const ApiClientAuth = (url, init) => {
  const token = window.localStorage.getItem('auth')
  let headers
  ({ headers = {} } = init || {headers: {}})

  if (token) {
    (headers)['Authorization'] = `Bearer ${token}`
  }
  return fetch(`${baseUrl}${url}`, { ...init, headers })
}