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
  View,
  Navigator,
  AsyncStorage
} from 'react-native';


var Newfeature = require('./Component/Main/JJNewfeature');

var Main = require('./Component/Main/JJMain');

export default class MeituanRN extends Component {


  constructor(props) {
    super(props);
    this.state = { WhichView: 'wait' };
  }
  componentDidMount() {
    this.checkLogin();
  }
  checkLogin() {
    var newfeature;
    AsyncStorage.getItem(
        'newfeature',
        (error,result)=>{
          if (error){
            newfeature = false;
          }else{
            if (!result){
              {this.saveData()};
              newfeature = true;
              this.setState({ WhichView: 'newfeature' });
            }else {
              newfeature = false;
              this.setState({ WhichView: 'mainView' });
            }
          }
        }
    )
  }
  render() {
    const { WhichView } = this.state;
    switch(WhichView) {
      case 'wait':
        return <View />;
      case 'newfeature':
        console.log('新特性');
        return <Navigator
            initialRoute={{name:'Newfeature',component:Newfeature}}
            configureScene={()=>{
              return Navigator.SceneConfigs.PushFromRight;
            }}
            renderScene={(route,navigator)=>{
              let Component = route.component;
              return <Component {...route.passProps} navigator={navigator}/>;
            }}
        />;
      case 'mainView':
        console.log('主要界面');
        return <Main />;
    }
  }

  //存值
  saveData(){
    try {
      AsyncStorage.setItem(
          'newfeature7',
          'nofirst',
          (error)=>{
            if (error){
              alert('存值失败:',error);
            }else{
              // alert('存值成功!');
            }
          }
      );
    } catch (error){
      alert('失败'+error);
    }
  }




}


AppRegistry.registerComponent('MeituanRN', () => MeituanRN);
