import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import Emoji from 'react-native-emoji';

export default function CardIntrestButton() {
    return (
        <TouchableOpacity>
            <View style = {{flexDirection: 'row', flexWrap: 1}}>
                <View style = {styles.matchedIntrestButton}>
                    <Emoji name="running" style={styles.emoji} />
                    <Text style={styles.text}>Run</Text>
                </View>
                <View style = {styles.matchedIntrestButton}>
                    <Emoji name="swimmer" style={styles.emoji} />
                    <Text style={styles.text}>Swimming</Text>
                </View>
                <View style = {styles.matchedIntrestButton}>
                    <Emoji name="musical_note" style={styles.emoji} />
                    <Text style={styles.text}>Music</Text>
                </View>
                <View style = {styles.matchedIntrestButton}>
                    <Emoji name="musical_note" style={styles.emoji} />
                    <Text style={styles.text}>Music</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    matchedIntrestButton: {
        width: 'auto',
        height: 45,
        borderRadius: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'stretch',
        alignSelf: 'auto',
        borderColor: 'black',
        borderWidth: 1,
        marginTop: 10,
        marginLeft: 25,
        paddingLeft: 10,
        paddingRight: 10,
        flexShrink: 1,
        
    },
    text: {
    marginLeft: 10,
    marginTop: 11,
    fontFamily: "Helvetica",
    alignSelf: 'auto'
    },
    emoji:{
        marginTop: 10

    }
})