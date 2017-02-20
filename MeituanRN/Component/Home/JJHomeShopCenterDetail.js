/**
 * Created by cxd-lvdongjie on 2017/2/15.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Image,
    TouchableOpacity,
    WebView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var JJHomeShopCenterDetail = React.createClass({

    getInitialState(){
      return{
        detailUrl:this.props.url + ''
      }
    },

    render() {
        return (
            <View style={styles.container}>
                {this.renderNavBar()}

                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                />
            </View>
        );
    },
    //导航
    renderNavBar(){

        return(
            <View style={styles.navViewStyle}>

                <TouchableOpacity onPress = {()=>{this.props.navigator.pop()}} style={styles.leftStyle}>
                    <Image source={{uri:'icon_camera_back_normal'}} style={styles.navImageStyle}/>
                </TouchableOpacity>

                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>详情</Text>
                <TouchableOpacity onPress = {()=>{alert('设置')}} style={styles.rightImageStyle}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            </View>
        )
    }
})

const styles = StyleSheet.create({
    container: {
        width:width,
        height:height
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    navImageStyle:{
        width:30,
        height:30,

    },
    navViewStyle:{
        height: Platform.OS == 'ios' ? 64:44,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    rightImageStyle:{
        position:'absolute',
        right:10,
        bottom:15
    },
    leftStyle:{
        position:'absolute',
        left:10,
        bottom:Platform.OS == 'ios' ? 10:10
    }
});

module.exports = JJHomeShopCenterDetail;