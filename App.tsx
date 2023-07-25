import React, {useEffect} from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {NavigationContainer, Theme} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {DefaultTheme} from '@react-navigation/native';
import {configNotification} from './src/helper/configNotication';
export const LightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    text: 'black',
    primary: 'blue',
  },
};
const App = () => {
  useEffect(() => {}, []);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer theme={LightTheme}>
          <AppNavigator />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
