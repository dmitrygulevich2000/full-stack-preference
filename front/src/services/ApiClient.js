export const baseUrl = 'http://localhost:8000/api/'

export const ApiClient = (url, init, with_refresh=true) => {
  const token = window.localStorage.getItem('access')
  let headers
  ({ headers = {} } = init || {headers: {}})

  if (token) {
    (headers)['Authorization'] = `Bearer ${token}`
  }
  return async () => {
    const response = await fetch(`${baseUrl}${url}`, { ...init, headers })
    if (response.status !== 401 || !with_refresh) {
      return response
    }
    console.log("refresh<--->")
    const refresh = window.localStorage.getItem('refresh')
    
    const refresh_response = await ApiClient("token/refresh/",
      {
        method : "POST",
        headers : {
            "Content-Type": "Application/json",
        },
        body: JSON.stringify({refresh})
      },
      with_refresh = false
    )()
    if (refresh_response.status == 401) {
      return response
    }

    const {access} = await refresh_response.json()
    window.localStorage.setItem("access", access)
    return await ApiClient(url, init, false)()
  }
}
