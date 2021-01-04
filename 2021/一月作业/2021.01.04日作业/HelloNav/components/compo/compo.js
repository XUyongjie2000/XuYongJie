// components/compo/compo.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    propAge: {
      // 数据类型
      type: Object,
      // 数据默认值
      value: ""
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    name: "张三"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleData(){
      console.log(this.data.name);

      this.setData({
        name: "李四"
      })
    },

    handleaaa(){
      this.setData({
        propPrice: this.properties.propAge + 1
      })
    }
  },
  observers: {
    
  }
})
