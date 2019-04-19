Page({
  data:{
    encryptedData:""
  },
  getRunData:function(){
    var self = this
    wx.getWeRunData({
      success(res){
        self.setData({
          encryptedData:res.encryptedData
        })
        console.log(res.encryptedData)
      }
    })
  }
})