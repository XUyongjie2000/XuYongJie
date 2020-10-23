var that;
//声明类
class Tab {
  //创建公共对象
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
  init() {
    this.updateNode();
    this.addBtn.onclick = this.addTab;
    for (let i = 0; i < this.list.length; i++) {
      //获取li索引
      this.list[i].index = i;
      //绑定li点击事件
      this.list[i].onclick = this.toggleTab;
      //给每个删除按钮绑定事件
      this.rmBtn[i].onclick = this.removeTab;
      //给每个span绑定双击事件
      this.spans[i].ondblclick = this.editTab;
      this.sections[i].ondblclick = this.editTab;
    }
  }
  updateNode() {
    //获取li
    this.list = this.tab.querySelectorAll("li");
    //获取section
    this.sections = this.tab.querySelectorAll("section");
    //获取删除按钮
    this.rmBtn = this.tab.querySelectorAll(".icon-guanbi");
    //获取ul中的li的第一个span
    this.spans = this.tab.querySelectorAll("ul li span:first-child");
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
    let redom = Math.random();

    that.clearClass();
    // console.log(1111);
    let li =
      '<li class="liactive"><span>新测试卡</span><span class="iconfont icon-guanbi"></span></li>';
    that.ul.insertAdjacentHTML("beforeend", li);
    let section = `<section class="conactive">测试中${redom}</section>`;
    that.article.insertAdjacentHTML("beforeend", section);
    that.init();
  }
  //删除选项卡
  removeTab(e) {
    let index = this.parentNode.index;
    e.stopPropagation();
    // console.log(1111);
    that.list[index].remove();
    that.sections[index].remove();
    if (document.querySelector("liactive")) return;
    index--;
    that.list[index] && that.list[index].click();
  }
  //编辑选项卡
  editTab() {
    // console.log(111);
    let str = this.innerHTML;
    this.innerHTML = '<input type="text">';
    let innerHTML = this.children[0];
    window.getSelection
      ? window.getSelection().removeAllRanges()
      : document.selection.empty();
    innerHTML.value = str;
    innerHTML.select();
    innerHTML.onblur = function () {
      innerHTML.parentNode.innerHTML = this.value;
    };
    innerHTML.onkeypress = function (e) {
      if (e.keyCode == 13) {
        this.blur();
      }
    };
  }
}
//创建对象
new Tab("#tab");
