var that;
//声明类
class Tab {
  //创建公共属性
  constructor(id) {
    that = this;
    //获取tab
    this.tab = document.querySelector(id);

    //获取添加元素
    this.addBtn = this.tab.querySelector(".tabadd");
    //获取ul
    this.ul = this.tab.querySelector("ul");
    //获取article
    this.article = this.tab.querySelector("article");
    this.init();
  }
  init() {
    this.updateNode();
    //绑定添加按钮点击事件
    this.addBtn.onclick = this.addTab;
    for (let i = 0; i < this.list.length; i++) {
      //获取li索引
      this.list[i].index = i;
      //绑定li点击事件
      this.list[i].onclick = this.toggleTab;
      //绑定关闭按钮点击事件
      this.rmBtn[i].onclick = this.removeTab;
    }
  }
  updateNode() {
    //获取li
    this.list = this.tab.querySelectorAll("li");
    //获取section
    this.sections = this.tab.querySelectorAll("section");
    //获取删除按钮
    this.rmBtn = this.tab.querySelectorAll(".icon-guanbi");
  }
  clearClass() {
    for (let j = 0; j < this.list.length; j++) {
      this.list[j].className = "";
      this.sections[j].className = "";
    }
  }
  //切换选项卡
  toggleTab() {
    that.clearClass();
    this.className = "liactive";
    that.sections[this.index].className = "conactive";
  }
  //添加选项卡
  addTab() {
    // console.log(11111);
    that.init();
    that.clearClass();
    let li =
      '<li class="liactive"><span>新测试卡</span><span class="iconfont icon-guanbi"></span></li>';
    that.ul.insertAdjacentHTML("beforeend", li);
    let section = '<section class="conactive">测试中</section>';
    that.article.insertAdjacentHTML("beforeend", section);
  }
  //删除选项卡
  removeTab(e) {
    let index = this.parentNode.index;
    e.stopPropagation();
    that.list[index].remove();
    that.sections[index].remove();
    if (document.querySelector("liactive")) return;
    index--;
    that.list[index] && that.list[index].click();
    // console.log(1111);
  }
  //编辑选项卡
}
//创建对象
new Tab("#tab");
