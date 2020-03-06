import { combineReducers } from 'redux'

import articles from './articles/reducer'
import users from './users/reducer'
import comments from './comments/reducer'

export default combineReducers({
  articles,
  users,
  comments,
})
