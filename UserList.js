import React from 'react'
import { ScrollView, Text } from 'react-native'

import Fetch from './Fetch'
import Card from './Card'
import Title from './Title'

function UserList() {
  return (
    <Fetch url="/users">
      {users => (
        <ScrollView>
          {users.map(user => (
            <Card key={user.id}>
              <Title>{user.username}</Title>
              <Text>{user.name}</Text>
            </Card>
          ))}
        </ScrollView>
      )}
    </Fetch>
  )
}

export default UserList
