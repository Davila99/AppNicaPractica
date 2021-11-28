import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput } from 'react-native'



const NicaAtributo = () => {

    const [producto, setProducto] = useState<string>('')
    const [cantidad, setCantidad] = useState<string>('')
    const [precio, setPrecio] = useState<string>('')
    const [descuento, setDescuento] = useState<string>('')
    const [resultado, setResultado] = useState<string>('')
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ingresar Producto</Text>
            <TextInput
                style={styles.inputs}
                placeholder={'Producto'}
                onChangeText={setProducto}
            />
              <Text style={styles.text}>cantidad</Text>
            <TextInput
                style={styles.inputs}
                placeholder={'cantidad'}
                onChangeText={setCantidad}
            />
              <Text style={styles.text}>Precio producto</Text>
            <TextInput
                style={styles.inputs}
                placeholder={'20'}
                onChangeText={setPrecio}
            />
              <Text style={styles.text}>Descuento</Text>
            <TextInput
                style={styles.inputs}
                placeholder={'Descuento'}
                onChangeText={setDescuento}
            />
            <Text style={styles.text}>Resultado{resultado}</Text>
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
    flex:1,
    width: '95%',
    marginLeft: 10
    }
})