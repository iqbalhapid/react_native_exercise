import React, { Component } from "react";
import { View, Text, FlatList, Image} from "react-native";
// import { List, ListItem } from "react-native-elements";

export default class Customer extends Component {
constructor(props) {
    super(props);

    this.state = {
    loading: false,
    data: [],
    page: 1,
    seed: 1,
    error: null,
    refreshing: false,
    };
}

componentDidMount() {
    this.makeRemoteRequest();
}

makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
    .then(res => res.json())
    .then(res => {
        this.setState({
        data: page === 1 ? res.results : [...this.state.data, ...res.results],
        error: res.error || null,
        loading: false,
        refreshing: false
        });
    })
    .catch(error => {
        this.setState({ error, loading: false, refreshing: false });
    });
};

handleRefresh = () => {
    this.setState({
        page : 1,
        refreshing : true,
        seed: this.setState.seed + 1
    }), () => {
        this.makeRemoteRequest();
    }
}

render() {
    return (
        // <List>
        <FlatList
            data={this.state.data}
            keyExtractor={item => item.email}
            renderItem={({ item }) => (
            
                <View>    
                <Text >{`${item.name.first} ${item.name.last}`}</Text>
                <Text>{item.email} </Text>
                <View>
                <Image style={{ width: 40 , height: 40, borderRadius: 10 }} source={{ uri: item.picture.thumbnail }} />
                </View>
                {/* refreshing={this.state.refreshing}
                onRefresh={this.handleRefresh} */}
                </View>
            )}
        />
        // </List>
    );
}
}