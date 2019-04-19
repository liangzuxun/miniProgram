var order = ['green', 'red', 'yellow', 'blue', 'green']
Page({
  data: {
    toView: "green"
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  scrollToTop: function(e) {
    console.log(this.data.toView)
    this.setData({
      scrollTop: 0,
      toView:"green"
    })
    console.log(this.data.toView)
  },
  tap: function(e) {
    var index = order.indexOf(this.data.toView)
    if(index === 3){
      index = -1
    }
    this.setData({
      toView:order[index+1],
      scrollTop:(index+1) * 200
    })
    // for (var i = 0; i < order.length; ++i) {
    //   if (order[i] === this.data.toView) {
    //     this.setData({
    //       toView: order[i + 1],
    //       scrollTop: (i + 1) * 200
    //     })
    //     break
    //   }
    // }
  },
  tapMove: function(e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
