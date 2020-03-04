import React from 'react'
import { ScrollView, Text } from 'react-native'

import useFetch from './useFetch'
import Card from './Card'
import Title from './Title'

function UserList() {
  const users = useFetch('/users')

  return (
    <ScrollView>
      {users.map(user => (
        <Card key={user.id}>
          <Title>{user.username}</Title>
          <Text>{user.name}</Text>
        </Card>
      ))}
    </ScrollView>
  )
}

export default UserList
