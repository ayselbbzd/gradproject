import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native'
import Logo from '../../../assets/images/logo_tourna.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import ForgotPasswordButton from '../../components/ForgotPasswordButton';
import SignUpButton from '../../components/SignUpButton';


const SignInScreen = () => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');

   const {height} =useWindowDimensions();

   const onSignInPressed = () => {
        console.warn("Sign in");
   }

   const onForgotPasswordPressed = () => {
           console.warn("onForgotPasswordPressed");
   }

   const onSignUpPressed = () => {
              console.warn("onSignUpPressed");
   }
   return (
        <View style={styles.root}>
           <Image
           source={Logo}
           style={[styles.logo, {height: height*0.075}]}
           resizeMode="contain"
           />
        <Text style={styles.text}>Welcome back 👋</Text>
        <Text style={styles.welcome}>{"You've been missed!"}</Text>
           <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}/>
           <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}/>

            <ForgotPasswordButton text="Forgot Password?" onPress={onForgotPasswordPressed}/>
            <CustomButton text="Sign In" onPress={onSignInPressed} />
            <SignUpButton onPress={onSignUpPressed} />



        </View>
    );
};

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '30%',
        maxWidth:100,
        maxHeight: 500,
    },
    text: {
        marginTop: '10%',
        fontSize: 30,
        fontWeight: '700',
        color: '#1B1E28',
    },
    welcome: {
        color: '#7D848D',
        marginBottom: '8%',
        marginTop: '4%',
        fontWeight: '500'
    },

    account: {
        color: '#7D848D',
        width: '50%',
        fontWeight: '500',
        fontSize: 15,
    }
});

export default SignInScreen