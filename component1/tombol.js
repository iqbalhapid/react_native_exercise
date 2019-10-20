import React, {Component} from 'react';
import { Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
const Tombol = () => (
<TouchableOpacity style={styles.button}
onPress={() => Alert.alert('Wow you just tap the button')}>
<Text style={styles.text}>Hit me please!</Text>
</TouchableOpacity>
)
export default Tombol;

    const styles = StyleSheet.create({
        button: {
        alignItems: 'center',
        backgroundColor: 'grey',
        padding: 10
        },
        text:{
            color:'white'
        }
    })
