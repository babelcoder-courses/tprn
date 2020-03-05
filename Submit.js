import React, { useContext } from 'react'
import { Button } from 'react-native'

import { FormContext } from './Form'

export default function Submit({ children }) {
  const form = useContext(FormContext)

  return <Button title={children} onPress={form.handleSubmit} />
}
