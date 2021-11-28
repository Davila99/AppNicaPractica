import React, { useState,useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import FormInputs from '../components/FormInputs'



const NicaAtributo = () => {

    const [producto, setProducto] = useState<string>('')
    const [cantidad, setCantidad] = useState<string>('')
    const [precio, setPrecio] = useState<string>('')
    const [descuento, setDescuento] = useState<string>('')
    const [resultado, setResultado] = useState<number>(0)

    const calcularVenta = () => {

        let calculo = parseFloat(cantidad) * parseFloat(precio)
        let caldescueto = calculo *parseFloat(descuento) /100
        let result = calculo - caldescueto
        setResultado(result)

    }

    return (
        <View style={styles.container}>
           <FormInputs
           title={"Nombre Producto"}
           placeholder={"Producto"}
           onChangeText={setProducto}
           />
           <FormInputs
           title={"Cantidad"}
           placeholder={"Cantidad"}
           onChangeText={setCantidad}
           />
           <FormInputs
           title={"Precio del Producto"}
           placeholder={"$"}
           onChangeText={setPrecio}
           />
           <FormInputs
           title={"Descuento"}
           placeholder={"%"}
           onChangeText={setDescuento}
           />
          
           
            <TouchableOpacity
                onPress={calcularVenta}
                style={styles.botonReset}
            >
                <Text style={styles.textbotonReset}>Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.text}>La Compra de: {producto} es de  {resultado}</Text>
            
        </View>
    )
}

export default NicaAtributo

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

        fontSize: 24,
        color: '#034C50',

    },
    container: {
        flex: 1,
        width: '95%',
        marginLeft: 10
    },
    botonReset: {
        backgroundColor: '#00C1AC',
        borderRadius: 8,
        width: '100%',
        paddingVertical: 7,
        marginTop: 10,
    },
    textbotonReset: {
        color: '#00514E',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    }
})
