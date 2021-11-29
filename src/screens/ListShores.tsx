import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'



const ListShores = ({ navigation }) => {

    const [tarea, setTarea] = useState<string>('')
    const [tareas, setTareas] = useState<string[]>([])

    const crearTarea = () => {
        setTareas([...tareas, tarea])
    }

    const eliminarTarea = (id: number) => {
        tareas.splice(id,1)
        getTareas()
    }
    const getTareas = () =>{
        setTareas([...tareas])
    }
    
    useEffect(getTareas, [])
    
    return (
        <View style={styles.containerBase}>

            <View style={styles.container}>
                <TextInput
                    style={styles.inputs}
                    onChangeText={setTarea}
                />
                <Button
                    title="Agregar"
                    onPress={crearTarea}
                />
            </View>
            {
                tareas.map((lista,index) => (
                    <View style={styles.container} key={index}>
                        <Text style={styles.text} >{lista}</Text>
                        <Button
                            color="#bd0404"
                            title="ELiminar"
                            onPress={() => eliminarTarea(index)}
                        />
                    </View>
                ))
            }
        </View>
    )
}

export default ListShores

const styles = StyleSheet.create({

    container: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
        marginLeft: 10,
        borderWidth: 3,
        borderColor: '#fffff',
        marginTop: 10,

    },
    text: {
        fontSize: 24,
        color: '#ffffff'
    },
    containerBase: {
        flex: 1,
        backgroundColor: '#0b3054',

    },
    inputs: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 10,
        fontSize: 22,
        color: '#034C50',
    }

})
