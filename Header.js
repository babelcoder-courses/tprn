import React from 'react'
import styled from 'styled-components/native'

import Menu from './Menu'
import MenuItem from './MenuItem'

const Container = styled.View`
  height: 50px;
`

export default function Header({ onChangeMenu }) {
  const changeMenu = screen => () => onChangeMenu(screen)

  return (
    <Container>
      <Menu>
        <MenuItem title="posts" onPress={changeMenu('posts')} />
        <MenuItem title="users" onPress={changeMenu('users')} />
        <MenuItem title="comments" onPress={changeMenu('comments')} />
      </Menu>
    </Container>
  )
}
