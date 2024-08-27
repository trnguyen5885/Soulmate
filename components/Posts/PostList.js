import { FlatList, StyleSheet, Text, View } from 'react-native'
import PostItem from './PostItem'
import React from 'react'

function renderItemPost(itemData) {
    return <PostItem {...itemData.item} />
}

function PostList({listPosts}) {
  return (
  <FlatList 
  data={listPosts}
  renderItem={renderItemPost}
  keyExtractor={(item) => item.id} 
  showsVerticalScrollIndicator={false}
  />
)
}


const styles = StyleSheet.create({})

export default PostList