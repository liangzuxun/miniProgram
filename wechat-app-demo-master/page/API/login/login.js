var app = getApp ();
Page ({
  onLoad: function () {
    this.setData ({
      hasLogin: app.globalData.hasLogin,
      code: '',
      session_key: '',
      appId: app.globalData.appId,
      openid: '',
    });
  },
  data: {},
  login: function () {
    var that = this;
    wx.login ({
      success: function (res) {
        console.log (res.code);
        app.globalData.hasLogin = true;
        that.setData ({
          hasLogin: true,
          code: res.code,
        });
        console.log ('123');
        wx.request ({
          url: 'http://localhost:9999/loginInfo',
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          data: {
            appId: app.globalData.appId,
            js_code: res.code,
          },
          success: function (result) {
            var data = JSON.parse (result.data);
            that.setData ({
              session_key: data['session_key'],
              openid: data['openid'],
            });
          },
        });
      },
    });
  },
});
