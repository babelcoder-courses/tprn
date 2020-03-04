import React, { useEffect } from 'react'
import { ScrollView, Text } from 'react-native'

import ThemeContext from './theme'
import useFetch from './useFetch'
import Card from './Card'
import Title from './Title'

function PostList() {
  const posts = useFetch('/posts')

  return (
    <ScrollView>
      {posts.map(post => (
        <Card key={post.id}>
          {/* <Title>{post.title}</Title> */}
          <ThemeContext.Consumer>
            {theme => (
              <Text
                style={{
                  fontSize: 30,
                  color: theme.fgColor,
                  backgroundColor: theme.bgColor,
                }}>
                {post.title}
              </Text>
            )}
          </ThemeContext.Consumer>
          <Text>{post.body}</Text>
        </Card>
      ))}
    </ScrollView>
  )
}

export default PostList
