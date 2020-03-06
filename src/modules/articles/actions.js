import axios from 'axios'

const LOAD_ARTICLES_REQUEST = 'app/articles/LOAD_ARTICLES_REQUEST'
const LOAD_ARTICLES_SUCCESS = 'app/articles/LOAD_ARTICLES_SUCCESS'
const LOAD_ARTICLES_FAILURE = 'app/articles/LOAD_ARTICLES_FAILURE'

function loadArticles() {
  return async dispatch => {
    try {
      dispatch({ type: LOAD_ARTICLES_REQUEST })
      const res = await axios.get('/posts')

      dispatch({ type: LOAD_ARTICLES_SUCCESS, payload: res.data })
    } catch (ex) {
      dispatch({ type: LOAD_ARTICLES_FAILURE, payload: ex })
    }
  }
}

export {
  LOAD_ARTICLES_REQUEST,
  LOAD_ARTICLES_SUCCESS,
  LOAD_ARTICLES_FAILURE,
  loadArticles,
}
