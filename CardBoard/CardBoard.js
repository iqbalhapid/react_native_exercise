import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Platform } from 'react-native';

export default class CardBoard extends Component {
render() {
    return (
            <View style={styles.container}>
                <View style={styles.cardContainer} >
                <View style={styles.cardImageContainer}>
                    <Image style={styles.cardImage}
                    source={require('./img/user.jpg')} />
                </View>
                <View>
                    <Text style={styles.cardName}>
                            Iqbal Hapid
                    </Text>
                </View>
                <View style={styles.cardOccupationContainer}>
                    <Text style={styles.cardOccupation}>
                            Founder
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardDescription}>
                    Great meals have a way of bringing family and friends together in a way that is truly special 
                    </Text>
                </View>
            </View>
        </View>
        );
    }
}

const profileCardColor = 'lightgrey';

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
    marginHorizontal: 16,
    backgroundColor: profileCardColor,
    width: 330,
    height: 400,
    ...Platform.select({ //don't forget to import Platform on top
            ios: {
            shadowColor: 'black',
            shadowOffset: {
            height: 10
            },
            shadowOpacity: 1
            },
            android: {
            elevation: 15
            }
            })
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
    paddingTop: 0,
    ...Platform.select({
        ios: {
            shadowColor: 'black',
            shadowOffset: {
            height: 10,
        },
            shadowOpacity: 1
        },
        android: {
            borderWidth: 2,
            borderColor: 'black',
            elevation: 15
        }
        })
},
cardImage: {
    width: '100%', 
    height: '100%',
    borderRadius: 60
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
    textAlign: 'center',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10
    }
});