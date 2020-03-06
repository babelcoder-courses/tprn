import React from 'react'
import styled from 'styled-components/native'

import NumberButton from './NumberButton'
import OperatorButton from './OperatorButton'

const Container = styled.View`
  flex-flow: row wrap;
`

export default function NumPad({ changeResult }) {
  return (
    <Container>
      <NumberButton>1</NumberButton>
      <NumberButton>2</NumberButton>
      <NumberButton>3</NumberButton>
      <NumberButton>4</NumberButton>
      <NumberButton>5</NumberButton>
      <NumberButton>6</NumberButton>
      <NumberButton>7</NumberButton>
      <NumberButton>8</NumberButton>
      <NumberButton>9</NumberButton>
      <NumberButton>0</NumberButton>
      <OperatorButton>+</OperatorButton>
      <OperatorButton>-</OperatorButton>
      <OperatorButton>x</OperatorButton>
      <OperatorButton>%</OperatorButton>
      <OperatorButton>=</OperatorButton>
      <OperatorButton>C</OperatorButton>
    </Container>
  )
}
