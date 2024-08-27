import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from '../constants/styles';
import { useState } from 'react';
import { POSTS } from '../data/dummy-data';
import { WebView } from 'react-native-webview';

import * as ImagePicker from 'expo-image-picker';
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';











function Profile() {
   const[image, setImage] = useState('');
   const [selectedTab, setSelectedTab] = useState('Photos')
   const tabs = ['Photos', 'Videos',];


   async function  changeAvatarHandler() {
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
}

function renderTabContent() {
    switch(selectedTab) {
        case 'Photos': 
            return <FlatList
             data={POSTS}
             numColumns={2}
             columnGap={10}
            renderItem={({item}) => (
                <View style = {{flex: 1, margin: 10}}>
                    <Image style = {{width: '100%', height: 150, resizeMode: 'cover'}} source={{uri: item.image}} />
                </View>
            )}
            />
        case 'Videos': 
            return (
                <View style = {{flex: 1}}>
                    <WebView
                    source={{uri: 'https://www.youtube.com/watch?v=ds8wWO7y_LM'}}
                    style={{width: '100%', height: 200}}
                    />
                </View>
                
            )
                    
                
        
    }
}


  return (
    <View style = {styles.screen}>
        <View style = {styles.imageContainer}>
             <Image style = {{width: '100%', height: 200}} source={{uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} />
            <View style = {styles.infoContainer}>
                <Pressable onPress={changeAvatarHandler}> 
                    <Image style = {styles.avatar} source={{uri: image ? image : '/Users/macos/ReactNativeProjects/Soulmate/assets/images/avatar.jpg'}} />
                </Pressable>
                <Text style = {styles.name}>Trung Nguyên</Text>
                <Text style = {styles.major}>Mobile Developer</Text>
            </View>   
        </View>

        <View style = {styles.buttonsContainer} >
            <TouchableOpacity>
                <View style = {[styles.buttonContainer, {borderWidth: 1, borderRadius: 8 , borderColor: '#EE7D2C'}]}>
                    <AntDesign name="check" size={24} color="#EE7D2C" />
                    <Text style = {{fontSize: 15, color: '#EE7D2C'}}>Following</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <View style = {[styles.buttonContainer, {backgroundColor: Colors.primaryColor, borderRadius: 8}]}>
                    <AntDesign name="message1" size={24} color="#FFFFFF" />
                    <Text style = {{fontSize: 15, color: '#FFFFFF'}}>Message</Text>
                </View>
            </TouchableOpacity>

        </View>

        <View style = {styles.tabsContainer}>
            <View style = {styles.tabsHeader}>
                {tabs.map((tab) => (
                    <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
                        <View style = {[styles.tabItemContainer, selectedTab === tab && styles.tabItemContainerActive]}>
                            <Text style = {[styles.tabItem, selectedTab === tab && styles.tabItemActive]}>{tab}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>

        <View style = {styles.tabsContentContainer}>
            {renderTabContent()}
        </View>

       


       

        

         
     </View>

   
  )
}

export default Profile

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column'
    },
    imageContainer: {
        position: 'relative'    
    },
    infoContainer: {
        position: 'absolute',
        flexDirection: 'column',
        alignItems: 'center',
        bottom: -130,
        left: 115
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    name: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 25,
        fontWeight: 'bold'
    },
    major: {
        marginTop: 10,
        color: '#9095a0'
    },
    buttonsContainer: {
        marginTop: 150,
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        columnGap: 8,
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 25
    },
    tabsContainer: {
        marginTop: 20,
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: '#9095a0',
        borderRadius: 8
    },
    tabsHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 10,
    },
    tabItemContainer: {
        paddingVertical: 25,
        paddingHorizontal: 10,
    },

    tabItemContainerActive: {
        borderBottomWidth: 3,
        borderBottomColor: Colors.primaryColor
    },
    tabItem: {
        fontSize: 16,
    },
    tabItemActive: {
        color: Colors.primaryColor,
        fontWeight: 'bold'
    },
    tabsContentContainer: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 5,
    }
    
})