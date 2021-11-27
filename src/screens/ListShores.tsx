import React from 'react'
import { StyleSheet, Text, View,Button } from 'react-native'

const ListShores = ({navigation}) => {
    return (
        <View>
            <Text>Hola</Text>
            <Button
            title="Regresar"
            onPress={() => navigation.goBack()}
             />
        </View>
    )
}

export default ListShores

const styles = StyleSheet.create({
    
})
