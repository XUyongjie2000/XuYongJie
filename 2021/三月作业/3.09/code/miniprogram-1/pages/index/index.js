// index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "Index页面",
    imgSrc: "https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1336525219,1690190461&fm=55&app=54&f=JPEG?w=1140&h=640",
    num: 6,
    list: ['赵云', '米莱迪', '司空震', '貂蝉']
  },
  onLoad: function(){
    this.onTapGet();
    this.onTapPost();
  },
  handleTap: function (e) {
    console.log(e);
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
    })
  },
  // 发起POST请求
  onTapPost() {
    wx.request({
      // 请求地址，必须是以https://开头
      // 必须是配置在request合法域名
      url: 'https://www.escook.cn/api/post',
      // 请求方式
      method: 'POST',
      // 请求参数
      data: {
        name: 'lisi',
        age: 18
      },
      // 请求成功的回调
      success: (res) => {
        console.log(res)
      }
    })
  },

  handleClick: function (e) {
    // console.log(this.data.num);

    // 设置data中的值
    // this.setData({
    //   num: this.data.num + 1
    // })

    // console.log(this.data.num);
    console.log(e.target.dataset.name);


  }
})