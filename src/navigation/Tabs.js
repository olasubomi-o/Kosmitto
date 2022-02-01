import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Image, View, Text } from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import MatchesScreen from '../screens/MatchesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator

        screenOptions = {{
            tabBarShowLabel: false,
            style: {
                backgroundColor: 'black'
            },
            tabStyle:
            {
                position: 'absolute',
                backgroundColor: 'black'

            }
        }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options = {{
          tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
            <Image source={require('/Users/olasubomiolawepo/Desktop/Kosmitto/Assets/icons/cards.png')}
            resizeMode = 'contain'
            style={{
                width: 25,
                height: 25,
                tintColor: focused ?  '#F2C94C' : '#748c94',            
              }} 
             />
            <Text style={{color: focused ? '#F2C94C' : '#748c94', fontSize: 12}}>Home</Text>
          </View>
          )
          

      }}/>
       <Tab.Screen name="Message" component={MatchesScreen} options = {{
          tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
            <Image source={require('/Users/olasubomiolawepo/Desktop/Kosmitto/Assets/icons/chat.png')}
            resizeMode = 'contain'
            style={{
                width: 25,
                height: 25,
                tintColor: focused ?  '#fac960' : '#748c94',            
              }} 
             />
            <Text style={{color: focused ? '#fac960' : '#748c94', fontSize: 12}}>Message</Text>
          </View>
          )
      }}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options = {{
          tabBarIcon: ({focused}) => (
          <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
            <Image source={require('/Users/olasubomiolawepo/Desktop/Kosmitto/Assets/icons/user.png')}
            resizeMode = 'contain'
            style={{
                width: 25,
                height: 25,
                tintColor: focused ?  '#F2C94C' : '#748c94',            
              }} 
             />
            <Text style={{color: focused ? '#F2C94C' : '#748c94', fontSize: 12}}>Profile</Text>
          </View>
          )
          

      }}/>
      
    </Tab.Navigator>
  );
}

export default Tabs;