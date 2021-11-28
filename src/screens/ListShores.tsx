import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ListShores = ({ navigation }) => {


    const [usuarios, setUsuarios] = useState([
        {
            "id": 1,
            "name": "Leanne Graham"
        },
        {
            "id": 2,
            "name": "Ervin Howell",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
        },
    ])

    const eliminarTarea = () => {
        alert("Eliminar")
    }
    const editarTarea = () => {
        alert("Editar")
    }

    return (
        <View style={styles.containerBase}>
            {
                usuarios.map(lista => (
                    <View style={styles.container}>
                        <Text style={styles.text} key={lista.id}>{lista.name}</Text>
                        {/* <Button
                            title="Editar"
                            onPress={editarTarea}
                        /> */}
                        
                        <Button
                            color="#bd0404"
                            title="ELiminar"
                            onPress={eliminarTarea}
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
        width:'95%',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginBottom:10,
        paddingVertical:10,
        paddingHorizontal:8,
        borderRadius: 10,
        marginLeft: 10,
        borderWidth: 3,
        borderColor:'#178581',

    },
    text: {
        fontSize:24,
        color: '#05786A'
    },
    containerBase: {
        flex:1,
        backgroundColor: '#FFFFFF',

    }
   
})
