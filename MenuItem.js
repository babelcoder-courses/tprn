import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const StyledMenuItem = styled.TouchableOpacity`
  font-size: 15px;
  font-weight: bold;
  margin-horizontal: 30px;
`

export default function MenuItem({ title, onPress }) {
  return (
    <StyledMenuItem onPress={onPress}>
      <Text>{title}</Text>
    </StyledMenuItem>
  )
}
