import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants/styles'

import React from 'react'
import { useNavigation } from '@react-navigation/native'

function FlatButton({children, isLogin}) {

  const navigation =  useNavigation();

  function switchScreen() {
    if(isLogin) {
      navigation.replace('Register')
    } else {
      navigation.replace('Login')
    }
  }

  return (
    <Pressable onPress={switchScreen} style = {({pressed}) => pressed ? styles.buttonPressed : null}>
      <Text style = {styles.buttonText}>{children}</Text>
    </Pressable>
  )
}



const styles = StyleSheet.create({
    buttonText: {
        color: Colors.primaryColor
    },
    buttonPressed: {
        opacity: 0.75
    }
})

export default FlatButton