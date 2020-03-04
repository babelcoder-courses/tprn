import React from 'react'
import { ScrollView, Text } from 'react-native'

import Fetch from './Fetch'
import Card from './Card'
import Title from './Title'

function CommentList() {
  return (
    <Fetch url="/comments">
      {comments => (
        <ScrollView>
          {comments.map(comment => (
            <Card key={comment.id}>
              <Title>{comment.name}</Title>
              <Text>{comment.body}</Text>
            </Card>
          ))}
        </ScrollView>
      )}
    </Fetch>
  )
}

export default CommentList
