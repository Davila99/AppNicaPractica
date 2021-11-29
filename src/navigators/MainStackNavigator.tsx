import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNica from '../screens/HomeNica';
import ListShores from '../screens/ListShores';
import NicaAtributo from '../screens/NicaAtributo';
import ListKeys from '../screens/ListKeys';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="ListKeys">
                <Stack.Screen name="Login" component={HomeNica} />
                <Stack.Screen name="ListKeys" component={ListKeys} />
                <Stack.Screen name="Tareas"component={ListShores} 
                 options={{
                    title: 'Lista de Tareas',
                    headerStyle: {
                      backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                  }}
                 />
                <Stack.Screen name="NicaAtributo" component={NicaAtributo}
                options={{
                    title: 'Ventas NicaAtributo',
                    headerStyle: {
                      backgroundColor: '#430ac7',
                      
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      
                    },
                  }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator


