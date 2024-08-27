import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import FriendsItem from './FriendsItem'
import React from 'react'

function renderItemFriend(itemData) {
    return <FriendsItem {...itemData.item} />
}

function FriendsList({listFriends}) {

  return <FlatList 
  data={listFriends}
    renderItem={renderItemFriend} 
    keyExtractor={(item) => item.id }
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    />
}

const styles = StyleSheet.create({})

export default FriendsList