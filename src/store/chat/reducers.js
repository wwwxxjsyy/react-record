import { SEND, DELETE } from './types'

const initialState = []
const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND:
      return [...state, action.payload]
    case DELETE:
      return state.length ? state.slice(0, state.length - 1) : []
    default:
      return state
  }
}
export default chatReducer