/**
 * Created by cxd-lvdongjie on 2017/2/15.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
/*--------------------------------首页的购物中心------------------------------*/

var CommonCell = require('./JJHomeBottomCell');

var JJHomeShopCenter = React.createClass({

    getDefaultProps(){
        //回调函数
        return{
            popToHome: null
        }
    },

    render() {
        return (
            <View style={styles.container}>
                {/*上部分*/}
                <CommonCell
                    leftIcon= 'gw'
                    leftTitle='购物中心'
                    rightTitle={Home_D5.tips}
                />
                {/*下部分*/}
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.scrollViewStyle}
                >
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    },
    //返回下部所有的item
    renderAllItem(){
        var childVc = [];

        var shopData = Home_D5.data;

        for (var i = 0;i< shopData.length;i++){

            var item = shopData[i];
            childVc.push(
                <ShopCenterItem
                    shopImage = {item.img}
                    shopName = {item.showtext.text}
                    shopSale = {item.name}
                    detailurl = {item.detailurl}
                    key = {i}
                    popToShopCenter = {(url) => this.popToHome(url)}
                />
            )
        }
        return childVc;
    },

    popToHome(url){
        if (this.props.popToHome == null) return;
        //执行回调函数
        this.props.popToHome(url);
    }
})

/*--------------------------------每一个商场------------------------------*/

var Home_D5 = require('../../LocalData/XMG_Home_D5.json');

var ShopCenterItem = React.createClass({

    getDefaultProps(){
        return{
            shopImage:'',
            shopName :'',
            shopSale :'',
            detailurl:'',
            popToShopCenter: null
        }
    },

    render (){
        return(
            <TouchableOpacity onPress = {()=>{this.clickCell(this.props.detailurl)}}>
                <View style={styles.cellStyle}>
                    <Image source={{uri:this.props.shopImage}} style={styles.imageStyle}/>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        )
    },
    //点击事件
    clickCell(url){
        if (this.props.popToShopCenter == null) return;

        //执行回调函数
        this.props.popToShopCenter(url);
    }

})

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
        marginTop:15
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    imageStyle:{
        width:120,
        height:100,
        borderRadius:8
    },
    scrollViewStyle:{
        backgroundColor:'white',
        padding:10
    },
    cellStyle:{
        margin:8
    },
    shopSaleStyle:{
        position:'absolute',
        left:0,
        bottom:30,
        backgroundColor:'red',
        padding:3
    },
    shopNameStyle:{
        textAlign:'center',
        marginTop:5
    }
});

module.exports = JJHomeShopCenter;