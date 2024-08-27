import { StyleSheet, Text, View, Image, Alert } from 'react-native'
import AuthContent from '../components/Form/AuthContent'
import { signup } from '../utils/auth'
import React, {useContext, useState} from 'react'
import LoadingOverlay from '../components/Ui/LoadingOverlay'
import { AuthContext } from '../store/auth-context'

function Register() {

    const [isRegistering, setIsRegistering] = useState()
    const authContext = useContext(AuthContext);

   async function sigupHandler(email, password) {
        setIsRegistering(true);
        try {
            await signup(email, password);
            setIsRegistering(false);
            Alert.alert("Register succesfully", "Get started with soulmate", [{
                text: "Okay",
                style: 'default'
            }])
        } catch(error) {
            Alert.alert("Register unsuccesfully", "Your email already exist", [{
                text: "Okay",
                style: 'default'
            }])
            setIsRegistering(false);
        }
       
    }

    if(isRegistering) {
        return <LoadingOverlay message="Registering" />
    }

  return (
    <View style = {styles.screen}>

    <View style = {[styles.flexContainer]}> 
        <Image  style = {styles.image} source={require('../assets/images/login.png')} />
         <Text style = {styles.title}  >Started with Soulmate</Text>
         <Text style = {styles.subtitle}>by creating a free account.</Text>
    </View>

    <View style = {styles.form}>
        <AuthContent isLogin={false} onAuthenticate={sigupHandler} />
    </View>
       
    
  
  </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 100,
    
},
flexContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
},
image: {
    position: 'relative'
},
title: {
    position: 'absolute',
    left: 85,
    bottom: 85,
    fontSize: 25,
    fontStyle: 'italic'
},
subtitle: {
    position: 'absolute',
    bottom: 55,
    fontStyle: 'italic',
    color: '#252525'
},
form: {
    flex: 1
}
})

export default Register