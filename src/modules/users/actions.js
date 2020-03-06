import axios from 'axios'

const LOAD_USERS_REQUEST = 'app/articles/LOAD_USERS_REQUEST'
const LOAD_USERS_SUCCESS = 'app/articles/LOAD_USERS_SUCCESS'
const LOAD_USERS_FAILURE = 'app/articles/LOAD_USERS_FAILURE'

function loadUsers() {
  return async dispatch => {
    try {
      dispatch({ type: LOAD_USERS_REQUEST })
      const res = await axios.get('/users')

      dispatch({ type: LOAD_USERS_SUCCESS, payload: res.data })
    } catch (ex) {
      dispatch({ type: LOAD_USERS_FAILURE })
    }
  }
}

export { LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE, loadUsers }
