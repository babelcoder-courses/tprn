import React from 'react'

import Button from './Button'

export default function OperatorButton({ children, changeResult }) {
  return <Button onPress={changeResult}>{children}</Button>
}
