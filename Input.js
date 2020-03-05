import React, { useContext } from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

import { FormContext } from './Form'

const StyledInput = styled.TextInput`
  border: 1px solid ${({ hasError }) => (hasError ? 'red' : '#000')};
  padding: 10px;
  margin-bottom: 20px;
`

function Input({ name }) {
  const form = useContext(FormContext)

  return (
    <>
      <StyledInput
        onChangeText={form.handleChange(name)}
        onBlur={form.handleBlur(name)}
        value={form.values[name]}
      />
      {form.errors[name] && form.touched[name] && (
        <Text>{form.errors[name]}</Text>
      )}
    </>
  )
}

export default Input
