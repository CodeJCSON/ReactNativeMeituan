//
//  TestController.m
//  MeituanRN
//
//  Created by Cxd-lvdongjie on 2017/2/16.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "TestController.h"
#import "PushController.h"
@interface TestController ()

@end

@implementation TestController

- (void)viewDidLoad {
    [super viewDidLoad];
    self.navigationItem.title = @"原生页面";
    self.view.backgroundColor = [UIColor orangeColor];
  
  
  UIButton *button = [UIButton buttonWithType:(UIButtonTypeCustom)];
  button.frame = CGRectMake([UIScreen mainScreen].bounds.size.width / 2 - 150, 80, 300, 80);
  button.backgroundColor = [UIColor redColor];
  [button setTitle:@"点击我，跳转到React-Native页面" forState:(UIControlStateNormal)];
  [button addTarget:self action:@selector(click) forControlEvents:(UIControlEventTouchUpInside)];
  [self.view addSubview:button];
}

- (void)click{
  
  PushController *push = [[PushController alloc]init];
  [self.navigationController pushViewController:push animated:YES];
}
/*
#pragma mark - Navigation

// In a storyboard-based application, you will often want to do a little preparation before navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}
*/

@end
