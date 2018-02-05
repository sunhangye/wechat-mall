/** 
 *  获取小程序应用实例
*/
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    indicatorActiveColor: "#f9f027",
    autoplay: false,
    interval: 3000,
    circular: true,
    duration: 1000,
    loadingHidden: false

  },

  // swiper 事件处理函数
  swiperchange: function (e) {
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _that = this
    // 调用应用实例的方法获取全局数据
    wx.getUserInfo(function (userInfo) {
      _that.setData({
        userInfo: userInfo
      })
    })

    // 轮播图
    wx.request({
      url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      method: 'GET',
      success: (res) => {
        _that.setData({
          images: res.data
        })
        setTimeout(function() {
          _that.setData({
            loadingHidden: true
          })
        }, 500)
      }
    })

    // 品牌馆
    wx.request({
      url: 'http://www.huanqiuxiaozhen.com/wemall/venues/venuesList',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      method: 'GET',
      success: (res) => {
        this.setData({
          venuesItems: res.data.data
        })
        setTimeout(function () {
          _that.setData({
            loadingHidden: true
          })
        }, 500)
      }
    })

    // 精选
    wx.request({
      url: 'http://www.huanqiuxiaozhen.com/wemall/goods/choiceList',
      data: {},
      method: 'GET',
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        _that.setData({
          choiceItems: res.data.data.dataList
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})