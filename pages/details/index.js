Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    circular: true
  },
  onLoad: function (options) {
    var _that = this;

    wx.request({
      url: `http://www.huanqiuxiaozhen.com/wemall/goods/inqgoods?id=${options.id}`,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        _that.data.shopppingDetails = res.data.data;
        console.log(_that.data);
        var goodsPicsInfo = []
        var goodsPicsInfo = [];
        var goodspics = res.data.data.goodspics
        var goodsPicsObj = goodspics.substring(0, goodspics.length - 1);
        var goodsPicseArr = goodsPicsObj.split('#');
        for (var i = 0; i < goodsPicseArr.length; i++) {
          goodsPicsInfo.push({
            "picurl": goodsPicseArr[i]
          })
        }

        _that.setData({
          goodsPicsInfo: goodsPicsInfo
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

})
