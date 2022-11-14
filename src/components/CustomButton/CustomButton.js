import React from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'

const CustomButton = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress}  style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        marginVertical: 20,
        borderWidth: 1,
        borderRadius: 13,
        padding: 20,
        backgroundColor: '#00A98F',
        borderColor: '#00A98F',
    },

    text: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '500',
        fontSize: 16,
    }

});

export default CustomButton