import React from 'react'
import { useSelector } from 'react-redux'
import { Text } from 'react-native'

export default function ResultBar() {
  const result = useSelector(state => state.calculator.result)

  return <Text>{result}</Text>
}
