// pages/results/results.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: '',
    results: [],
    disabled: false
  },
  mobileInputEvent: function (e) {
    this.setData({
      mobile: e.detail.value
    })
  },
  lookup: function (e) {
    var that = this
    var value = that.data.mobile
    if(value==null||value=='') return
    this.setData({
      disabled: true
    })

    wx.request({
      url: 'https://wz66.top/get_word',
      data: {
        word_id: value
      },
      method: 'GET',
      success: function (res) {
        console.log(res.data)
        that.setData({
                 results: res.data.results[0].lexicalEntries
        })

      },
      fail: function (res) {
        console.log('submit fail');
      },
      complete: function (res) {
        console.log('submit complete');
        that.setData({
          disabled: false
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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