const CALCULATE_RESULT = 'app/calculator/CALCULATE_RESULT'
const APPEND_INPUT = 'app/calculator/APPEND_INPUT'
const CLEAR_RESULT = 'app/calculator/CLEAR_RESULT'

const SYMBOLS = {
  x: '*',
  '%': '/',
}

function calculateResult() {
  return {
    type: CALCULATE_RESULT,
  }
}

function appendInput(input) {
  if (input === '=') return calculateResult()
  if (input === 'C') return clearResult()

  return {
    type: APPEND_INPUT,
    payload: input in SYMBOLS ? SYMBOLS[input] : input,
  }
}

function clearResult() {
  return {
    type: CLEAR_RESULT,
  }
}

export {
  CALCULATE_RESULT,
  APPEND_INPUT,
  CLEAR_RESULT,
  calculateResult,
  appendInput,
  clearResult,
}
