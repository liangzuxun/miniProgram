App({
  onLaunch: function () {
    console.log('App Launch')
    const accountInfo = wx.getAccountInfoSync()
    this.globalData.appId = accountInfo.miniProgram.appId
    console.log('app:',this.globalData.appId)
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
    hasLogin: false
  }
})
