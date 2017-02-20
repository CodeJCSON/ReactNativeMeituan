/**
 * Created by cxd-lvdongjie on 2017/2/16.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Image,
    TouchableOpacity,
    AsyncStorage,
    Animated
} from 'react-native';

var Dimensions = require('Dimensions');

//取消警告
console.disableYellowBox = true;

var Main = require('./JJMain');

var {width,height} = Dimensions.get('window');

var imageData = require('./JJNewfeatureData.json');


var JJNewfeature = React.createClass ({
    getInitialState(){
        return{
            currentPageIndex: 0,
            title:'',
            titleW:0,
            titleH:0,
            titlePadding:0,
            bounceValue: new Animated.Value(0.5),
        }
    },
    render() {
        return (
            <View>
                <ScrollView
                    ref="scrollViewNew"
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    onMomentumScrollEnd={(e)=>this.onAnimationEnd(e)}
                    onScrollBeginDrag={this.onScrollBeginDrag}
                    onScrollEndDrag={this.onScrollEndDrag}
                >
                    {this.renderChildView()}
                </ScrollView>

                <View style={styles.touchViewStyle}>
                    <TouchableOpacity activeOpacity={0.5}
                                      onPress= {()=>this.renderPress()}
                    >
                        {/*<Text style={[styles.textStyle,{width:this.state.titleW, height:this.state.titleH, padding:this.state.titlePadding}]}>{this.state.title}</Text>*/}
                        <Animated.Text
                            style={
                                [styles.textStyle,{transform: [{scale: this.state.bounceValue}],width:this.state.titleW, height:this.state.titleH, padding:this.state.titlePadding}]
                            }
                        >{this.state.title}</Animated.Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    },
    renderPress(){
        this.props.navigator.replace({
            component:Main
        })
    },
    onAnimationEnd(e){
        var offSetX = e.nativeEvent.contentOffset.x;
        var activePage = Math.floor(offSetX / width);
        this.setState({
            currentPageIndex: activePage,

        });

        if (activePage == 3) {
            this.setState({
                title: '点击进入',
                titleW: width * 0.5,
                titleH: 50,
                titlePadding: 15
            });
            this.state.bounceValue.setValue(1.2);
            Animated.spring(
                this.state.bounceValue,
                {
                    friction: 5,
                    toValue: 1.0
                }
            ).start();
        } else {
            this.setState({
                title: '',
                titleW: 0,
                titleH: 0,
                titlePadding: 0
            });
        }
    },


    onScrollBeginDrag(){

    },
    onScrollEndDrag(){

    },


    renderChildView(){
        var allChild = [];
        var imageArr = imageData.data
        for(var  i = 0; i < imageArr.length;i++){
            allChild.push(
                <Image key = {i}source={{uri: imageArr[i].img}} style = {styles.imageStyle}/>
            );
        }
        return allChild;

    },




})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    imageStyle:{
        width: width,
        height: height
    },
    touchViewStyle:{
        width:width,
        height:50,
        bottom:height / 6,
        alignItems:'center',
    },
    textStyle:{
        fontSize:18,
        color:'black',
        backgroundColor:'transparent',
        textAlign:'center',
        borderRadius:3,
        borderColor:'orange',
        borderWidth:1,
        justifyContent:'center'
    }
});

module.exports = JJNewfeature;