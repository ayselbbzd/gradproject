import React from 'react'
import { View, Text, StyleSheet, Pressable} from 'react-native'

const SignUpButton = ({onPress}) => {
    return (
        <Pressable onPress={onPress}  style={styles.container}>
            <Text style={styles.text}>
                {"Don't have an account?"}
                <Text style={{color: '#00A98F',}}>
                    {" Sign up"}
                </Text>
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
        textAlign: 'center',
        color: '#7D848D',
        fontWeight: '500',
        fontSize: 15,
    }

});

export default SignUpButton
