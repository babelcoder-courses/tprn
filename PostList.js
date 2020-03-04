import React from 'react'
import { ScrollView, Text } from 'react-native'

import withFetch from './withFetch'
import Card from './Card'
import Title from './Title'

function PostList({ data }) {
  return (
    <ScrollView>
      {data.map(post => (
        <Card key={post.id}>
          <Title>{post.title}</Title>
          <Text>{post.body}</Text>
        </Card>
      ))}
    </ScrollView>
  )
}

export default withFetch('/posts')(PostList)
