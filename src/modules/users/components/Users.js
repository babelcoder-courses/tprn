import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text } from 'react-native'

import * as actions from '../actions'

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)

  useEffect(() => {
    const action = actions.loadUsers()

    dispatch(action)
  }, [dispatch])

  return (
    <View>
      {users.map(user => (
        <Text key={user.id}>{user.name}</Text>
      ))}
    </View>
  )
}
