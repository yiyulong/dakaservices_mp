//index.js
//获取应用实例
const app = getApp()
import { getBanner } from '../../api/common'
Page({
  data: {
    // motto: 'Hello World',
    // userInfo: {},
    // hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
    banner: [{
      src: '../../images/banner.jpg',
      url: {
        appId: 'wx1aba4b8e5e2c0947',
        path: ''
      }
      }, {
        src: '../../images/banner2.jpg',
        url: ''
    }]
  },
  //事件处理函数
  // bindViewTap: function() {
  //   wx.navigateTo({
  //     url: '../logs/logs'
  //   })
  // },
  async onLoad () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
    // const { data: { list } } = await getBanner()
    // this.setData({ banner: list })
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  // jump () {
  //   wx.navigateTo({
  //     url: '/subPages/other/pages/web/web'
  //   })
  // },
  _contact () {
    wx.showModal({
      title: '鸿城服务',
      content: '您的户室信息未审核，请联系所在小区物业中心服务人员！'
    })
  },
  // 大咖生鲜小程序
  _toDKSX () {
    wx.navigateToMiniProgram({
      appId: 'wx1aba4b8e5e2c0947',
      path: '/pages/index/index',
      envVersion: 'release',
      success(res) {
        console.log('navigateToMiniProgram success');
      }
    })
  },
  // 大咖租售小程序
  _toDKZS () {
    wx.navigateToMiniProgram({
      appId: 'wx75558357e98c7d79',
      path: '/pages/index',
      envVersion: 'release',
      success(res) {
        console.log('navigateToMiniProgram success');
      }
    })
  },
  _toWEB ({ currentTarget: { dataset: { url } } }) {
    // console.log(url)
    if (/^(https|http)/.test(url)) {
      wx.navigateTo({ url: `/subPages/other/pages/web/web?url=${url}`})
    } else {
      wx.navigateTo({ url })
    }
  },
  _jump ( { currentTarget: { dataset: { url } } }) {
    if (!url) return
    if (typeof (url) === 'string') {
      if (/^(https|http)/.test(url)) {
        wx.navigateTo({ url: `/subPages/other/pages/web/web?url=${url}`})
      } else {
        wx.navigateTo({ url })
      }
    }
    if (typeof (url) === 'object') {
      if ('appId' in url) {
        wx.navigateToMiniProgram({
          appId: url.appId,
          path: url?.path ?? '',
          envVersion: 'release',
          success(res) {
            console.log('navigateToMiniProgram success');
          }
        })
      }
    }
  },
  _wait () {
    wx.showModal({
      title: '鸿城服务',
      content: '我们正在努力建设中，新版块敬请期待'
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: '鸿城服务',
      path: '/pages/index/index'
    }
  }
})
