//
//  PushNative.m
//  MeituanRN
//
//  Created by Cxd-lvdongjie on 2017/2/16.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "PushNative.h"
#import <React/RCTBridge.h>


#import <React/RCTEventDispatcher.h>
// 导入跳转的页面
#import "TestController.h"
// 导入AppDelegate，获取UINavigationController
#import "AppDelegate.h"

@implementation PushNative

@synthesize bridge = _bridge;

RCT_EXPORT_MODULE(PushNative)
// RN跳转原生界面
// RNOpenOneVC指的就是跳转的方法，下面会用到
RCT_EXPORT_METHOD(RNOpenOneVC:(NSString *)msg){
  
  NSLog(@"RN传入原生界面的数据为:%@",msg);
  //主要这里必须使用主线程发送,不然有可能失效
  dispatch_async(dispatch_get_main_queue(), ^{
    TestController *one = [[TestController alloc]init];
    
    AppDelegate *app = (AppDelegate *)[[UIApplication sharedApplication] delegate];
    
    [app.nav pushViewController:one animated:YES];
  });
}
RCT_EXPORT_METHOD(getNativeClass:(RCTResponseSenderBlock)callback) {
  callback(@[NSStringFromClass([self class])]);
}


//简化写法
RCT_REMAP_METHOD(testRespondMethod,
                 name:(NSString *)name
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject) {
  if([self respondsToSelector:NSSelectorFromString(name)]) {
    resolve(@YES);
  }
  else {
    reject(@"-1001", @"not respond this method", nil);
  }
}

- (NSDictionary *)constantsToExport {
  return @{ @"BGModuleName" : @"BGNativeModuleExample",
            @"TestEventName": @"TestEventName"
            };
}


- (instancetype)init {
  if(self = [super init]) {
    [NSTimer scheduledTimerWithTimeInterval:1.0 target:self selector:@selector(sendEventToJS) userInfo:nil repeats:YES];
  }
  return self;
}
- (void)sendEventToJS {
  [self.bridge.eventDispatcher sendAppEventWithName:@"SendName" body:@{@"name": @"Jack"}];
  //没效果
  [self.bridge.eventDispatcher sendTextEventWithType:0 reactTag:@1 text:@"哈哈哈哈" key:@"SendName" eventCount:1];
}
@end
