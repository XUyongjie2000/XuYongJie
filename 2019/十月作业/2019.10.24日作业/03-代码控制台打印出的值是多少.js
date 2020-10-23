var a = {
  user: "二狗子",
  b: {
    user: "大傻子",
    f1: function() {
      alert(this.user); // 大傻子
    }
  }
};
a.b.f1();
