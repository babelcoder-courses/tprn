import React, { useState } from 'react'
import styled from 'styled-components/native'

import Header from './Header'
import Content from './Content'

const Container = styled.SafeAreaView`
  background-color: #6c5ce7;
  flex: 1;
`
export default function App() {
  const [screen, setScreen] = useState('posts')

  return (
    <Container>
      <Header onChangeMenu={setScreen} />
      <Content screen={screen} />
    </Container>
  )
}
