import React from 'react'
import { View, Text , TextInput, StyleSheet} from 'react-native'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput
            value= {value}
            onChangeText={setValue}
            placeholder= {placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
        backgroundColor: '#f2f2f2',
        width: '90%',

        borderColor: '#f2f2f2',
        borderWidth: 1,
        borderRadius: 13,
        marginVertical: 5,
    },
    input: {},

})

export default CustomInput