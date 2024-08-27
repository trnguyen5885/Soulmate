import { StyleSheet, Text, View, Image, Alert, ActivityIndicator } from 'react-native'
import { login } from '../utils/auth'
import React, { useContext, useState } from 'react'
import AuthContent from '../components/Form/AuthContent'
import LoadingOverlay from '../components/Ui/LoadingOverlay'
import { AuthContext } from '../store/auth-context'

function Login() {

    const [isLogin, setIsLogin] = useState();
    const authContext =   useContext(AuthContext);

    async function loginHandler(email, password) {
        try {
            setIsLogin(true);
            const token = await login(email, password)
            authContext.authentication(token);
            setIsLogin(false);
        } catch(error) {
            Alert.alert("Login unsuccessful", "Check your email or password of you", [{
                text: "Okay",
                style: 'cancel'
            }])
            setIsLogin(false);
           
        }
        
        
    }

    if(isLogin) {
        
       return <LoadingOverlay message="Loadding" />
        
    }

  return (
    <View style = {styles.screen}>

        <View style = {[styles.flexContainer]}> 
            <Image  style = {styles.image} source={require('../assets/images/login.png')} />
             <Text style = {styles.title}  >Welcome to Soulmate</Text>
             <Text style = {styles.subtitle}>sign in to access your account</Text>
        </View>

        <View style = {styles.form}>
            <AuthContent isLogin={true} onAuthenticate={loginHandler} />
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


export default Login


