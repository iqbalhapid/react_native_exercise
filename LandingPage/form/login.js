import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, AsyncStorage} from 'react-native';
import TokenStore from '../mobx/tokenStore';

export default class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            email : '',
            password : ''
        }
    }

    static navigationOption = {
        title : 'Login'
        
    }
    

    handlePress = async () => {
        const { email, password } = this.state
        try{
            let response = await fetch('http://192.168.42.130:9999/auth/login', {
                method: 'POST',
                headers: {
                    Accept : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                        email: email,
                        password: password
                })
            });
            let responseJson = await response.json()
            TokenStore.updateToken(responseJson.accessToken)
            if (responseJson.auth == true ){
            Alert.alert('Alert Title',
            'My Alert Msg',
            [
                {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
                {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
                },
                {text: 'OK', onPress: () =>{ this.props.navigation.navigate("Admin")}},
            ],
            {cancelable: false},)
            
            // Alert.alert(responseJson.accessToken.toString())
            // AsyncStorage.setItem('jwt', responseJSon.accessToken)
            } else {
                Alert.alert('Uncorrect email or password')
            }
            } catch (error) {
                console.error(error)
            }
        }
    

    render(){
    return(
    <View style={styles.mainWrapper}>
        <View style={styles.contentWrapper}>
        
        <View style={styles.LoginFormWrap}>
        <View style={styles.HeaderLogin}>
            <Text style={styles.LoginText}>Login to Your Account</Text>
        </View>
        <View style={styles.LoginForm}>
        <TextInput style={styles.Username} placeholder="Username" 
                    returnKeyLabel={'next'} onChangeText={(text) => this.setState({email: text})} />
        <TextInput style={styles.Username} placeholder="Password" secureTextEntry={true}
                    returnKeyLabel={'next'} onChangeText={(text) => this.setState({password: text})}/>
        <View style={{flexDirection:'row-reverse'}}>
        <TouchableOpacity style={styles.LoginButton} onPress={() => this.handlePress()}>
                <Text style={styles.TapLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ForgotPasswordButton} onPress={() => this.props.navigation.navigate("Register")}>
                <Text style={styles.ForgotPasswordTap}>Not a Member? Sign Up !</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
        </View>
    </View>
        );
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
    }
})