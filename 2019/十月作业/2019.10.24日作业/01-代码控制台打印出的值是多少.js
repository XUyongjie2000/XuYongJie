function f1() {
  var user = "二狗子";
  alert(this.user); // undefined
  alert(this); // [object Window]
}

f1();
