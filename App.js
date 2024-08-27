import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useContext } from 'react';
import Login from './screens/Login';
import Register from './screens/Register';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import Home from './screens/Home';
import AntDesign from '@expo/vector-icons/AntDesign';
import PostContextProvider from './store/post-context';
import Favourite from './screens/Favourite';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingOverlay from './components/Ui/LoadingOverlay';
import { Colors } from './constants/styles';
import { View, Image, Platform } from 'react-native';
import IconButton from './components/Ui/IconButton';
import FavouriteContextProvider from './store/favourite-context';
import ManagePost from './screens/ManagePost';
import Profile from './screens/Profile';
import Chat from './screens/Chat';
import Message from './screens/Message';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function AuthStack() {
  return (
  <Stack.Navigator screenOptions={{
    headerShown: false,
  }}>
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='Register' component={Register} />
  </Stack.Navigator> )
}

function ManagePostStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={({navigation}) => (
      {
        headerStyle: {height: Platform.OS === 'android' ? 100 : 115},
        headerLeft: () => (
          <Image style = {{width: 40, height: 40, borderRadius: 20, marginLeft: 20}} source = {require('./assets/images/avatar.jpg')} />
        ),
        headerRight: () => (
          <IconButton 
          icon="pluscircleo"
          color="black" size={24} 
          iconStyle={{marginRight: 10 ,backgroundColor: 'transparent'}}
          onPress={() => (
            navigation.navigate('ManagePost')
          )}
          />
        ),
        headerTitle: "Soulmate",
        headerTitleStyle: {fontSize: 20 , fontStyle: 'italic'},
      }
    )} />
      <Stack.Screen name='ManagePost' component={ManagePost} options={{
        headerShown: false,
        presentation: 'modal'
      }} />
    </Stack.Navigator>
  )
}

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Chat' component={Chat} options={{
        headerTitle: 'Chats',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold'
        }
      }} />
    </Stack.Navigator>
  )
}

function AuthenticatedTab() {
  return (
  
   <Tab.Navigator screenOptions={{
    headerShown: false,
    tabBarStyle: { minHeight: Platform.OS === 'android' ? 70 : 100 },
    tabBarItemStyle: { paddingTop: 10 },
    tabBarLabelStyle: { fontSize: 14, fontStyle: 'italic'},
    tabBarActiveTintColor: Colors.primaryColor ,
   }}>
    <Tab.Screen options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({color, size}) => <AntDesign name='home' color={color} size={size} />
    }} name='Post' component={ManagePostStack} />
    <Tab.Screen options={{
      tabBarLabel: 'Chat',
      tabBarIcon: ({color, size}) => <AntDesign name='wechat' color={color} size={size} />
    }} name='Chats' component={ChatStack} />
    <Tab.Screen options={{
      headerShown: true,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold'
      },
      tabBarLabel: 'Favourite',
      tabBarIcon: ({color, size}) => <AntDesign name='hearto' color={color} size={size} />
    }} name='Favourite' component={Favourite} />
    <Tab.Screen options={{
      tabBarLabel: 'Profile',
      tabBarIcon: ({color, size}) => <AntDesign name='profile' color={color} size={size} />
    }} name='Profile' component={Profile} />
   </Tab.Navigator>
  )
}



function Navigation() {

  const authContext = useContext(AuthContext);

  return (
  <NavigationContainer> 

      {!authContext.isAuthenticated && <AuthStack />}
      {authContext.isAuthenticated &&
      <FavouriteContextProvider>
        <PostContextProvider>
          <AuthenticatedTab />
        </PostContextProvider>
      </FavouriteContextProvider>
      }

  </NavigationContainer>
   )
}

// function Root() {

//   const authContext = useContext(AuthContext);
//   const [isTryingLogin, setIsTryingLogin] = useState(true);

//   useEffect(() => {
//     async function fetchToken() {
//          const storeToken = await AsyncStorage.getItem('token');

//          if(storeToken) {
//           authContext.authentication(storeToken)
//          }

//          setIsTryingLogin(false);
//      }

     

//      fetchToken();
//  },[])

//  if(isTryingLogin) {
//   return <LoadingOverlay message='Logging' />
//  }

//   return 
// }

export default function App() {
  return <>
  <StatusBar style='dark' />
    <AuthContextProvider>
        <Navigation />
    </AuthContextProvider>
  </>
}

