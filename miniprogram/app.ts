// app.ts
App<IAppOption>({
    globalData: {
        systemInfo: {},
        menuInfo: {},
        tabBarHeight: 80,
        navBarHeight: 80,
        statusBarHeight: 44,
    },
    onLaunch() {
        const systemInfo = wx.getSystemInfoSync()
        console.log('@@@ systemInfo ', systemInfo)
        Object.assign(this.globalData, systemInfo)
        this.globalData.tabBarHeight = systemInfo.screenHeight - systemInfo.safeArea.bottom + 60
        const menuInfo = wx.getMenuButtonBoundingClientRect();
        this.globalData.menuInfo = menuInfo
        this.globalData.statusBarHeight = systemInfo.statusBarHeight;
        this.globalData.navBarHeight = systemInfo.statusBarHeight + 50;
    },
})