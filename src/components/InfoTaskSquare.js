import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function InfoTaskSquare({ text, number,timer }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>{text}</Text>
            <Text style={styles.textNumber}>{timer?`${number} seg`:number}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    textTitle:{
        fontSize:26,
        color:'gray',
        textAlign:'center',
    },
    textNumber:{
        fontSize:26,
        color:'#9E2D8C',
        textAlign:'center',
        fontWeight:'bold'
    }
});
