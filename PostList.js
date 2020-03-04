import React from 'react'
import { ScrollView, Text } from 'react-native'

import useFetch from './useFetch'
import Card from './Card'
import Title from './Title'

function PostList() {
  const posts = useFetch('/posts')

  return (
    <ScrollView>
      {posts.map(post => (
        <Card key={post.id}>
          <Title>{post.title}</Title>
          <Text>{post.body}</Text>
        </Card>
      ))}
    </ScrollView>
  )
}

export default PostList
