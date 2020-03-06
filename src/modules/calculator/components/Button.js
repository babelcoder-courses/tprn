import React from 'react'
import { useDispatch } from 'react-redux'
import { Text, TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'

import * as actions from '../actions'

const Container = styled.View`
  width: 25%;
  background-color: #0984e3;
`

function Button({ children, onPress }) {
  const dispatch = useDispatch()

  const appendInput = () => dispatch(actions.appendInput(children))

  return (
    <Container>
      <TouchableWithoutFeedback onPress={appendInput}>
        <Text>{children}</Text>
      </TouchableWithoutFeedback>
    </Container>
  )
}

export default Button
