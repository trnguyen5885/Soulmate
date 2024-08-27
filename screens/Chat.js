import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import Search from '../components/Ui/Search'
import FriendsContent from '../components/Friends/FriendsContent'
import ChatContent from '../components/Chat/ChatContent'
import { CHATS } from '../data/dummy-data'

function Chat() {

  const [search, setSearch]  = useState('');
  const [chat, setChat] = useState(CHATS);

  function searchHandler() {
    const chatsFiltered = CHATS.filter((chat) => chat.name === search);
    setChat(chatsFiltered);
  }

  
  


  return (
    <View style = {styles.screen}>
      <Search onChangeText={(enteredText) => setSearch(enteredText)} onPress={searchHandler}  />
      <FriendsContent />
      <ChatContent chatListData={chat} />
    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})