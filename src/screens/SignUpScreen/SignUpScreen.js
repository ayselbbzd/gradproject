import React, {useState} from 'react'
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import Logo from '../../../assets/images/logo_tourna.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import ForgotPasswordButton from '../../components/ForgotPasswordButton';
import SignUpButton from '../../components/SignUpButton';


const SignUpScreen = () => {
   const [username, setUsername] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [passwordRepeat, setPasswordRepeat] = useState('');

   const {height} =useWindowDimensions();

   const onForgotPasswordPressed = () => {
           console.warn("onForgotPasswordPressed");
   }

   const onSignUpPressed = () => {
              console.warn("onSignUpPressed");
   }

   const onRegisterPressed = () => {
                 console.warn("onRegisterPressed");
      }

   const onAccountPressed = () => {
                    console.warn("onAccountPressed");
   }

   const onTermsOfUsePressed = () => {
                     console.warn("onTermsOfUsePressed");
   }

   const onPrivacyPressed = () => {
                     console.warn("onPrivacyPressed");
   }
   return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
           <Image
           source={Logo}
           style={[styles.logo, {height: height*0.075}]}
           resizeMode="contain"
           />
        <Text style={styles.text}>Create an account</Text>
        <Text style={styles.welcome}>Create your account. It takes less than a minute.</Text>
           <CustomInput
                placeholder="Username"
                value={username}
                setValue={setUsername}/>

           <CustomInput
                 placeholder="E-mail"
                 value={email}
                 setValue={setEmail}/>

           <CustomInput
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry={true}/>

           <CustomInput
                 placeholder="Repeat password"
                 value={passwordRepeat}
                 setValue={setPasswordRepeat}
                 secureTextEntry={true}/>

               <Text style={{color: '#7D848D', width:'90%', fontWeight:'500', marginTop: '2%' }}>
                               {"By registering, you confirm that you accept our "}
                               <Text style={{color: '#00A98F',}} onPress={onTermsOfUsePressed}>
                                   {"Terms of Use "}
                               </Text>
                                and
                                <Text style={{color: '#00A98F',}} onPress={onPrivacyPressed}>
                                    {" Privacy Policy."}
                                </Text>
               </Text>
            <CustomButton text="Sign Up" onPress={onRegisterPressed} />
            <Text style={{color: '#7D848D', fontWeight: '500'}}> Already have an account?
                <Text style={{color: '#00A98F'}}>
                    {' Sign in'}
                </Text>
            </Text>
        </View>
       </ScrollView>
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
        marginTop: '7%',
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

export default SignUpScreen