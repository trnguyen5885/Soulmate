import { StyleSheet, Text, View } from 'react-native'
import ChatList from './ChatList'
import React from 'react'

function ChatContent({chatListData}) {
  return (
    <View style = {styles.container}>
      <ChatList chatListData={chatListData} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24
  }
})

export default ChatContent