var app = getApp();

Page({
  data: {},
  onLoad: function (options) {
    var _that = this;

    wx.request({
      url: `http://www.huanqiuxiaozhen.com/wemall/goods/inqGoodsByTypeBrand?brand=${options.brand}&typeid=1`,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'Accept': 'application/json'
      }, // 设置请求的 header
      success: function(res){
        _that.setData({
          list: res.data.data
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  /*
  监听页面初始加载完成
   */
  onReady: function () {

  },
  /*
  监听页面显示
   */
  onShow: function () {

  },
  /*
  监听页面隐藏
   */
   onHide: function () {

   },
   /*
   监听页面卸载
    */
   onUnload: function () {

   },
   /*
   页面上拉触底
    */
   onReachBottom: function () {

   },
   onShareAppMessage: function () {

   }
})
