/**
 * Created by cxd-lvdongjie on 2017/2/14.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var HomeDetail = require('./JJHomeDetail');

var JJHomeTopView = require('./JJHomeTopView');

var MiddleView = require('./JJHomeMiddleView');

var MiddleBottomView = require('./JJHomeMiddleBottomView');

var ShopCenter = require('./JJHomeShopCenter');

var ShopCenterDetail = require('./JJHomeShopCenterDetail');

var GuestYouLike = require('./JJHomeGeustYouLike');

 var JJHome = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*导航条*/}
                {this.renderNavBar()}
                {/*首页内容*/}
                <ScrollView>
                {/*滚动视图*/}
                    <JJHomeTopView />
                {/*中间的内容*/}
                    <MiddleView />
                {/*中间 下半部分的内容*/}
                    <MiddleBottomView
                     popTopHome={(data)=>{this.pushToDetail(data)}}
                    />
                {/*购物中心*/}
                    <ShopCenter
                        popToHome = {(url)=>this.pushToShopCenterDetail(url)}
                    />
                {/*猜你喜欢*/}
                    <GuestYouLike />

                </ScrollView>
            </View>
        );
    },
     //首页的导航条
     renderNavBar(){
        return(
            <View style={styles.navBarStyle}>

                <TouchableOpacity onPress = {()=>{alert('城市')}}>
                    <Text style = {{marginTop:20}}>北京</Text>
                </TouchableOpacity>
                <TextInput
                    placeholder = '请输入内容'
                    style = {styles.textInputStyle}
                />
                <View style={{flexDirection:'row',marginTop:20,alignItems:'center',position:'absolute',right:5,bottom:8}}>
                    <TouchableOpacity onPress = {()=>{alert('消息')}}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {()=>{alert('扫一扫')}}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
     },

     //跳转到二级界面
     pushToDetail(data){
        this.props.navigator.push({
            component: HomeDetail,
            title:'hh',
            passProps:{}
        })
     },

     //跳转到购物中心详情页
     pushToShopCenterDetail(url){

         this.props.navigator.push({
             component: ShopCenterDetail,
             passProps:{'url':this.dealWithUrl(url)}
         })

     },
     //处理url
     dealWithUrl(url){
         return url.replace('imeituan://www.meituan.com/web/?url=','')
     }

})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8e8e8',
    },
    textInputStyle:{
        width:width* 0.7,
        height:34,
        backgroundColor:'white',
        marginTop:25,
        borderRadius:18,
        paddingLeft:10
    },
    navBarStyle:{
        height: Platform.OS == 'ios' ? 64:44,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        alignItems:'center'
    },
    navRightStyle:{
        width:30,
        height:30
    }
});

module.exports = JJHome;