import React, { useState, useEffect } from 'react'
import { Animated } from 'react-native'
import styled from 'styled-components/native'

const Card = styled.View`
  background-color: #fab1a0;
  padding: 30px;
  margin: 10px;
  border-radius: 20px;
  shadow-color: #000;
  shadow-opacity: 1;
  shadow-radius: 5px;
  elevation: 5;
`

export default ({ children }) => {
  const [opacityAnimation] = useState(new Animated.Value(0))

  useEffect(() => {
    Animated.timing(opacityAnimation, {
      toValue: 1,
      duration: 1000,
    }).start()
  }, [opacityAnimation])

  return (
    <Animated.View style={{ opacity: opacityAnimation }}>
      <Card>{children}</Card>
    </Animated.View>
  )
}
