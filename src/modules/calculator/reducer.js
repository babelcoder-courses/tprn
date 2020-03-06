import { CALCULATE_RESULT, APPEND_INPUT, CLEAR_RESULT } from './actions'

const initialState = {
  result: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CALCULATE_RESULT:
      return { ...state, result: eval(state.result) }
    case APPEND_INPUT:
      return { ...state, result: state.result + action.payload }
    case CLEAR_RESULT:
      return initialState
    default:
      return state
  }
}
