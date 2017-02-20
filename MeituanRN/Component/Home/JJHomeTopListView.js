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
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

//全局的变量
var cols = 5;;
var cellW = Platform.OS == 'ios' ? 70 : 60;
var cellH = 70;

var vMargin = (width - cellW * cols) /(cols + 1);
var hMargin = 10;

var JJHomeTopListView = React.createClass({

    getDefaultProps(){
        return{
            dataArr: []
        }
    },

    getInitialState(){

        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});

        return{
            dataSource: ds.cloneWithRows(this.props.dataArr)
        }

    },

    render() {
        return (
            <ListView
                dataSource  = {this.state.dataSource}
                renderRow = {this.renderRow}
                contentContainerStyle = {styles.contentViewStyle}
                scrollEnabled = {false}
            />
        );
    },
    //具体的cell
    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress = {()=>{alert(rowData.title)}} style = {styles.cellTouchStyle}>
            <View style={styles.cellStyle}>
                <Image source={{uri:rowData.image}} style={{width:52, height:52}}/>
                <Text style={{fontSize:12}}>{rowData.title}</Text>
            </View>
            </TouchableOpacity>
        )
    }
})

const styles = StyleSheet.create({
    contentViewStyle:{
        //多个cell在同一行显示
        flexWrap:'wrap',
        flexDirection:'row',
        width:width,
        backgroundColor:'white'
    },
    cellStyle:{
        width:cellW,
        height:cellH,
        justifyContent:'center',
        alignItems:'center'
    },
    cellTouchStyle:{
        width:cellW,
        height:cellH,
        justifyContent:'center',
        alignItems:'center',
        marginTop:hMargin,
        marginLeft:vMargin

    }
});

module.exports = JJHomeTopListView;
