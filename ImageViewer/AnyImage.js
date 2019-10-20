const anyImages = [
    {
    uri: require('./images/chaeyoung.png'),
    caption: "Chaeyoung!"
    },
    {
    uri: require('./images/dahyun.png'),
    caption: "Dahyun"
    },
    {
    uri: require('./images/jihyo.png'),
    caption: "Jihyo"
    },
    {
    uri: require('./images/mina.png'),
    caption: "Mina"
    },
    {
    uri: require('./images/momo.png'),
    caption: "Momo"
    },
    {
    uri: require('./images/nayeon.png'),
    caption: "Nayeon"
    },
    {
    uri: require('./images/sana.png'),
    caption: "Sana"
    },
    {
    uri: require('./images/tzuyu.png'),
    caption: "Tzuyu"
    }    
];

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'stretch',
        backgroundColor: 'black'
    },
    image: {
        flex: 2,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
        imageBg: {
            resizeMode: 'contain'
        },
        imageCaption: {
            textAlign: 'center',
            width: '100%',
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: 'Damascus',
            color: 'gray'
        },
        empty: {
            flex: 1
        },
        hr: {
            borderBottomWidth: 1,
            borderBottomColor:'rgba(100, 100, 100, 0.4)',
            width: width,
            marginBottom: 10,
        }
});

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import Myheader from '../header/myheader';
import Myfooter from '../footer/myfooter';

export default class AnyImage extends Component {
    constructor(props){
        super(props);
        this.state = {
            index: 0,
            imageWidth: null
        };
    }

    render() {
        const image = anyImages[this.state.index];

        return(
            <View style={styles.container}>
                <Myheader />
                <View style={styles.empty} />
                <Text style={styles.imageCaption}>{image.caption}</Text>
                <View style={styles.hr} />
                <TouchableHighlight onPress={this.newImage.bind(this)} style={styles.image} >
                    <ImageBackground source={image.uri} style={styles.image} resizeMode="contain" onLayout={this.onNewLayout.bind(this)}>
                    </ImageBackground>
                </TouchableHighlight>
                <View style={styles.empty} />
                <Myfooter />
            </View>
        );
    }

    // constructor(props) {
    //     super(props);
    //     this.state= {
    //         index: 0,
    //         imageWidth: null
    //     };
    // }

    newImage(event) {
        const { index, imageWidth } = this.state,
            X = event.nativeEvent.locationX,
            touchCalc = (X < imageWidth / 2) ? -1 : +1;
        let newIndex = (index + touchCalc) % anyImages.length;
            if (newIndex < 0) {
                newIndex = anyImages.length - Math.abs(newIndex);
            }
            this.setState({
                index: newIndex
            });
        }


        onNewLayout(event) {
        this.setState({
        imageWidth: event.nativeEvent.layout.width
        });
        }
}