import 'react-native-gesture-handler'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Pressable, StyleSheet, View, Text, Button} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import MatchesScreen from './src/screens/MatchesScreen';
import Tabs from './src/navigation/Tabs';
import Amplify, {Auth} from 'aws-amplify';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import config from './src/aws-exports';



Amplify.configure(config);

const App = () => {
  
  const onSwipeLeft = (user) => {
    console.warn('swipe left', user.name)
  };
  const onSwipeRight = (user) => {
    console.warn('swipe right', user.name)
  };
 
  return(
    
  <NavigationContainer>
    <Tabs />
  </NavigationContainer>
    
  );
  };

const styles = StyleSheet.create({

  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  
  },
  
})

const signUpConfig = {
  header: "My Customized Sign Up",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Email",
      key: "email",
      required: true,
      displayOrder: 1,
      type: "string",
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 2,
      type: "password",
    },
  ],
};

const customTheme = {...AmplifyTheme,

}

export default withAuthenticator(App, {signUpConfig, theme:customTheme});

