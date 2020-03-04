import React from 'react'
import { ScrollView, Text } from 'react-native'

import withFetch from './withFetch'
import Card from './Card'
import Title from './Title'

function UserList({ data }) {
  return (
    <ScrollView>
      {data.map(user => (
        <Card key={user.id}>
          <Title>{user.username}</Title>
          <Text>{user.name}</Text>
        </Card>
      ))}
    </ScrollView>
  )
}

export default withFetch('/users')(UserList)
