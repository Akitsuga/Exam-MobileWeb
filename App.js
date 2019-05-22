import  { Navigation } from 'react-native-navigation'

import AuthScreen from './src/screens/Auth/Auth'
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'

// Register Screens
Navigation.registerComponent("jc8reactnative.AuthScreen", () => AuthScreen)
Navigation.registerComponent("jc8reactnative.SharePlaceScreen", () => SharePlaceScreen)
Navigation.registerComponent("jc8reactnative.FindPlaceScreen", () => FindPlaceScreen)

// Start Screens
Navigation.startSingleScreenApp({
  screen: {
    screen: 'jc8reactnative.AuthScreen',
    title: 'Login'
  }
})