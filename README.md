# react_native_exercise

how to switch the project just make a index.js at the root of the project react-native

for example if you want to run todo app

/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import App from './src/TodoList/App'
import {name as appName} from './app.json';
AppRegistry.registerComponent(appName, () => App);

// import App from './App';
// import AnyImage  from './src/ImageViewer/AnyImage';
// import SimpleCalculator  from './src/SimpleCalculator/SimpleCalculator';
// import {name as appName} from './app.json';

// // AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => SimpleCalculator);
