import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNica from '../screens/HomeNica';
import ListShores from '../screens/ListShores';
import Liquidacion from '../screens/Liquidacion';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={HomeNica} />
                <Stack.Screen name="Tareas" component={ListShores} />
                <Stack.Screen name="Liquidacion" component={Liquidacion} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator


