import { LOAD_ARTICLES_SUCCESS } from './actions'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES_SUCCESS:
      return action.payload
    default:
      return state
  }
}
