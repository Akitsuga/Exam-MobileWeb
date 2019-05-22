import  { Navigation } from 'react-native-navigation'
import { Provider } from 'react-redux'

import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import configureStore from './src/store/configureStore'

const store = configureStore()

// Register Screens
Navigation.registerComponent("jc8reactnative.AuthScreen", () => AuthScreen)

Navigation.registerComponent(
  "jc8reactnative.SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
)

Navigation.registerComponent(
  "jc8reactnative.FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
)

// Start Screens
Navigation.startSingleScreenApp({
  screen: {
    screen: 'jc8reactnative.AuthScreen',
    title: 'Login'
  }
})