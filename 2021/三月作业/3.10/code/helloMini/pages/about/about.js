// pages/about/about.js
Page({

      /**
       * 页面的初始数据
       */
      data: {

      },

      /**
       * 生命周期函数--监听页面加载
       */
      onLoad: function (options) {

      },
      // 发起GET请求
      onTapGet() {
        wx.request({
          // 请求地址，必须是以https://开头
          // 必须是配置在request合法域名
          url: 'https://www.escook.cn/api/get',
          // 请求方式
          method: 'GET',
          // 请求参数
          data: {
            name: 'zs',
            age: 22
          },
          // 请求成功的回调
          success: (res) => {
            console.log(res)
          }
        })},
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