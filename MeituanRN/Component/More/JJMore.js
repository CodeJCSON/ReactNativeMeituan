/**
 * Created by cxd-lvdongjie on 2017/2/14.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    ScrollView
} from 'react-native';


var CommonCell = require('./JJCommonCell');

var JJMore = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}

                <ScrollView>

                    <View style={{marginTop:20}}>
                        <CommonCell
                            title='扫一扫'
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="省流量模式"
                            isSwitch={true}
                        />
                        <CommonCell
                            title="消息提醒"
                        />
                        <CommonCell
                            title="邀请好友使用码团"
                        />
                        <CommonCell
                            title="清空缓存"
                            rightTitle="1.99M"
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="问卷调查"
                        />
                        <CommonCell
                            title="支付帮助"
                        />
                        <CommonCell
                            title="网络诊断"
                        />
                        <CommonCell
                            title="关于码团"
                        />
                        <CommonCell
                            title="我要应聘"
                        />
                    </View>

                    <View style={{marginTop:20}}>
                        <CommonCell
                            title="精品应用"
                        />
                    </View>
                </ScrollView>

            </View>
        );
    },
    renderNavBar(){

        return(
            <View style={styles.navViewStyle}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>更多</Text>
                <TouchableOpacity onPress = {()=>{alert('设置')}} style={styles.rightImageStyle}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            </View>
        )
    }

})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
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
    }
});

module.exports = JJMore;