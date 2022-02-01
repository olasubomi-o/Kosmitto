import 'react-native-gesture-handler'
import React from 'react';
import Card from '/Users/olasubomiolawepo/Desktop/Kosmitto/src/components/appCard/index.js';
import users from '/Users/olasubomiolawepo/Desktop/Kosmitto/Assets/users.js';
import { StyleSheet, View } from 'react-native';
import AnimatedStack from '/Users/olasubomiolawepo/Desktop/Kosmitto/src/components/AnimatedStack/index.js';

const HomeScreen = () => {

  const onSwipeLeft = (user) => {
    console.warn('swipe left', user.name)
  };
  const onSwipeRight = (user) => {
    console.warn('swipe right', user.name)
  };

  return(
  <View style={styles.root}>
    <AnimatedStack data={users} 
    renderItem = {(({ item }) => <Card user={ item } />)}
    onSwipeLeft={onSwipeLeft}
    onSwipeRight={onSwipeRight}
    />
  </View>

  );
  };

const styles = StyleSheet.create({
  animatedCard: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white'
  },
  nextCardContainer: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', 
  },
  Like: {
    width: 100,
    height: 100,
    position: 'absolute',
    marginHorizontal: 30,
    marginTop: 70,
   
  }
})


export default HomeScreen;

