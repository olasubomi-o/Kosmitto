import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image, Pressable} from 'react-native';
import {Auth} from 'aws-amplify'


const ProfileScreen = () => {
  return(
  <SafeAreaView style = {styles.root}>
      <View style = {styles.container}>
        <Pressable onPress={() => Auth.signOut()}> 
        <Text>Sign Out</Text>
        </Pressable>
      </View>
  </SafeAreaView>

  );
  };

const styles = StyleSheet.create({
    root: {
        width: '100%',
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        padding: 10,
        
    }
  
})


export default ProfileScreen;

