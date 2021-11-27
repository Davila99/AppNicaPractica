import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'




const HomeNica = ({ navigation }) => {

    const [user, setUser] = useState('')

    const [password, setPassword] = useState('')

    const validaUser = () => {
        if (user==='eliseo' && password==='1234') {
            navigation.navigate('Tareas')
        }
        else{
            alert('Contraseña Incorrecta')
        }
    }
    

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Usuario</Text>
            <TextInput
                style={styles.inputs}
                placeholder={'Ingrese su gmail'}
                onChangeText={setUser}
            />
            <Text style={styles.text}>Contraseña</Text>
            <TextInput
                style={styles.inputs}
                placeholder={'Ingrese su contraseña'}
                onChangeText={setPassword}
                

            />
            <View style={styles.button}>
                <Button
                    title="Iniciar"
                    onPress={validaUser}
                />
            </View>
            


        </View>
    )
}

export default HomeNica

const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445'

    },
    text: {

        fontSize: 34,
        color: '#034C50',

    },
    button: {
        color: '#C4C4C4',
        marginTop: 50
    },
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:'50%'
    }

})
