import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

function Message({route}) {

    const id = route.params.id

  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}

export default Message

const styles = StyleSheet.create({})