var that;
//声明类
class Tab {
  //公共属性
  constructor(id) {
    that = this;
    //获取tab
    this.tab = document.querySelector(id);

    //获取添加按钮
    this.addBtn = this.tab.querySelector(".tabadd");
    //获取ul
    this.ul = this.tab.querySelector("ul");
    //获取article
    this.article = this.tab.querySelector("article");
    this.init();
  }
  //声明方法
  init() {
    this.updateNode();
    //添加按钮 绑定点击事件
    this.addBtn.onclick = this.addTab;
    //给每个li绑定点击事件
    for (let i = 0; i < this.list.length; i++) {
      //获取每个li得索引
      this.list[i].index = i;
      //给每个li添加点击事件
      this.list[i].onclick = this.toggleTab;
      //给每个删除按钮绑定事件
      this.rmBtn[i].onclick = this.removeTab;
      //给每个编辑span添加双击事件
      this.spans[i].ondblclick = this.editTab;
      //给每个section添加双击事件
      this.sections[i].ondblclick = this.editTab;
    }
  }
  //当元素变化时 重新获取元素
  updateNode() {
    //获取li
    this.list = this.tab.querySelectorAll("li");
    //获取section
    this.sections = this.tab.querySelectorAll("section");
    //获取删除按钮
    this.rmBtn = this.tab.querySelectorAll(".icon-guanbi");
    //获取ul中的每个li的第一个span
    this.spans = this.tab.querySelectorAll("ul li span:first-child");
    // console.log(this.spans);
  }
  //清除元素类名
  clearClass() {
    for (let j = 0; j < this.list.length; j++) {
      this.list[j].className = "";
      this.sections[j].className = "";
    }
  }
  //切换选项卡
  toggleTab() {
    //清除所有类名
    that.clearClass();
    //点击元素添加类名
    this.className = "liactive";
    // console.log(this.index);
    //让li对应得那个section显示出来
    that.sections[this.index].className = "conactive";
  }
  //添加选项卡
  addTab() {
    let random = Math.random();
    that.init();
    // console.log(111111);
    //清除任何一个呗选中的类名
    that.clearClass();
    //添加一个li
    let li =
      '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>';
    that.ul.insertAdjacentHTML("beforeend", li);
    //添加一个section
    let section = `<section class="conactive">测试中${random}</section>`;
    that.article.insertAdjacentHTML("beforeend", section);
  }
  //删除选项卡
  removeTab(e) {
    let index = this.parentNode.index;
    //冒泡事件
    e.stopPropagation();
    that.list[index].remove();
    that.sections[index].remove();
    // console.log(11111);
    if (document.querySelector(".liactive")) return;
    index--;
    that.list[index] && that.list[index].click();
  }
  //编辑选项卡
  editTab() {
    //获取span中文字的内容
    let str = this.innerHTML;
    //获取点击元素 就是ul中li的第一个span
    //给span一个双击事件
    console.log(1111);
    //双击禁止选定文字
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.selection.empty();
    //双击span的时候 给span一个input输入框
    this.innerHTML = '<input type="text">';
    let input = this.children[0];
    //给input输入框设置一个默认值 value
    input.value = str;
    //让文字全部选中
    input.select();

    //让input失去焦点的时候 吧input中的值给span
    input.onblur = function () {
      input.parentNode.innerHTML = this.value;
    };
    //给input添加键盘事件 获取回车键码 如果keycode为13 让input失去焦点
    input.onkeypress = function (e) {
      if (e.keyCode == 13) {
        this.blur();
      }
    };
  }
}
//创建对象
new Tab("#tab");
