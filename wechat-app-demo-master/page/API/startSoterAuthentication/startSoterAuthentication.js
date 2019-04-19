Page({
  data:{
    resultJSON:null,
    resultJSONSignature:null,
    checkButton:true
  },
  fingerPrint(){
    var self =this
    wx.startSoterAuthentication({
      requestAuthModes:['fingerPrint'],
      challenge:'12334566',
      authCotent:"验证您的指纹",
      success:function(res){
        wx.showToast({
          title:"认证成功",
          icon:'success'
        })
        console.log(res)
        let result = JSON.parse(res.resultJSON)
        self.setData({
          resultJSON:result,
          resultJSONSignature:res.resultJSONSignature,
          checkButton:false
        })
       
      },
      fail:function(){
         wx.showModal({
           title:"提示",
           content:"指纹验证失败"
         })
      }
    })
  }
})