import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { FavouriteContext } from '../store/favourite-context'
import { POSTS } from '../data/dummy-data';
import PostList from '../components/Posts/PostList';

function Favourite() {

  const postCtx = useContext(FavouriteContext);
  const listFavouritePosts = POSTS.filter(post => postCtx.listFavouritePosts.includes(post.id))
  

  return (
    <SafeAreaView style = {styles.screen}>
      <PostList listPosts={listFavouritePosts} />
    </SafeAreaView>
  )
}

export default Favourite

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#ffffff'
  }
})