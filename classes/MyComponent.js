import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';



class MyComponent extends Component{
    constructor(){
        super()
        this.state = {
            year: 2016,
            name: 'Siapa Saja', colors: ['blue']
        }
    }
    render() {
        return (
            <View>
                <Text>My name is: {this.state.name}</Text>
                <Text>The year is: {this.state.year}</Text>
                <Text>My colors are {this.state.colors[0]}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    com:{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color:"#b2b2b2"
    }

});


export default MyComponent;