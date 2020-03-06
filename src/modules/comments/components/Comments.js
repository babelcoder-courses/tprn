import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text } from 'react-native'

import * as actions from '../actions'

export default function Comments() {
  const dispatch = useDispatch()
  const comments = useSelector(state => state.comments)

  useEffect(() => {
    const action = actions.loadComments()

    dispatch(action)
  }, [dispatch])

  return (
    <View>
      {comments.map(comment => (
        <Text key={comment.id}>{comment.name}</Text>
      ))}
    </View>
  )
}
