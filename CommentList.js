import React from 'react'
import { ScrollView, Text } from 'react-native'

import withFetch from './withFetch'
import Card from './Card'
import Title from './Title'

function CommentList({ data }) {
  return (
    <ScrollView>
      {data.map(comment => (
        <Card key={comment.id}>
          <Title>{comment.name}</Title>
          <Text>{comment.body}</Text>
        </Card>
      ))}
    </ScrollView>
  )
}

export default withFetch('/comments')(CommentList)
