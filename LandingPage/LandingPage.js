import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import CardBoard from '../CardBoard/CardBoard';

export default class LandingPage extends Component{
    render(){
        return(
        // Wrapper page utuh
        <View style={styles.mainWrapper}>
            {/* Wrapper Konten */}
            <ScrollView style={styles.contentWrapper}>
            {/* Welcome Message */}
            <View style={styles.WelcomeBar}>
                <View style={styles.WelcomeWrap}>
                    <TextInput placeholder="Hi there, Whats up ?" style={styles.WelcomeText} />
                    <Image source={require('./icon/smile.png')} style={styles.WelcomeIco}/>
                </View>
                {/* Greeting Icon */}
                <View style={styles.GreetingWrap}>
                    <Image style={{height:27, width: 27}}source={require('./icon/hand.png')} />
                </View>
            </View>
            {/* Akhir dari Welcome Message */}

            {/* Login Form */}
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
            <TouchableOpacity style={{backgroundColor:'orange', paddingHorizontal: 12, paddingVertical: 11, alignSelf:'flex-end', borderRadius: 4}}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'white', textAlign:'center'}}>Forgot Password ?</Text>
            </TouchableOpacity>
            </View>
            </View>
            
            </View>


            {/*Awal Big Banner */}
                <View style={{backgroundColor:'#F2F2F4', height:16, marginTop:20}}></View>
            {/* NewsSection */}
            <View style={{paddingTop: 16, paddingHorizontal: 16}}>
            <View style={{position:'relative'}}>
                <Image source={require('./img/food-banner.jpg')} style={{height: 170, width: '100%', borderRadius: 6}}/>
                <View style={{width: '100%', height:'100%', position:'absolute', top:0, left:0, backgroundColor:'black', opacity:0.2, borderRadius:6 }}></View>
            </View>
            <View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor:'#EBE9ED', borderBottomWidth:1, marginBottom: 20}}>
                <Text style={{fontSize: 16, fontWeight:'bold', color: '#1C1C1C'}}>Our Company</Text>
                <Text style={{fontSize: 14, fontWeight:'normal', color: '#7A7A7A'}}>We Can deliver our best food and beverages globe around the world in minutes</Text>
            {/* Button under article/ News */}
            <TouchableOpacity style={{backgroundColor:'#61A756', paddingHorizontal: 12, paddingVertical: 11, alignSelf:'flex-end', borderRadius: 4}}>
                    <Text style={{fontSize:13, fontWeight:'bold', color:'white', textAlign:'center'}}>READ</Text>
            </TouchableOpacity>
            </View>
            </View>
            {/* Akhir dari Big Banner */}
            <View>
                <CardBoard />
            </View>
            </ScrollView>


            {/* Awal Bar Navigasi Bawah */}
            <View style={styles.NavBottom}>
        
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>            
                <Image style={styles.NavIcon} source={require('./icon/google.png')} />
                <Text style={styles.NavText}>Login</Text>
            </View>

            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>            
                <Image style={styles.NavIcon} source={require('./icon/user.png')} />
                <Text style={styles.NavText}>Register</Text>
            </View>

            </View>
            {/* Akhir Navigasi Bawah */}

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
    WelcomeBar:{
        marginHorizontal: 17, 
        flexDirection:'row', 
        paddingTop: 15
    },
    WelcomeWrap:{
        position:'relative', 
        flex: 1
    },
    WelcomeText:{
        borderWidth: 1, 
        borderColor:'#E8E8E8', 
        borderRadius:25, 
        height: 40, 
        fontSize: 13, 
        paddingLeft: 45, 
        paddingRight: 20, 
        backgroundColor: 'white', 
        marginRight:18
    },
    WelcomeIco:{
        position:'absolute',
        top:8, 
        left:12,
        width: 27,
        height: 27
    },
    GreetingWrap:{
        width: 35, 
        alignItems:'center', 
        justifyContent:'center'
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
    NavBottom:{
        height:54,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    NavIcon: {
        width: 26,
        height: 26
    },
    NavText:{
        fontSize: 10,
        color:'#545454',
        marginTop: 4
    }
});