import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import AuthForm from './AuthForm'
import Button from '../Ui/Button'
import FlatButton from '../Ui/FlatButton'

function AuthContent({isLogin, onAuthenticate}) {
  return (

    <View>

      <AuthForm isLogin={isLogin} onAuthenticate={onAuthenticate} />

      <View style = {styles.button}>
        <Text style = {styles.buttonText} >{isLogin ? "New Member?" : "Already a member?"}</Text>
        <FlatButton isLogin={isLogin}>{isLogin ? "Register now" : "Login"}</FlatButton>
      </View>

    </View>
    

  
    
  )
}

export default AuthContent

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  button: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    marginRight: 5
  }
})