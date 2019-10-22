import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import CardBoard from '../CardBoard/CardBoard';

export default class LandingPage extends Component{
    static navigationOptions = {
        header : null
    };
    render(){
        return(
        // Wrapper page utuh
        <View style={styles.mainWrapper}>
            {/* Welcome Message */}
            <View style={styles.WelcomeBar}>
                <View style={styles.WelcomeWrap}>
                    <TextInput placeholder="Hi what do you want to eat today ?" style={styles.WelcomeText} />
                    <Image source={require('./icon/smile.png')} style={styles.WelcomeIco}/>
                </View>
                {/* Greeting Icon */}
                <View style={styles.GreetingWrap}>
                    <TouchableOpacity style={styles.NavBArMenuWrap} onPress={()=>this.props.navigation.push("Login")}>            
                            <Image style={styles.NavIcon} source={require('./icon/login.jpg')} />
                            <Text style={styles.NavText}>Login</Text>
                    </TouchableOpacity>

                </View>
            </View>
            {/* Akhir dari Welcome Message */}

            {/*Awal Big Banner */}
            <View style={styles.BorderSeparate}></View>

            {/* Wrapper Konten */}
            <ScrollView style={styles.contentWrapper}>
            {/* NewsSection */}
            <View style={styles.BannerWrap}>
            <View style={styles.ImgBannerWrap}>
                <Image source={require('./img/food-banner.jpg')} style={styles.ImgBanner}/>
                <View style={styles.ImgMask}></View>
            </View>
            <View style={styles.CompanyProfileWrap}>
                <Text style={styles.CompanyHeaderText}>Steak Wagyu</Text>
                <Text style={styles.CompanyDescText}>We Can deliver our best food and beverages globe around the world in minutes</Text>
            {/* Button under article/ News */}
            <TouchableOpacity style={styles.ReadButton}>
                    <Text style={styles.ReadButtonTeks}>BUY</Text>
            </TouchableOpacity>
            </View>
            </View>
            {/* Akhir dari Big Banner */}
             {/*Awal Big Banner */}
            {/* <View style={styles.BorderSeparate}></View> */}
            {/* NewsSection */}
            <View style={styles.BannerWrap}>
            <View style={styles.ImgBannerWrap}>
                <Image source={require('./img/go-food-gm.jpg')} style={styles.ImgBanner}/>
                <View style={styles.ImgMask}></View>
            </View>
            <View style={styles.CompanyProfileWrap}>
                <Text style={styles.CompanyHeaderText}>Bakmi GM</Text>
                <Text style={styles.CompanyDescText}>We Can deliver our best food and beverages globe around the world in minutes</Text>
            {/* Button under article/ News */}
            <TouchableOpacity style={styles.ReadButton}>
                    <Text style={styles.ReadButtonTeks}>BUY</Text>
            </TouchableOpacity>
            </View>
            </View>
            {/* Akhir dari Big Banner */}
            <View style={styles.BannerWrap}>
            <View style={styles.ImgBannerWrap}>
                <Image source={require('./img/go-food-kfc.jpg')} style={styles.ImgBanner}/>
                <View style={styles.ImgMask}></View>
            </View>
            <View style={styles.CompanyProfileWrap}>
                <Text style={styles.CompanyHeaderText}>Kentucky Fried Chicken</Text>
                <Text style={styles.CompanyDescText}>We Can deliver our best food and beverages globe around the world in minutes</Text>
            {/* Button under article/ News */}
            <TouchableOpacity style={styles.ReadButton}>
                    <Text style={styles.ReadButtonTeks}>BUY</Text>
            </TouchableOpacity>
            </View>
            </View>
            {/* Akhir dari Big Banner */}
            <View>
                <CardBoard />
            </View>
            </ScrollView>


            {/* Awal Bar Navigasi Bawah */}
            {/* <View style={styles.NavBottom}>
        
            <TouchableOpacity style={styles.NavBArMenuWrap} onPress={()=>this.props.navigation.push("Login")}>            
                <Image style={styles.NavIcon} source={require('./icon/login.jpg')} />
                <Text style={styles.NavText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.NavBArMenuWrap} onPress={() => this.props.navigation.navigate("Register")}>            
                <Image style={styles.NavIcon} source={require('./icon/user.png')} />
                <Text style={styles.NavText}>Register</Text>
            </TouchableOpacity>

            </View> */}
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
    },
    BorderSeparate: {
        backgroundColor:'#F2F2F4', 
        height:16, marginTop:20
    },
    BannerWrap:{
        paddingTop: 16, 
        paddingHorizontal: 16
    },
    ImgBannerWrap:{position:'relative'},

    ImgBanner:{height: 170, width: '100%', 
    borderRadius: 6
    },
    ImgMask:{
        width: '100%', 
        height:'100%', 
        position:'absolute', 
        top:0, 
        left:0, 
        backgroundColor:'black', 
        opacity:0.2, 
        borderRadius:6 
    },
    CompanyProfileWrap:{
        paddingTop: 16, 
        paddingBottom: 20, 
        borderBottomColor:'#EBE9ED', 
        borderBottomWidth:1, 
        marginBottom: 20
    },
    CompanyHeaderText:{
        fontSize: 16, 
        fontWeight:'bold',
        color: '#1C1C1C'
    },
    CompanyDescText:{
        fontSize: 14, 
        fontWeight:'normal', 
        color: '#7A7A7A'
    },
    ReadButton:{
        backgroundColor:'#61A756', 
        paddingHorizontal: 12, 
        paddingVertical: 11, 
        alignSelf:'flex-end', 
        borderRadius: 4
    },
    ReadButtonTeks:{
        fontSize:13, 
        fontWeight:'bold', 
        color:'white', 
        textAlign:'center'
    },
    NavBArMenuWrap:{
        flex:1, 
        alignItems: 'center', 
        justifyContent: 'center'
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