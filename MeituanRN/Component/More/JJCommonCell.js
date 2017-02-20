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
    Platform,
    Switch,
    TouchableOpacity,
    NativeModules,
    InteractionManager,
    NativeAppEventEmitter
} from 'react-native';

var Push = NativeModules.PushNative;


var JJCommonCell = React.createClass({

    getDefaultProps(){
        return{
            title: '',  // 标题
            isSwitch: false, // 是否展示开关
            rightTitle: ''        }
    },
    getInitialState(){
        return{
            isOn:false
        }
    },
    render() {
        return (
            <TouchableOpacity onPress = {()=> this.runAfterInteractions()}>
            <View style={styles.container}>

                <Text style={{marginLeft:8}}>{this.props.title}</Text>

                {this.renderRightView()}
            </View>
            </TouchableOpacity>
        );
    },

    // cell右边显示的内容
    renderRightView(){
        // 判断
        if (this.props.isSwitch){ // true
            return(
                <Switch value={this.state.isOn == true} onValueChange={()=>{this.setState({isOn: !this.state.isOn})}} style={{marginRight:8}} />
            )
        }else{
            return(
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    {this.rightTitle()}
                    <Image source={{uri: 'icon_cell_rightArrow'}} style={{width:8, height:13, marginRight:8}}/>
                </View>
            )
        }
    },
    rightTitle(){
        if(this.props.rightTitle.length > 0){
            return(
                <Text style={{color:'gray', marginRight:3}}>{this.props.rightTitle}</Text>
            )
        }
    },
    //oc跟js
    runAfterInteractions(){
        //发送数据给OC
        InteractionManager.runAfterInteractions(()=> {
            // RNOpenOneVC这个也是写在原生里面的再PushNative中哦~
            Push.RNOpenOneVC('测试');
        });

        //OC数据回调
        Push.getNativeClass(name => {
            console.log("nativeClass: ", name);
        });

        //查询Push类中是否有dealloc这个方法
        Push.testRespondMethod("dealloc")
            .then(result => {
                console.log("result is ", result);
            })
            .catch(error => {
                console.log(error);
            });
        //可以直接拿到oc中constantsToExport返回的数据
        console.log("Push value is ", Push.BGModuleName);

        NativeAppEventEmitter.addListener(Push.SendName, info => {
            console.log(info);
        })

    },


})

const styles = StyleSheet.create({
    container:{
        height:Platform.OS == 'ios' ? 40: 30,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        borderBottomWidth:0.5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
});

module.exports = JJCommonCell;
