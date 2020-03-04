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
        <MenuItem title="Posts" onPress={changeMenu('posts')} />
        <MenuItem title="Users" onPress={changeMenu('users')} />
        <MenuItem title="Comments" onPress={changeMenu('comments')} />
      </Menu>
    </Container>
  )
}
