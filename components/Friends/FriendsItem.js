import { Image, StyleSheet, Text, View } from 'react-native'
import  { Colors } from '../../constants/styles'
import React from 'react'

function FriendsItem({id, name, avatar}) {
  return (
    <View style = {styles.friendsItem}>
      <View style = {styles.avatarContainer} >
        <Image style = {styles.avatar} source={{uri: avatar}} />
      </View>
      <Text style = {styles.name}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  friendsItem: {
    minWidth: 70,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 0,
    

  },
  avatarContainer: {
    borderRadius: 99,
    borderWidth: 2,
    borderColor: Colors.subColor
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    margin: 2,
  },
  name: {
    marginTop: 8,
    fontStyle: 'italic'
  }
})

export default FriendsItem