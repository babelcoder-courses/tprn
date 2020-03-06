import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import configureStore from '../store/configureStore'
import Articles from 'modules/articles/components/Articles'
import Users from 'modules/users/components/Users'
import Comments from 'modules/comments/components/Comments'

const store = configureStore()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Articles" component={Articles}></Tab.Screen>
          <Tab.Screen name="Users" component={Users}></Tab.Screen>
          <Tab.Screen name="Comments" component={Comments}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
