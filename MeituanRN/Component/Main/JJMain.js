/**
 * Created by cxd-lvdongjie on 2017/2/14.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBar,
    Image,
    Navigator,
    Platform    //用来判断现在的系统
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

var Home = require('../Home/JJHome');
var Shop = require('../Shop/JJShop');
var Mine = require('../Mine/JJMine');
var More = require('../More/JJMore');


var JJMain = React.createClass({

    getInitialState(){

        return{
            selectedTab:'home'
        }

    },

    render() {
        return (
            <TabNavigator
            >
                {/*首页*/}
                {this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
                {/*商家*/}
                {this.renderTabBarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop)}
                {/*我的*/}
                {this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine)}
                {/*更多*/}
                {this.renderTabBarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',More)}
            </TabNavigator>
        );
    },

    //每一个TabBarItem
    renderTabBarItem(title,iconName,selectIconName,selectTab,componentName,component){
        return(
            <TabNavigator.Item
                title= {title}
                renderIcon={() => <Image source={{uri:iconName}} style={styles.iconStyle} />}
                renderSelectedIcon={() => <Image source={{uri:selectIconName}} style={styles.iconStyle} />}
                selected={this.state.selectedTab === selectTab}
                onPress={() => this.setState({ selectedTab: selectTab })}
                selectedTitleStyle = {{color:'orange'}}
            >
                <Navigator
                    initialRoute={{name:componentName,component:component}}
                    configureScene={()=>{
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>;
                    }}
                />
            </TabNavigator.Item>

        )
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    iconStyle :{
        width: Platform.OS === 'ios' ? 30:25,
        height:Platform.OS === 'ios' ? 30:25
    }
});

module.exports = JJMain;