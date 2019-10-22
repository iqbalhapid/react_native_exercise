import React, {Component} from 'react';
import {View, Text, Touchable, StyleSheet} from 'react-native';

export default class ForgotPasswrord extends Component{
    render(){
    return(
    <View style={styles.mainWrapper}>
        <View style={styles.contentWrapper}>
        
        <View style={styles.ForgotFormWrap}>
        <View style={styles.HeaderForgot}>
            <Text style={styles.ForgotText}>Forgot to Your Account</Text>
        </View>
        <View style={styles.ForgotForm}>
        <TextInput style={styles.Username} placeholder="Username" />
        <TextInput style={styles.Username} placeholder="Password" />
        <View style={{flexDirection:'row-reverse'}}>
        <TouchableOpacity style={styles.ForgotButton}>
                <Text style={styles.TapForgot}>Forgot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ForgotPasswordButton}>
                <Text style={styles.ForgotPasswordTap}>Register</Text>
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
    ForgotFormWrap:{
        marginHorizontal:17, 
        marginTop: 10
    },
    HeaderForgot:{
        flexDirection:'row', 
        justifyContent:'space-between', 
        backgroundColor:'grey', 
        borderTopLeftRadius: 5, 
        borderTopRightRadius: 5, 
        padding: 14
    },
    ForgotText:{
        fontSize: 17, fontWeight:'bold', color:'white'
    },
    ForgotForm:{
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
    ForgotButton:{
        backgroundColor:'#61A756', 
        paddingHorizontal: 12, 
        paddingVertical: 11, 
        marginHorizontal:4, 
        alignSelf:'flex-end', 
        borderRadius: 4
    },
    TapForgot:{
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