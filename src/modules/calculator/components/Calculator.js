import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'

import ResultBar from './ResultBar'
import NumPad from './NumPad'

export default function Calculator() {
  return (
    <SafeAreaView>
      <ResultBar />
      <NumPad />
    </SafeAreaView>
  )
}
