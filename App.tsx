import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {DefaultTheme} from '@react-navigation/native';
export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
    text: 'black',
    primary: 'blue',
  },
};
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer theme={LightTheme}>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
