import { FlatList, StyleSheet, Text, View } from 'react-native'
import ChatItem from './ChatItem'
import React from 'react'

function renderChatItem(itemData) {
    return <ChatItem {...itemData.item} />
}

function ChatList({chatListData}) {
  return <FlatList 
  data={chatListData} 
  renderItem={renderChatItem} 
  keyExtractor={(item) => item.id}
  showsVerticalScrollIndicator={false}
  />
}

export default ChatList

const styles = StyleSheet.create({})