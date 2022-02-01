import React from 'react';
import {Text, Image, ImageBackground, View, StyleSheet, Button} from 'react-native'
import CardIntrestButton from '/Users/olasubomiolawepo/Desktop/Kosmitto/Button.js'

const Card = props => {
    const {name, image, question1, response1, question2, response2, question3, response3} = props.user;
  return(
  <View style = {styles.cardContainer}>
   <ImageBackground style={styles.cardBackground}>
     <Image source = {{uri: image}} style={styles.userImage}/>
    <Text style={styles.name}>{name}</Text>
    <CardIntrestButton />
    <Text style={styles.header}> {question1}</Text>
    <Text style={styles.response}> {response1}</Text>
    <Text style={styles.header}> {question2}</Text>
    <Text style={styles.response}> {response2}</Text>
    <Text style={styles.header}> {question3}</Text>
    <Text style={styles.response}> {response3}</Text>
   </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1
    
  },
  cardBackground: {
    width: 295, 
    height: 458, 
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fcf8ec'
  },
  userImage: {
    width: 100,
    height: 100,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#F27121",
    backgroundColor: "white",
    alignSelf: 'center',
    marginTop: 15,

  },
  name:{
    textAlign: "center",
    fontFamily: "Helvetica",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  header:{
    fontFamily: "Helvetica",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 25,
  },
  response: {
    fontFamily: "Helvetica",
    fontSize: 14,
    fontWeight: "200",
    marginTop: 10,
    marginLeft: 25,
  }
});

export default Card;

