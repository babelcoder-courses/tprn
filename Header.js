import React, { useContext } from 'react'
import styled from 'styled-components/native'

import I18nContext from './i18n'
import Menu from './Menu'
import MenuItem from './MenuItem'

const Container = styled.View`
  height: 50px;
`

export default function Header({ onChangeMenu }) {
  const {
    header: { posts, users, comments },
  } = useContext(I18nContext)

  const changeMenu = screen => () => onChangeMenu(screen)

  return (
    <Container>
      <Menu>
        <MenuItem title={posts} onPress={changeMenu('posts')} />
        <MenuItem title={users} onPress={changeMenu('users')} />
        <MenuItem title={comments} onPress={changeMenu('comments')} />
      </Menu>
    </Container>
  )
}
