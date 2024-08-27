import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants/styles'
import React from 'react'

function Button({children, onPress, buttonStyle, textButtonStyle}) {
  return (
    <Pressable onPress={onPress} style = {({pressed}) => [styles.button, pressed ? styles.buttonPressed : null, buttonStyle]} >
      <Text style = {[styles.buttonText, textButtonStyle]}>{children}</Text>
    </Pressable>
  )
}



const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        width: '80%',
        backgroundColor: Colors.primaryColor,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    buttonPressed: {
      opacity: 0.75
    }
})

export default Button