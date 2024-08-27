import { ScrollView, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../store/auth-context';
import FriendsContent from '../components/Friends/FriendsContent';
import PostContent from '../components/Posts/PostContent';

function Home() {

  // const [fetchedMessage, setFetchedMessage] = useState('');
  // const authContext = useContext(AuthContext);
  // const token = authContext.token;

  // useEffect(() => {
  //   axios.get('https://react-native-courses-f8d67-default-rtdb.firebaseio.com/message.json?auth=' + token)
  //   .then((response) => {
  //     setFetchedMessage(response.data)
  //   });
  // },[token])
  


  return (
    <View style = {styles.screen}>
      <FriendsContent />
      <PostContent />
    
    </View>
    
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
})

export default Home