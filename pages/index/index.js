//index.js
//获取应用实例

import {
  getHot,
  getComingSoonData,
  getTop250Data
} from "../../api/api"
Page({
  data: {
    hotData: [],
    comingSoonData: [],
    top250Data: []
  },
  onLoad: function () {
    getHot().then(res => {
      // console.log(res.data)
      this.setData({
        hotData: res.data.subjects
      })
    })
    getComingSoonData().then(res => {
      // console.log(res.data)
      this.setData({
        comingSoonData: res.data.subjects
      })
    })
    getTop250Data().then(res => {
      // console.log(res.data.subjects)
      this.setData({
        top250Data: res.data.subjects.splice(0, 6)
      })
    })
  }

})