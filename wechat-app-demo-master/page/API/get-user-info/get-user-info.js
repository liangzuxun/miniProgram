var app = getApp()
Page({
  data: {
    hasUserInfo: false,
    canIUse:wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad:function(){
    var self = this
    if(!this.data.IUse){
      console.log('123')
      wx.getUserInfo({
        success:function(res){
          self.setData({
            userInfo:res.userInfo,
            hasUserInfo:true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    // var that = this

    // if (app.globalData.hasLogin === false) {
    //   wx.login({
    //     success: _getUserInfo
    //   })
    // } else {
    //   _getUserInfo()
    // }

    // function _getUserInfo() {
    //   wx.getUserInfo({
    //     success: function (res) {
    //       that.setData({
    //         hasUserInfo: true,
    //         userInfo: res.userInfo
    //       })
    //       that.update()
    //     }
    //   })
    // }
    if(!e.detail.userInfo){
      return;
    }
    this.setData({
      userInfo:e.detail.userInfo,
      hasUserInfo:true
    })
  },
  clear: function () {
    this.setData({
      hasUserInfo: false,
      userInfo: {}
    })
  }
})
