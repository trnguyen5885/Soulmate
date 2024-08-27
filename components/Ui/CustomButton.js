import { Pressable, StyleSheet, Text, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'

function CustomButton({icon, size, color, onPress}) {

    

  return (
    <Pressable onPress={onPress}>
      <AntDesign name={icon} color={color} size={size} />
    </Pressable>
  )
}

const styles = StyleSheet.create({

})

export default CustomButton