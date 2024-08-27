import { StyleSheet, View } from 'react-native'
import React from 'react'
import FriendsList from './FriendsList'
import { FRIENDS } from '../../data/dummy-data'


function FriendsContent() {



  return (
    <View style = {styles.container}>
        <FriendsList listFriends={FRIENDS} />
    </View> )
    
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 20,
    }
})

export default FriendsContent

