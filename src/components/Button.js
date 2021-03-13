import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ text, navigation, screen }) {
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(screen)} >
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width:'75%',
        backgroundColor: '#9E2D8C',
        borderRadius: 10,
    },
    textButton: {
        fontSize: 28,
        color: 'white',
        paddingHorizontal: 30,
        paddingVertical: 10,
        textAlign:'center',
    },
});