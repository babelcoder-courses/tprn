import React, { useState } from 'react'
import { Button } from 'react-native'
import styled from 'styled-components/native'

import I18nContext, { i18n } from './i18n.js'
import Header from './Header'
import Content from './Content'

const Container = styled.SafeAreaView`
  background-color: #6c5ce7;
  flex: 1;
`
export default function App() {
  const [screen, setScreen] = useState('posts')
  const [currentLang, setCurrentLang] = useState(i18n.en)

  const changeLang = lang => () => setCurrentLang(i18n[lang])

  return (
    <I18nContext.Provider value={currentLang}>
      <Container>
        <Button title="EN" onPress={changeLang('en')} />
        <Button title="TH" onPress={changeLang('th')} />
        <Header onChangeMenu={setScreen} />
        <Content screen={screen} />
      </Container>
    </I18nContext.Provider>
  )
}
