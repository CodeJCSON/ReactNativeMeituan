/**
 * Created by cxd-lvdongjie on 2017/2/14.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var Main = require('./JJMain');

var JJLaunch = React.createClass({
    render() {
        return (
            <Image source={{uri:'launchimage'}} style={styles.launchImageStyle}/>
        );
    },
    componentDidMount(){
        //定时
        setTimeout(() =>{

            this.props.navigator.replace({
                component:Main
            })

        },1000)

    }
})

const styles = StyleSheet.create({
    launchImageStyle:{

        flex:1
    }
});

module.exports = JJLaunch;