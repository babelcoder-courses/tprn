import React from 'react'
import { ScrollView, Text } from 'react-native'

import useFetch from './useFetch'
import Card from './Card'
import Title from './Title'

function CommentList() {
  const comments = useFetch('/comments')

  return (
    <ScrollView>
      {comments.map(comment => (
        <Card key={comment.id}>
          <Title>{comment.name}</Title>
          <Text>{comment.body}</Text>
        </Card>
      ))}
    </ScrollView>
  )
}

export default CommentList
