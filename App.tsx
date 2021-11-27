

import React from 'react';
import HomeNica from './src/screens/HomeNica';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListShores from './src/screens/ListShores';
import Liquidacion from './src/screens/Liquidacion';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={HomeNica}/>
      <Stack.Screen name="Tareas" component={ListShores} />
      <Stack.Screen name="Liquidacion" component={Liquidacion}/>
      </Stack.Navigator> 
  
    </NavigationContainer>


  );
}
