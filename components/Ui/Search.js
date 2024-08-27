import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import IconButton from './IconButton'
import CustomButton from './CustomButton'

function Search({onPress, onChangeText}) {
  return (
    <View style = {styles.searchContainer}>
      <TextInput onChangeText={onChangeText} placeholder='Search' style = {styles.input} />
      <CustomButton icon='search1' size={24} color='black' onPress={onPress} />
    </View>
  )
}



const styles = StyleSheet.create({
    searchContainer: {
        paddingHorizontal: 14,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    input: {
        width: '90%',
        backgroundColor: 'transparent',
        paddingHorizontal: 10,
    }
})

export default Search