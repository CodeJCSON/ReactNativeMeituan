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
    TouchableOpacity
} from 'react-native';

var HomeMiddleCommonView = require('./JJHomeMiddleCommonView');

var MiddleData = require('../../LocalData/HomeTopMiddleLeft.json');

var Dimensions = require('Dimensions');

var {width,height} = Dimensions.get('window');

var JJHomeMiddleView = React.createClass({
    render() {
        return (
            <View style={styles.container}>
                {/*左边View*/}
                {this.renderLeftView()}
                {/*右边View*/}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        );
    },
    //左边的View
    renderLeftView(){

        //拿到数据
        var data = MiddleData.dataLeft[0];

        return(
            <TouchableOpacity onPress = {()=>{alert(data.title)}}>
            <View style={styles.leftViewStyle}>
                <Image source={{uri:data.img1}} style={styles.leftImageStyle}/>
                <Image source={{uri:data.img2}} style={styles.leftImageStyle}/>
                <Text style={{color:'gray'}}>{data.title}</Text>

                <View style={{flexDirection:'row', marginTop:5}}>
                    <Text style={{color:'blue', marginRight:5}}>{data.price}</Text>
                    <Text style={{color:'orange', backgroundColor:'yellow'}}>{data.sale}</Text>
                </View>

            </View>
            </TouchableOpacity>
        )
    },
    //右边的View
    renderRightView(){
        var childView = [];

        var rightData = MiddleData.dataRight;
        for (var i =0; i <rightData.length;i++ ){
            childView.push(
                <HomeMiddleCommonView key = {i}
                   title={rightData[i].title}
                   subTitle ={rightData[i].subTitle}
                   rightIcon = {rightData[i].rightImage}
                   titleColor = {rightData[i].titleColor}
                />
            )
        }

        return childView;
    }
})

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        flexDirection:'row'
    },
    leftImageStyle:{
        width:100,
        height:30,
        //图片的内容模式
        resizeMode:'contain'
    },
    leftViewStyle:{
        width:width /2,
        height:119,
        backgroundColor:'white',
        marginRight:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

module.exports = JJHomeMiddleView;