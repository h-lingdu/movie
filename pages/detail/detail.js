// pages/detail/detail.js

import {
  getDetailData
} from '../../api/api'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    flag: false,
    detailData: {},
    starIndex: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    getDetailData({
      id: this.data.id
    }).then(res => {
      console.log(res.data)
      this.setData({
        detailData: res.data,
        flag: true,
        starIndex: Math.floor(res.data.rating.average / 2)
      })
    })
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