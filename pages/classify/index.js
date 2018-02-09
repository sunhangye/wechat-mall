Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: '',
    navLeftItem: [],
    navRightItem: [],
    curNav: 1,
    curIndex: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var _that = this;
    wx.request({
      url: 'http://wx.huanqiuxiaozhen.com/wemall/goodstype/typebrandList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        console.log(res);
        _that.setData({
          navLeftItem: res.data,
          navRightItem: res.data
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
  showInput: function() {
    this.setData({inputShowed: true});

  },
  hideInput: function() {
    this.setData({inputVal: "", inputShowed: false});
  },
  clearInput: function() {
    this.setData({inputVal: ""});
  },
  inputTyping: function(e) {
    this.setData({inputVal: e.detail.value});
  },
  inputSearch: function(e) {
    var _that = this;
    if (this.data.inputVal) {
      // wx.navigateTo({
      //   url: 'page/',
      //   success: function(res){
      //
      //   },
      //   fail: function() {
      //
      //   },
      //   complete: function() {
      //
      //   }
      // })
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000,
        success: function () {
          _that.setData({
            inputVal: '',
            inputShowed: false
          });
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  switchRightTab: function (e) {
    var id = e.target.dataset.id;
    var index = e.target.dataset.index;
    this.setData({
      curNav: id,
      curIndex: index
    })
  },
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
