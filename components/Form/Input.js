import { StyleSheet, Text, TextInput, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react'
import { Colors } from '../../constants/styles'

function Input({textInputConfig}) {
  return (
    <View style = {styles.input}>
        <TextInput onBlur={({blur}) => {blur ? styles.focus : null}} style = {styles.textInput} {...textInputConfig} />
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        marginTop: 15,
        width: '80%',
        backgroundColor: '#f1f1f1',
        borderRadius: 8,
        overflow: 'hidden'
    },
    textInput: {
        padding: 20,
        fontSize: 15,
        borderRadius: 8,
        
    }
})

export default Input