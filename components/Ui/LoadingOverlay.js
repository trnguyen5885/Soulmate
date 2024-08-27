import { StyleSheet, Text, View, ActivityIndicator} from 'react-native'
import React from 'react'

function LoadingOverlay({message}) {
  return (
    <View style = {styles.screen}>
      <ActivityIndicator size='large' /> 
      <Text>{message}</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default LoadingOverlay