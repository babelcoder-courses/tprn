import React from 'react'
import { ScrollView, Text } from 'react-native'

import Fetch from './Fetch'
import Card from './Card'
import Title from './Title'

function PostList() {
  return (
    <Fetch url="/posts">
      {posts => (
        <ScrollView>
          {posts.map(post => (
            <Card key={post.id}>
              <Title>{post.title}</Title>
              <Text>{post.body}</Text>
            </Card>
          ))}
        </ScrollView>
      )}
    </Fetch>
  )
}

export default PostList
