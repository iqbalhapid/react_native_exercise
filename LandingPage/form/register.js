import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, Alert} from 'react-native';

export default class Register extends Component{
    constructor(props){
        super(props);

        this.state={
            name: '',
            Username: '',
            email:'',
            password:'',
        }
    }
    
    static navigationOption = {
        title : 'Register'
    }

    handlePress = async () => {
        const { name, username, email, password, cpassword } = this.state
        try{
            let response = await fetch('http://192.168.42.130:9999/auth/register', {
                method: 'POST',
                headers: {
                    Accept : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                        name: name,
                        username : username,
                        email: email,
                        password: password
                })
            });
            let responseJson = await response.json()
            if (password != cpassword ){
            Alert.alert('password you type didnt match ')
            } else if (responseJson.statusCode == 201){
                Alert.alert('Registration Successfull')
            } else {
                Alert.alert('please fill all the form')
            }
            } catch (error) {
                console.error(error)
            }
        }



    render(){
    return(
    <View style={styles.mainWrapper}>
        <View style={styles.contentWrapper}>
        
        <View style={styles.RegisterFormWrap}>
        <View style={styles.HeaderRegister}>
            <Text style={styles.RegisterText}>Register to Your Account</Text>
        </View>
        <View style={styles.RegisterForm}>
        <TextInput style={styles.Username} placeholder="name" 
        onChangeText={(text) => this.setState({name: text})} />
        <TextInput style={styles.Username} placeholder="Username" 
        onChangeText={(text) => this.setState({username: text})}/>
        <TextInput style={styles.Username} placeholder="Email" 
        onChangeText={(text) => this.setState({email: text})}/>
        <TextInput style={styles.Username} placeholder="Password" 
        onChangeText={(text) => this.setState({password: text})} secureTextEntry={true} />
        <TextInput style={styles.Username} placeholder="Confirm password" 
        onChangeText={(text) => this.setState({cpassword: text})} secureTextEntry={true} />
        <View style={{flexDirection:'row-reverse'}}>
        <TouchableOpacity style={styles.RegisterButton} onPress={ () => this.handlePress()}>
                <Text style={styles.TapRegister}>Submit</Text>
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
    RegisterFormWrap:{
        marginHorizontal:17, 
        marginTop: 10
    },
    HeaderRegister:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        backgroundColor:'grey', 
        borderTopLeftRadius: 5, 
        borderTopRightRadius: 5, 
        padding: 14
    },
    RegisterText:{
        fontSize: 17, fontWeight:'bold', color:'white'
    },
    RegisterForm:{
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
    RegisterButton:{
        backgroundColor:'#61A756', 
        paddingHorizontal: 12, 
        paddingVertical: 11, 
        marginHorizontal:4, 
        alignSelf:'flex-end', 
        borderRadius: 4
    },
    TapRegister:{
        fontSize:13, 
        fontWeight:'bold', 
        color:'white', 
        textAlign:'center'
    },
    ForgotPasswordButton:{
        backgroundColor:'orange', 
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