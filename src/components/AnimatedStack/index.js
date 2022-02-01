import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, useAnimatedGestureHandler, useDerivedValue, interpolate, runOnJS } from 'react-native-reanimated';
import { useWindowDimensions } from 'react-native';
import { StyleSheet, View} from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler'
import Like from '/Users/olasubomiolawepo/Desktop/Kosmitto/Assets/images/Like.png'
import Nope from '/Users/olasubomiolawepo/Desktop/Kosmitto/Assets/images/Nope.png'

const maxRotation = 60;
const swipeVelocity = 800;

const AnimatedStack = (props) => {

  const { data, renderItem, onSwipeRight, onSwipeLeft } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(currentIndex+1);

  const currentProfile = data[currentIndex];
  const nextProfile = data[nextIndex]

  const { width: screenWidth} = useWindowDimensions();

  const hiddenTranslateX = 2 * screenWidth

  const translateX = useSharedValue(0);
  const rotate = useDerivedValue(() => interpolate(
    translateX.value,
    [0, hiddenTranslateX], 
    [0,maxRotation]) + 'deg',
    );

  const cardStyle = useAnimatedStyle(() => ({
    transform: [{
      translateX: translateX.value,
    },
    {
      rotate: rotate.value
    }
  ],
  }));

  const nextCardStyle = useAnimatedStyle(() => ({
    transform: [{
      scale: interpolate(
        translateX.value,
        [-hiddenTranslateX,0, hiddenTranslateX], 
        [1, 0.8,1]),
    
    }
  ],
  opacity: interpolate(
    translateX.value,
    [-hiddenTranslateX,0, hiddenTranslateX], 
    [1, 0.5, 1])

  }));

  const likeStyle = useAnimatedStyle (() => ({
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX/5, 0, hiddenTranslateX/5], 
      [0,0,1])
  }))
  const nopeStyle = useAnimatedStyle (() => ({
    opacity: interpolate(
      translateX.value,
      [-hiddenTranslateX/5 ,0, hiddenTranslateX/5], 
      [1,0,0])
  }))

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, context) => {
      context.startX = translateX.value;
    },
    onActive: (event, context) => {
      translateX.value = context.startX + event.translationX;
    },
    onEnd: (event) => {
      if(Math.abs(event.velocityX) < swipeVelocity){
        translateX.value = withSpring(0);
        return;
      }

      translateX.value = withSpring(hiddenTranslateX * Math.sign(event.velocityX), {}, () => runOnJS(setCurrentIndex)(currentIndex + 1),
      );

      const onSwipe =  event.velocityX > 0 ? onSwipeRight : onSwipeLeft;
      onSwipe && runOnJS(onSwipe)(currentProfile);
    },
  });

  useEffect(() => {
    translateX.value = 0;
    setNextIndex(currentIndex + 1)
  }, [currentIndex, translateX])

  return(
    
  <View style={styles.root}>
   {nextProfile && (
    <View style={styles.nextCardContainer}>
      <Animated.View style={[styles.animatedCard, nextCardStyle]}>
        {renderItem({ item: nextProfile })}
      </Animated.View>
    </View>
   )}

   {currentProfile && (
    <PanGestureHandler onGestureEvent={gestureHandler}>
    <Animated.View style={[styles.animatedCard, cardStyle]}>
      <View style={{elevation: 1, zIndex: 1}}>
       <Animated.Image source={Like} style={[styles.Like, {right:10}, likeStyle]} resizeMode="contain"/>
       <Animated.Image source={Nope} style={[styles.Like, {left:10}, nopeStyle]} resizeMode="contain"/>
      </View>
      {renderItem({ item: currentProfile })}
    </Animated.View>
    </PanGestureHandler>
    )}
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


export default AnimatedStack;

