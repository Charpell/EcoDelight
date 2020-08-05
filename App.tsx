import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import {store, persistor} from './store'

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Navigator from './navigation';
import { useFonts } from 'expo-font';
console.disableYellowBox = true;

export default function App() {
  let [fontsLoaded] = useFonts({
    "Raleway-Regular": require('./assets/fonts/Raleway-Regular.ttf'),
    "Raleway-SemiBold": require('./assets/fonts/Raleway-SemiBold.ttf'),
    "Raleway": require('./assets/fonts/Raleway-Black.ttf'),
    "Raleway-Light": require('./assets/fonts/Raleway-Light.ttf'),
    "Raleway-Bold": require('./assets/fonts/Raleway-Bold.ttf'),
    "Raleway-undefined": require('./assets/fonts/Raleway-Bold.ttf')
  })

  if (!fontsLoaded) {
    return null
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  );
}

