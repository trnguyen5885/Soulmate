import { Pressable, StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'


function IconButton({icon, size, color, onPress, iconStyle}) {
  return (
    <Pressable onPress={onPress} style = {({pressed}) => [styles.button, pressed ? styles.buttonPressed : null, iconStyle]} >
      <AntDesign name={icon} size={size} color={color}/>
    </Pressable>
  )
}



const styles = StyleSheet.create({
    button: {
        padding: 12,
        borderRadius: 10,
        backgroundColor: '#f1f1f1'
    },
    buttonPressed: {
        opacity: 0.75
    }
})

export default IconButton