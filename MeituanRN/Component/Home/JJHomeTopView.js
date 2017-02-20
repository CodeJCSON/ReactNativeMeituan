/**
 * Created by cxd-lvdongjie on 2017/2/14.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var JJHomeTopListView = require('./JJHomeTopListView');

var TopMenu = require('../../LocalData/TopMenu.json');

var JJHomeTopView = React.createClass({

    getInitialState(){
      return{
          activePage:0
      }
    },

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal = {true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd = {this.onScrollAnimationEnd}
                >
                    {/*上面的滚动式图*/}
                    {this.renderTopView()}
                </ScrollView>
                {/*页码*/}
                <View style={{flexDirection:'row' ,backgroundColor:'transparent' ,alignItems:'center' ,justifyContent:'center',height:30}}>
                    {this.renderCircleView()}
                </View>
            </View>
        );
    },

    renderTopView(){

        var childVc = [];

        var dataArr = TopMenu.data;

        for (var i = 0;i<dataArr.length;i++){
            childVc.push(
                <JJHomeTopListView key = {i}
                    dataArr={dataArr[i]}
                />
            )
        }
        return childVc;
    },
    //页码视图
    renderCircleView(){
        var childVc = [] , style;
        for (var i = 0;i<2;i++){
            style = (this.state.activePage === i) ? {color:'orange'} :{color:'gray'};
            childVc.push(
                <Text key = {i} style={[style,{fontSize:25}]}>&bull;</Text>
            )
        }

        return childVc;
    },
    //一帧滚动结束的时候调用
    onScrollAnimationEnd(e){
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x /width);
        this.setState({
            activePage: currentPage
        });
    }
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
    }
});

module.exports = JJHomeTopView;
