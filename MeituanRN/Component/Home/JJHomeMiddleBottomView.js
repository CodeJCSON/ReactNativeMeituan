/**
 * Created by cxd-lvdongjie on 2017/2/14.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

var Dimensions = require('Dimensions');

var {width,height} = Dimensions.get('window');

var HomeMiddleCommonView = require('./JJHomeMiddleCommonView');

var Home_D4 = require('../../LocalData/XMG_Home_D4.json');

var HomeMiddleBottomView = React.createClass({

    getDefaultProps(){
        return{
            // 回调函数
            popTopHome: null
        }
    },
    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <View style={styles.topViewStyle}></View>
                {/*下面的视图*/}
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomViewItem()}
                </View>
            </View>
        );
    },
    //返回下面的视图
    renderBottomViewItem(){

        var childVc = [];
        //拿到数据
        var DataArr = Home_D4.data;
        for (var i = 0; i < DataArr.length;i++){
            //取出单独的数据
            var itemData = DataArr[i];
            childVc.push(
                <HomeMiddleCommonView key = {i}
                    title = {itemData.maintitle}
                    subTitle = {itemData.deputytitle}
                    rightIcon = {this.dealWithImageUrl(itemData.imageurl)}
                    titleColor = {itemData.typeface_color}
                    tplurl={itemData.tplurl}
                    callBackClickCell={(data)=>this.popToTopView(data)}

                />
            )
        }

        return childVc;
    },
    //处理图像的尺寸
    dealWithImageUrl(url){

        if (url.search('w.h') == -1){ //没有找到 w.h
            return url
        }else {
            return url.replace('w.h','120.90')
        }
    },
    //回调函数  继续往父级界面传递数据
    popToTopView(data){
        // 继续执行回调函数
        this.props.popTopHome(data);
    }
})

const styles = StyleSheet.create({
    container: {
        marginTop:15,
        height :120
    },
    topViewStyle:{

    },
    bottomViewStyle:{
        flexDirection:'row',
        width:width,
        flexWrap:'wrap',
        height:60
    }
});

module.exports = HomeMiddleBottomView;
