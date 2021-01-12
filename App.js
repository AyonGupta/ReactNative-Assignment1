/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow strict-local
*/
import 'react-native-gesture-handler';
import React from 'react';
import SplashPage from './View/SplashPage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './View/LoginPage'
import Dashboard from './View/Dashboard'
import AboutUs from "./View/AboutUs";

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Splash'>
    <Stack.Screen name='Splash'
    component={SplashPage}
    options = {{
      headerShown : false                
    }}/>
    <Stack.Screen name='Login' 
    component={LoginPage}
    options = {{
      headerShown : false
    }}/>
    
    <Stack.Screen name='Dashboard'
    component={Dashboard}
    options = {{
      headerShown : false
    }}/>
    <Stack.Screen name='AboutUs'
    component={AboutUs}
    options = {{
      headerShown : true
    }}/>

    </Stack.Navigator>
    </NavigationContainer>
    );
  }
  
  export default App;
  