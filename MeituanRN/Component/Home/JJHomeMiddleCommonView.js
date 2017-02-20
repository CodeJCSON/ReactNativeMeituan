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

var Dimensions = require('Dimensions');

var {width,height} = Dimensions.get('window');
//二级界面
var HomeDetail = require('./JJHomeDetail');

var HomeMiddleCommonView = React.createClass({

    //属性
    getDefaultProps(){
        return{
            title:'',       //标题
            subTitle:'',    //副标题
            rightIcon:'',   //图片
            titleColor:'',   //文字颜色
            tplurl: '', //下级界面的URL路径
            // 回调函数
            callBackClickCell: null
        }
    },

    render() {
        return (
            <TouchableOpacity onPress = {()=>this.clickCell(this.props.tplurl)}>
            <View style={styles.container}>
                {/*左边*/}
                <View>
                    <Text style={[{color:this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
                    <Text style={styles.subTitleStyle}>{this.props.subTitle}</Text>
                </View>
                {/*右边的图片*/}
                <Image source={{uri:this.props.rightIcon}} style={{width:64 ,height:43 ,resizeMode:'contain'}}/>
            </View>
            </TouchableOpacity>
        );
    },

    //点击事件
    clickCell(data){
        if (this.props.callBackClickCell == null) return;
        // 执行回调函数
        this.props.callBackClickCell(data);
    }
})

const styles = StyleSheet.create({
    container: {
        width: width / 2 -1,
        backgroundColor:'white',
        height:59,
        flexDirection:'row',
        marginBottom:1,
        alignItems:'center',
        justifyContent:'space-around',
        marginRight:1,
    },
    subTitleStyle:{
        color:'gray',

    },
    titleStyle:{
        fontSize:18 ,
        fontWeight:'bold'
    }
});

module.exports = HomeMiddleCommonView;