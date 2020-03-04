import React from 'react'

import PostList from './PostList'
import UserList from './UserList'
import CommentList from './CommentList'

export default function Content({ screen }) {
  switch (screen) {
    case 'posts':
      return <PostList />
    case 'users':
      return <UserList />
    case 'comments':
      return <CommentList />
  }
}
