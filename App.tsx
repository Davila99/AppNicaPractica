

import React from 'react';
import HomeNica from './src/screens/HomeNica';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListShores from './src/screens/ListShores';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Login" component={HomeNica}/>
      </Stack.Navigator>
      {/* <HomeNica /> */}
    </NavigationContainer>


  );
}
