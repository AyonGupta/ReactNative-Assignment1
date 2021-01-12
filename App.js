/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SplashPage from './View/SplashPage'
import LoginPage from './View/LoginPage'
import Dashboard from './View/Dashboard'

import {
  SafeAreaView,
  View
} from 'react-native';
const App = () => {
  return (
    
     <SplashPage></SplashPage>
    // <LoginPage></LoginPage>
    // <Dashboard></Dashboard>
  );
}

export default App;
