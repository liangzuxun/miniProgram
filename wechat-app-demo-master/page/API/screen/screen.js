Page({
  data:{
    
  },
  setScreenBrightness:function(){
    wx.setScreenBrightness({
      value:0.5,
      success:function(res){
        
      }
    })
  }
})