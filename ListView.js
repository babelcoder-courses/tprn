import React from 'react'
import { FlatList, RefreshControl } from 'react-native'

import useFetch from './useFetch'

export default function ListView({ url, children }) {
  const [data, refreshing, onRefresh] = useFetch(url)

  return (
    <FlatList
      data={data}
      keyExtractor={item => `${item.id}`}
      renderItem={({ item }) => children(item)}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  )
}
