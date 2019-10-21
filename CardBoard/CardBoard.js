import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default class Cardboard extends Component {
render() {
    return (
            <View style={styles.container}>
                <View style={styles.cardContainer} >
                <View style={styles.cardImageContainer}>
                    <Image style={styles.cardImage}
                    style={require('./img/4x4_iqbal.jpg')} />
                </View>
                <View>
                    <Text style={styles.cardName}>
                            Iqbal Hapid
                    </Text>
                </View>
                <View style={styles.cardOccupationContainer}>
                    <Text style={styles.cardOccupation}>
                            React Native Developer
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardDescription}>
                            My obesession and ambition become a great programmer
                    </Text>
                </View>
            </View>
        </View>
        );
    }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
cardContainer: {
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth : 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400
    },
cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15
},
cardImage: {
    width: 80, 
    height: 80
},
cardName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 30,
    textShadowColor: 'black',
    textShadowOffset: {
    height: 2,
    width: 2
    },
    textShadowRadius: 3
    },
cardOccupationContainer: {
    borderColor: 'black',
    borderBottomWidth: 3
    },
cardOccupation: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
    },
cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
    }
});