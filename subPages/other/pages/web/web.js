Page({
  data: {
    url: ''
  },
  onLoad (options) {
    const { url } = options
    this.setData({ url })
  },
  getH5Message: function (e) {
    console.log(e)
  //   wx.navigateToMiniProgram({
  //    appId: e.detail.data[0].miniprogramId,
  //    path: '/pages/index/index',
  //    envVersion: 'release',
  //    success(res) {
  //      console.log('navigateToMiniProgram success');
  //    }
  //  })
 }
})