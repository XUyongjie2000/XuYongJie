// 5.编写一个add函数，实现如下效果:
//  // console.log(add(1, 2)); // 3
// // console.log(add(1)(2)); // 3

function add(x, z) {
  if (arguments.length == 1) {
    return function(y) {
      return x + y;
    };
  } else {
    return x + z;
  }
}
console.log(add(1, 2));
console.log(add(1)(2));
