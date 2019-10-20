import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    Alert
} from 'react-native';
import Myheader from '../header/myheader';
import Myfooter from '../footer/myfooter';

class SimpleCalculator extends Component {
    constructor(props) {
        super(props)
        this.state = {
        first: '',
        second: '',
        }
    }

    _handlePressPlus() {
    Alert.alert('Total', (this.state.first + this.state.second).toString());
    }

    _handlePressMinus() {
        Alert.alert('Total', (this.state.first - this.state.second).toString());
    }

    _handlePressMultiply() {
        Alert.alert('Total', (this.state.first * this.state.second).toString());
    }

    _handlePressDivide() {
        Alert.alert('Total', (this.state.first / this.state.second).toString());
    }

    render() {
    return (
    <>
    <Myheader />
    <View style={styles.container}>
    <View style={styles.empty} />
        <Text style={styles.welcome}> Please, Input some Numbers...</Text>
        <View style={styles.hr} />
        <TextInput
        style={styles.textInputStyle}
        placeholder="Enter First Number"
        returnKeyLabel={"next"}
        onChangeText={(text) => this.setState({ first: parseInt(text) })}
        keyboardType='numeric'
        />
        <TextInput
        style={styles.textInputStyle}
        placeholder="Enter Second Number"
        returnKeyLabel={"next"}
        onChangeText={(text) => this.setState({ second: parseInt(text) })}
        keyboardType='numeric'
        />
        
        <View style={styles.fixToText} >
        <Button
        onPress={() => this._handlePressPlus()}
        style={styles.buttonStyle}
        color= "#f194ff"
        title="   +   " />
        
        <Button
        onPress={() => this._handlePressMinus()}
        style={styles.buttonStyle}
        color= "#f194ff"
        title="    -    " />
        
        
        <Button
        onPress={() => this._handlePressMultiply()}
        style={styles.buttonStyle}
        color= "#f194ff"
        title="   *   " />
        
        
        <Button
        onPress={() => this._handlePressDivide()}
        style={styles.buttonStyle}
        color= "#f194ff"
        title="   /   " />
        
        
        </View>
        <View style={styles.empty} />
        </View>
        <Myfooter />
    </>
        );
    }
}


const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 16
    },

    welcome: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: "bold"
    },

    buttonStyle: {  
    },

    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    empty: {
    flex: 1
    },

    hr: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(100, 100, 100, 0.4)',
    marginBottom: 10
    }
});

export default SimpleCalculator;