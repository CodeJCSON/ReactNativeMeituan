/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Launch = require('./Component/Main/JJLaunchImage');

export default class MeituanRN extends Component {
  render() {
    return (
        <Navigator
            initialRoute={{name:'启动页',component:Launch}}
            configureScene={()=>{
              return Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route,navigator)=>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator}/>;
            }}
        />
    );
  }
}


AppRegistry.registerComponent('MeituanRN', () => MeituanRN);

