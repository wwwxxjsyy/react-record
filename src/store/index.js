import { combineReducers } from 'redux'
import ChatReducer from './chat/reducers'
import NumberReducer from './number/reducers'

const rootReducer = combineReducers({
  number: NumberReducer,
  chat: ChatReducer
})

export default rootReducer