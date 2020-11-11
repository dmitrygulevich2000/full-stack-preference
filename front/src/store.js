import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'

export default function initStore() {
  const store = {
    modal: {
      modalName: ''
    },
    userLogin: {
      userLogin: ''
    }
  }
  
  return createStore(reducers, store, composeWithDevTools(applyMiddleware(thunk)))
}