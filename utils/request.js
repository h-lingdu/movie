const baseURL = 'https://douban.uieee.com/v2/movie'


const request = function (obj) {
    return new Promise((resolve, reject) => {
        wx.showLoading({
            title: '数据加载中',
            mask: true
        })
        wx.request({
            url: `${baseURL}/${obj.url}`,
            data: obj.data,
            header: {
                'content-type': 'json'
            },
            success: (res) => {
                wx.hideLoading()
                resolve(res)
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
}

export default request