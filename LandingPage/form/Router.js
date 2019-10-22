import React from 'react';
import { View } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import LandingPage from '../LandingPage'
import Login from './login';
import Register from './register';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
            }
        },
        Login: {
            screen: Login,
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
        }
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
