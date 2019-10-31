import React from 'react';
import { View } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import LandingPage from '../LandingPage'
import Login from './login';
import Register from './register';
import Admin from './adminPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const AdminNav = createStackNavigator({
    Admin: {screen: Admin},
    Login : {screen: Login}
},{initialRouteName: 'Login'},{defaultNavigationOptions:{header: null}})


AdminNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0 ){
        tabBarVisible = false;
    }
    return {tabBarVisible};
}



    const RootStack = createMaterialBottomTabNavigator(
        {
        LandingPage: {
            screen: LandingPage,
            navigationOptions: {
            tabBarLabel: 'LandingPage',
            tabBarIcon: ({ tintColor }) => (
                <View>
                <MaterialIcons style={[{ color: tintColor }]} size={25} name={'home'} />
                </View>),
                activeColor: '#f0edf6',
                inactiveColor: 'gray',
                barStyle: { backgroundColor: 'lightgray' },
            }
        },
        Login: {
            screen: AdminNav,
            navigationOptions: {
            tabBarLabel: 'Login',
            tabBarIcon: ({ tintColor }) => (
                <View>
                <MaterialIcons style={[{ color: tintColor }]} size={25} name={'person'} />
                </View>),
        activeColor: '#f0edf6',
        inactiveColor: 'gray',
        barStyle: { backgroundColor: 'lightgray' },
            }
        },
        Register: {
            screen: Register,
            navigationOptions: {
            tabBarLabel: 'Register',
            tabBarIcon: ({ tintColor }) => (
                <View>
                <MaterialIcons style={[{ color: tintColor }]} size={25} name={'person-add'} />
                </View>),
        activeColor: '#f0edf6',
        inactiveColor: 'gray',
        barStyle: { backgroundColor: 'lightgray' },
            }
        },
        // Admin: {
        //     screen: Admin
        // }
    },
    {
    initialRouteName: "LandingPage",
    activeColor: '#f0edf6',
    inactiveColor: 'gray',
    barStyle: { backgroundColor: 'lightgray' },
    },
);

const Container = createAppContainer(RootStack);

export default Container;
