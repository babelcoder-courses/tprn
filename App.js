import React, { useState } from 'react'
import { Button } from 'react-native'
import styled from 'styled-components/native'

import ThemeContext, { theme } from './theme.js'
import Header from './Header'
import Content from './Content'

const Container = styled.SafeAreaView`
  background-color: #6c5ce7;
  flex: 1;
`
export default function App() {
  const [screen, setScreen] = useState('posts')
  const [currentTheme, setCurrentTheme] = useState(theme.light)

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === theme.light ? theme.dark : theme.light)
  }

  return (
    <ThemeContext.Provider value={currentTheme}>
      <Container>
        <Button title="Toggle Theme" onPress={toggleTheme} />
        <Header onChangeMenu={setScreen} />
        <Content screen={screen} />
      </Container>
    </ThemeContext.Provider>
  )
}
