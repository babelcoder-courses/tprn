import React from 'react'
import { Text } from 'react-native'

import ListView from './ListView'
import useFetch from './useFetch'
import Card from './Card'
import Title from './Title'

function PostList() {
  const posts = useFetch('/posts')

  return (
    <ListView url="/posts">
      {post => (
        <Card key={post.id}>
          <Title>{post.title}</Title>
          <Text>{post.body}</Text>
        </Card>
      )}
    </ListView>
  )
}

export default PostList
