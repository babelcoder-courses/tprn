import React from 'react'
import { Provider } from 'react-redux'

import configureStore from '../store/configureStore'
import Calculator from './modules/calculator/components/Calculator'

const store = configureStore()

export default function App() {
  return (
    <Provider store={store}>
      <Calculator />
    </Provider>
  )
}
