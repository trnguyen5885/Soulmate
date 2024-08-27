import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Button from '../Ui/Button'
import IconButton from '../Ui/IconButton';

function AuthForm({isLogin, onAuthenticate}) {

  const [values, setValue] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  function getValues(inputIdentifier,enteredText) {
    setValue((currentValues) => {
      return {
        ...currentValues,
        [inputIdentifier]: enteredText
      }
    })
  }

  

  function submitForm() {

    const emailValid = values.email.includes('@');
    const passwordValid = values.password.length > 6;
    const confirmPasswordValid = values.password === values.confirmPassword;

    if(isLogin) {
      if(!emailValid || !passwordValid) {
        Alert.alert("Invalid Input", "Please check your input",[{
          text: "Okay",
          style: 'default'
        }] )
        return;
      }

        onAuthenticate(values.email, values.password);
      

      


    } else {
      if(!emailValid || !passwordValid || !confirmPasswordValid) {
        Alert.alert("Invalid Input", "Please check your input",[{
          text: "Okay",
          style: 'default'
        }] )
  
        
        return;
      } 

      onAuthenticate(values.email, values.confirmPassword);
    }

    

    

    

      
  }


  return (
    <View style = {styles.container}>

    

      <Input textInputConfig={{
              placeholder: 'Enter your email',
              autoCapitalize: 'none',
              autoComplete: 'off',
              onChangeText: getValues.bind(this, 'email'),
              value: values.email
        }} />

        

      <Input textInputConfig={{
              placeholder: 'Enter your password',
              autoCapitalize: 'none',
              autoComplete: 'off',
              secureTextEntry: true,
              onChangeText: getValues.bind(this, 'password'),
              value: values.password
        }} />

        {!isLogin && <Input textInputConfig={{
              placeholder: 'Confirm your password',
              autoCapitalize: 'none',
              autoComplete: 'off',
              secureTextEntry: true,
              onChangeText:  getValues.bind(this, 'confirmPassword'),
              value: values.confirmPassword
        }} />}

        {isLogin && <View style = {styles.icons} >
          <IconButton icon="google" size={30} color="red" />
          <IconButton icon="facebook-square" size={30} color="blue" />
          <IconButton icon="twitter" size={30} color="#1DA1F2" />
        </View>}
        
        


          <Button onPress={submitForm} buttonStyle={{marginTop: isLogin ? 70 : 50}}>{isLogin ? "Get Started" : "Register"}</Button>
        



    </View>
   

   
  )
}

export default AuthForm

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  icons: {
    marginTop: 50,
    flexDirection: 'row',
    columnGap: 10
  }
})