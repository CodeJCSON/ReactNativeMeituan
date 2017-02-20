//
//  ExampleInterface.h
//  RNios01
//
//  Created by dfy on 16/7/24.
//  Copyright © 2016年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
//#import "RCTBridgeModule.h" //导入这个头文件以现实RCTBridgeModule协议
//#import "RCTBridge.h"   //导入这个头文件以实现向RN侧发送事件
//#import "RCTEventDispatcher.h"  //导入这个头文件以实现向RN侧发送事件
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTBridge.h>


#import <React/RCTEventDispatcher.h>

@interface ExampleInterface : NSObject<RCTBridgeModule>
@property (nonatomic,strong)NSString *contactName; //保存联系人名字
@property (nonatomic,strong)NSString *contactPhoneNumber;  //保存联系人电话号码

@end
