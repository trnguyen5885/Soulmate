import { StyleSheet, View, Image, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import Button from '../components/Ui/Button'
import * as ImagePicker from 'expo-image-picker';
import * as Notifications from 'expo-notifications';
import CustomButton from '../components/Ui/CustomButton';
import { PostContext } from '../store/post-context';
import { Post } from '../models/Post';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowAlert: true,
  })
})

const allowsNotificationsAsync = async () => {
  const settings = await Notifications.getPermissionsAsync();
  return (
    settings.granted ||
    settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
  );
};

const requestPermissionsAsync = async () => {
  return await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });
};



function ManagePost({navigation}) {

  

   const[image, setImage] = useState('');
   const [text, setText] = useState('');
   const postCtx = useContext(PostContext);
   
   const scheduleNotificationHandler = async () => {
 
    //// START: CALL FUNCTIONS HERE ////
    const hasPushNotificationPermissionGranted =
      await allowsNotificationsAsync();
 
 
    if (!hasPushNotificationPermissionGranted) {
      await requestPermissionsAsync();
    }
    //// END: CALL FUNCTIONS HERE ////
 
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Soulmate Notification",
        body: "Trung Nguyên just post a status",
        data: { userName: "Nguyên" },
      },
      trigger: {
        seconds: 2,
      },
    });
  };

   const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    delete result.cancelled;

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  function getTextHandler(enteredText) {
    setText(enteredText);
  }

  function submitHandler() {
    const id = new Date().toString() + Math.random().toString();
    postCtx.addPost(new Post(id, "Trung Nguyên", "/Users/macos/ReactNativeProjects/Soulmate/assets/images/avatar.jpg", text, new Date(),image,0))
    scheduleNotificationHandler();
    navigation.goBack();
  }

  


   

    

  return (
    <View style = {styles.screen}>

       <View style = {styles.inputContainer}>
        <TextInput style = {styles.input} placeholder='What do you think' multiline = {true} onChangeText={getTextHandler}/>
       </View>

       <View style = {styles.imagePickerContainer}>
            {image && <Image style = {styles.image} source={{uri: image}} />}
            <View style = {styles.icons}>
                <CustomButton icon='picture' size={24} color='black' onPress={pickImage} />
                <CustomButton icon='reload1' size={20} color='black' onPress={() => {setImage('')}} />
               
           </View>

           <View style = {styles.button}>
            <Button onPress={submitHandler} >Post</Button>
           </View>

               
        
       </View>

       

       
        

    </View>
  )
}

export default ManagePost

const styles = StyleSheet.create({
   screen: {
    flex: 2
   },
   inputContainer: {
    flex: 0.1,
    padding: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#cccccc'
   },
   input: {
    fontSize: 18
   },
   imagePickerContainer: {
    padding: 10,
    flex: 1,
   },
   image: {
    width: '100%',
    height: 200,
    borderRadius: 10
   },
   icons: {
    flexDirection: 'row',
    columnGap: 10,
    marginTop: 5,
    marginLeft: 5,
    alignContent: 'flex-start'
   },
   button: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center'
   }

   
})