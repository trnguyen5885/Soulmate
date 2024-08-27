import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import PostList from './PostList'
import { PostContext } from '../../store/post-context'

function PostContent() {

  const postCtx =  useContext(PostContext);
  const postList = postCtx.posts;


  return (

    <View style = {styles.container}>
      <PostList listPosts={postList} />
    </View>

  )
}



const styles = StyleSheet.create({
    container: {
      flex: 1
    }
})

export default PostContent