/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import AppNavigator from './src/navigation/AppNavigator';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';


const App = () => {


  return (
    <Provider store={store}>
    <AppNavigator/>
    </Provider>
  );
};



export default App;
