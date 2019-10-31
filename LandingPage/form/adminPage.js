import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator, FlatList} from 'react-native';
import TokenStore from '../mobx/tokenStore';

export default class Admin extends Component{
    constructor(props){
        super(props);

        this.state = {
        isloading : true,
        usersList : []
        }
    }

    static navigationOption = {
        title : 'Admin',
        header : null
        
    }
    
    async componentDidMount(){
        try{
        let res = await fetch('http://192.168.42.130:9999/users', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: TokenStore.getToken()
            }
        });
        const resJson = await res.json()
        this.setState({
            isLoading: false,
            usersList: resJson.users
        });
    }
    catch(error){
        console.log(error)
    }
}

    renderItem(data) {
        return(
        <View style={styles.mainWrapper}>
            <View style={styles.contentWrapper}>
            <View style={styles.LoginFormWrap}>
            <View style={styles.HeaderLogin}>
                <Text style={styles.LoginText}>{data.item.name}</Text>
            </View>
            <View style={styles.LoginForm}>
                <View style={{marginLeft: 10}}>
                <Text style={styles.subLoginText}>Username : {data.item.username}</Text>
                </View>
                <View style={{marginLeft: 10}}>
                <Text style={styles.subLoginText}>Email : {data.item.email}</Text>
                </View>
            </View>
            </View>
            </View>
            </View>
            );
    }
    
    render() {
        const{ usersList, isLoading } = this.state;
        if(!isLoading){
            return(
                <FlatList
                data = {usersList}
                renderItem = {this.renderItem}
                keyExtractor = {(item) => item.name}
                />
            
            )
        } else {
            return <ActivityIndicator />
        }
    
    }
}

const styles = StyleSheet.create({
    mainWrapper:{
        flex:1
    },
    contentWrapper:{
        flex:1,
        backgroundColor:'white'
    },
    LoginFormWrap:{
        marginHorizontal:17, 
        marginTop: 10
    },
    HeaderLogin:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        backgroundColor:'grey', 
        borderTopLeftRadius: 5, 
        borderTopRightRadius: 5, 
        padding: 14
    },
    LoginText:{
        fontSize: 17, fontWeight:'bold', color:'white'
    },
    subLoginText:{
        fontSize: 17, fontWeight:'bold', color:'grey', textAlign: "auto"
    },
    LoginForm:{
        paddingTop: 20, 
        paddingBottom: 14,
        borderBottomLeftRadius: 5, 
        borderBottomLeftRadius: 5, 
        backgroundColor: 'lightgrey'
    },
    Username:{ 
        borderBottomWidth: 1, 
        borderColor:'#E8E8E8',
        height: 40, 
        fontSize: 13, 
        marginHorizontal: 4, 
        marginVertical: 4, 
        borderRadius: 5
    },
    LoginButton:{
        backgroundColor:'#61A756', 
        paddingHorizontal: 12, 
        paddingVertical: 11, 
        marginHorizontal:4, 
        alignSelf:'flex-end', 
        borderRadius: 4
    },
    TapLogin:{
        fontSize:13, 
        fontWeight:'bold', 
        color:'white', 
        textAlign:'center'
    },
    ForgotPasswordButton:{
        backgroundColor:'lightblue', 
        paddingHorizontal: 12, 
        paddingVertical: 11, 
        alignSelf:'flex-end', 
        borderRadius: 4
    },
    ForgotPasswordTap:{
        fontSize:13, 
        fontWeight:'bold', 
        color:'white', 
        textAlign:'center'
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80
        }
})