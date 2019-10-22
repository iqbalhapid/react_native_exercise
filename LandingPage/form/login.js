import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default class Login extends Component{
    static navigationOption = {
        title : 'Login'
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
        <TextInput style={styles.Username} placeholder="Username" />
        <TextInput style={styles.Username} placeholder="Password" />
        <View style={{flexDirection:'row-reverse'}}>
        <TouchableOpacity style={styles.LoginButton}>
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