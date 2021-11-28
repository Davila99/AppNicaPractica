import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View, Button,TextInput } from 'react-native'



const ListShores = ({ navigation }) => {

    const [tarea, setTarea] = useState<string>('')
    const [listTareas, setListTareas] = useState([])

    let	tareas:	string[]=[];

    const crearTarea = () => {
        listTareas.push(tarea)
    }
  
    const getUser =() => {
        alert(listTareas)
    }
    
    const eliminarTarea = (id:number) => {
        listTareas.splice(id,1)
    }
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
                listTareas.map(lista => (
                    <View style={styles.container}>
                        <Text style={styles.text}>{lista}</Text>
                        {/* <Button
                            title="Editar"
                            onPress={editarTarea}
                        /> */}
                        
                        <Button
                            color="#bd0404"
                            title="ELiminar"
                            onPress={()=>eliminarTarea(tareas.id)}
                        />
                    </View>
                ))
            }
            <Button
            title="Ver Datos"
            onPress={getUser}
            />
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
        borderColor:'#fffff',

    },
    text: {
        fontSize:24,
        color: '#ffffff'
    },
    containerBase: {
        flex:1,
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
