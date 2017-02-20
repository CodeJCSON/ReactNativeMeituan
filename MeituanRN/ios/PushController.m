//
//  PushController.m
//  MeituanRN
//
//  Created by Cxd-lvdongjie on 2017/2/16.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "PushController.h"
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>


@interface PushController ()

@end

@implementation PushController

- (void)viewDidLoad {
    [super viewDidLoad];
  
  
  self.view.backgroundColor = [UIColor whiteColor];
  
  self.navigationItem.title = @"我是ReactNative页面";
  
  NSURL *jsCodeLocation;
  
  // 另外一种可以获得RN的类方法
  //  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:[NSString stringWithFormat:@"./App/Page/ThreePage/Three"] fallbackResource:nil];
  
  NSString * strUrl = @"http://localhost:8081/index.ios.bundle?platform=ios&dev=true";
 
  jsCodeLocation = [NSURL URLWithString:strUrl];
  
  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"JJCommonCell"
                                               initialProperties:@{
                                                                   
                                                                   @"launchOptions":@{
                                                                       @"componentName":@"PageOne"
                                                                       }
                                                                   }
                                                   launchOptions:nil];
  self.view = rootView;

//  NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform-ios"];
//  RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation moduleName:@"SimpleApp" initialProperties:nil launchOptions:nil];
//  rootView.frame = self.bounds;
//  [self addSubview:rootView];
  
}



@end
