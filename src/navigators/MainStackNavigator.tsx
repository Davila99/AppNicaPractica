import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNica from '../screens/HomeNica';
import ListShores from '../screens/ListShores';
import Liquidacion from '../screens/Liquidacion';
import NicaAtributo from '../screens/NicaAtributo';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="NicaAtributo">
                <Stack.Screen name="Login" component={HomeNica} />
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
                <Stack.Screen name="Liquidacion" component={Liquidacion} />
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


