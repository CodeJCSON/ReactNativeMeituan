/**
 * Created by cxd-lvdongjie on 2017/2/14.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

var JJHomeDetail = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {this.popTopHome()}}>
                    <Text style={styles.welcome}>
                        JJHomeDetail!
                    </Text>
                </TouchableOpacity>
            </View>
        );
    },
    popTopHome(){
        this.props.navigator.pop();
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
});

module.exports = JJHomeDetail;