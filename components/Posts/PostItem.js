import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants/styles'
import CustomButton from '../Ui/CustomButton'
import React, {useContext, useState} from 'react'
import { FavouriteContext } from '../../store/favourite-context';
import { getFormatDate } from '../../utils/date';
import { PostContext } from '../../store/post-context';

function PostItem({id, avatar, name, status, date, image, like}) {
  const postContext = useContext(FavouriteContext);
  const postCtx = useContext(PostContext);
  const [colorIcon, setColorIcon] = useState('#9095a0');
  const [countLike, setCountLike] = useState(like);

  

 
  
  function colorIconHandler() {
    if(colorIcon === '#9095a0') {
      setColorIcon(Colors.primaryColor)
      setCountLike(countLike + 1);
      postContext.addFavouritePost(id)
   
      
    } else {
      setColorIcon('#9095a0')
      setCountLike(countLike - 1);
      postContext.removeFavouritePost(id)
    }
   
  }

  let content =
   <>
      <View style = {styles.statusContainer}>
          <Text style = {styles.status}>{status}</Text>
      </View> 
   </>

   if(image) {
    content = 
    <>
      <View style = {styles.statusContainer}>
          <Text style = {styles.status}>{status}</Text>
          <Image style = {styles.image} source={{uri: image}} />
      </View> 
   </>
   }
 

  return (
    <View style = {styles.postItem} >
      <View style = {styles.user}>
        
        <View style = {styles.avatarContainer}>
          <Image style = {styles.avatar} source={{uri: avatar}} /> 
        </View>

        <View style = {styles.info}>
          <Text style = {styles.name}>{name}</Text>
          <Text style = {styles.date}>{getFormatDate(date)}</Text>
        </View>

        <View style = {styles.close}>
          <CustomButton icon='close' size={18} color='black' onPress={() => {
            postCtx.deletePost(id);
          }} />
        </View>
        
      </View>

      {content}

      

      <View style = {styles.action}>
        <CustomButton icon='like2' size={24} color={colorIcon} onPress={colorIconHandler} />
        <Text style = {[styles.like, {color: colorIcon}]} >{countLike}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  postItem: {
    marginVertical: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: '#ffffff'
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarContainer: {
    marginRight: 15
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
   minWidth: 150
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  date: {
    marginTop: 3,
    color: '#9095a0'
  },
  close: {
    alignContent: 'flex-end',
    marginLeft: 100,
  },
  statusContainer: {
    marginVertical: 18,
  },
  status: {
    fontSize: 18,
  },
  
  image: {
    marginTop: 10,
    minWidth: 327,
    minHeight: 186,
    borderRadius: 8
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  like: {
    textAlignVertical: 'center',
    fontSize: 18,
    marginLeft: 10,
  }
})

export default PostItem