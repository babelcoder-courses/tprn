/**
 * @format
 */

import { AppRegistry } from 'react-native'
import axios from 'axios'

import App from './App'
import { name as appName } from './app.json'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

AppRegistry.registerComponent(appName, () => App)
