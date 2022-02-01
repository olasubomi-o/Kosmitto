import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Image} from 'react-native';
import users from '../../Assets/users';


const MatchesScreen = () => {
  return(
  <SafeAreaView style = {styles.root}>
      <View style = {styles.container}>
      <Text style= {{ fontWeight: 'bold', fontSize: 24, color: 'black' }}>New Matches</Text>
      <View style = {styles.users}>
      {users.map(user => (
          <View style = {styles.user} key={user.id}>
              <Image source= {{uri: user.image}} style={styles.image}/>
          </View>
      ))}
      </View>
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
        
    },
    users: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    user: {
        width: 100,
        height: 100,
        margin: 10,

        borderWidth: 3,
        padding: 3,
        borderColor: 'yellow',
        borderRadius: 50,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 50,

    },
  
})


export default MatchesScreen;

