function fn1() {
  console.log("fn1里面的1");
  console.log("我是被fn调用的函数fn1");
  console.log("fn1里面的2");
}

function fn() {
  console.log("fn里面的1");
  fn1();
  console.log("fn里面的2");
}




fn();
