import React from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'

const ForgotPasswordButton = ({onPress, text}) => {
    return (
        <Pressable onPress={onPress}  style={styles.container}>
            <Text style={styles.text}>
            {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        paddingVertical: '3%',
        marginBottom: '4%',
    },

    text: {
        textAlign: 'right',
        color: '#00A98F',
        fontWeight: '500',
        fontSize: 15,
    }

});

export default ForgotPasswordButton