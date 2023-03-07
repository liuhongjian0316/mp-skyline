/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    systemInfo?: {},
    menuInfo?: {},
    tabBarHeight?: number,
    navBarHeight?: number,
    statusBarHeight?: number,
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}