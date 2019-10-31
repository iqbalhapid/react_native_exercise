import React, { Component } from 'react';
import {
StyleSheet,
Text,
View,
FlatList,
Linking,
Image,
ActivityIndicator
} from 'react-native';
import Video from 'react-native-video';

const URL = 'https://www.themealdb.com/api/json/v1/1/random.php';

export default class Recipe extends Component {
constructor(props) {
super(props);
this.state = {
    isLoading: true
}
}
    async componentDidMount() {
    try {
        const response = await fetch(URL);
        const responseJson = await response.json();
        this.setState({
            isLoading: false,
            meals: responseJson.meals
        });
    }
    catch (error) {
        console.error(error);
    }
}

render() {
if (this.state.isLoading) {
    return (
    <View style={{ flex: 1, paddingTop: 20 }}>
        <ActivityIndicator
        color='#bc2b78'
        size="large"
        style={styles.activityIndicator}
        />
    </View>
    );
}

return (
    <View style={{ flex: 1, paddingTop: 20, paddingBottom: 20, marginHorizontal: 16 }}>
    <FlatList
        data={this.state.meals}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <View key={item.idMeal}>
        <Image
            style={{ width: '100%', height: 250, borderRadius: 10 }}
            source={{ uri: item.strMealThumb }}
        />
        <Text
            style={styles.title}
        >
            {item.strMeal}
        </Text>
        <Text style={{fontSize:20, fontWeight:'bold', paddingBottom:5}}>Recipes:</Text>
        <Text style={{textAlign:'auto'}}>
            {item.strInstructions}
        </Text>
        <Text style={{fontSize:20, fontWeight:'bold', paddingBottom:5}}>Country Origin:</Text>
        <Text style={{textAlign:'auto', fontSize:16, fontWeight:'bold', color:'green'}}>
            {item.strArea}
        </Text>
        <Text style={{fontSize:20, fontWeight:'bold', paddingBottom:5}}>Category:</Text>
        <Text style={{textAlign:'auto', fontSize:16, fontWeight:'bold',color:'green'}}>
            {item.strCategory}
        </Text>
        <Video source={{uri: item.strYoutube}}   // Can be a URL or a local file.
        ref={(ref) => {
            this.player = ref
        }}                                      // Store reference
        onBuffer={this.onBuffer}                // Callback when remote video is buffering
        onError={this.videoError}               // Callback when video cannot be loaded
        style={styles.backgroundVideo} />

            </View>
        }
    />
    </View>
);
}
}

const styles = StyleSheet.create({
activityIndicator: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
height: 80
},
title: {
textAlign: 'center',
fontSize: 20,
height: 35,
marginBottom: 10
},
backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
}
});