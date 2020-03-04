import React from 'react'
import { Text } from 'react-native'

import ListView from './ListView'
import Card from './Card'
import Title from './Title'

function CommentList() {
  return (
    <ListView url="/comments">
      {comment => (
        <Card key={comment.id}>
          <Title>{comment.name}</Title>
          <Text>{comment.body}</Text>
        </Card>
      )}
    </ListView>
  )
}

export default CommentList
