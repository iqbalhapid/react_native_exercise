import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
const Myheader = () => (
        <View style={{
            alignItems: 'center',
            justifyContent: "center", 
            height: 100, 
            backgroundColor: 'pink'
        }}>
        <StatusBar
        backgroundColor="pink"
        barStyle="light-content"
        />
        <Text style={{
            textAlign: 'center',
            fontSize:40,
            color: 'white'
        }}>
            Hi There
        </Text>
        </View>
)
export default Myheader;


    