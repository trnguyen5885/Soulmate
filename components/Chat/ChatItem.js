import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


function ChatItem({id, name, avatar, chat, date}) {

  function onPressHandler() {
    
  }

  return (
    <Pressable onPress={onPressHandler} style = {({pressed}) => [styles.container, pressed ? styles.pressed : null]} >
  
        <View>
          <Image style = {{width: 45, height: 45, borderRadius: 22.5}} source={{uri: avatar}} />
        </View>

        <View style = {{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: 250, marginLeft: 15}} >
          <View>
            <Text style = {{fontSize: 16, fontWeight: 'bold'}}>{name}</Text>
            <Text style = {{marginTop: 5,fontSize: 14, color: '#9095a0'}} >{chat}</Text>
          </View>

          <View> 
            <Text style = {{color: '#9095a0'}} >{date}</Text>
          </View>
        </View>
      
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  pressed: {
    opacity: 0.75
  }
})

export default ChatItem