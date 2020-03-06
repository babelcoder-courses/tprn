import axios from 'axios'

const LOAD_COMMENTS_REQUEST = 'app/articles/LOAD_COMMENTS_REQUEST'
const LOAD_COMMENTS_SUCCESS = 'app/articles/LOAD_COMMENTS_SUCCESS'
const LOAD_COMMENTS_FAILURE = 'app/articles/LOAD_COMMENTS_FAILURE'

function loadComments() {
  return async dispatch => {
    try {
      dispatch({ type: LOAD_COMMENTS_REQUEST })
      const res = await axios.get('/comments')

      dispatch({ type: LOAD_COMMENTS_SUCCESS, payload: res.data })
    } catch (ex) {
      dispatch({ type: LOAD_COMMENTS_FAILURE })
    }
  }
}

export {
  LOAD_COMMENTS_REQUEST,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_FAILURE,
  loadComments,
}
