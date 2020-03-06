import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text } from 'react-native'

import * as actions from '../actions'

export default function Articles() {
  const dispatch = useDispatch()
  const articles = useSelector(state => state.articles)

  useEffect(() => {
    const action = actions.loadArticles()

    dispatch(action)
  }, [dispatch])

  return (
    <View>
      {articles.map(article => (
        <Text key={article.id}>{article.title}</Text>
      ))}
    </View>
  )
}
