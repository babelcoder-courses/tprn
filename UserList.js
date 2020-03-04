import React from 'react'
import { Text } from 'react-native'

import ListView from './ListView'
import Card from './Card'
import Title from './Title'

function UserList() {
  return (
    <ListView url="/users">
      {user => (
        <Card key={user.id}>
          <Title>{user.username}</Title>
          <Text>{user.name}</Text>
        </Card>
      )}
    </ListView>
  )
}

export default UserList
