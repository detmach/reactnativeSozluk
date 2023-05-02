import App from './App'
import { AppRegistry } from 'react-native'
const appName = 'TDK'

AppRegistry.registerComponent(appName, () => App)
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root')
})
