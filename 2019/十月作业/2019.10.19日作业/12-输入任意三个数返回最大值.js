// 12.写一个函数, 用户输入任意3个数的大小，返回最大值



function max(a, b, c) {
    if (a >= b && a >= c) {
      return a;
    }
    if (b >= a && b >= c) {
      return b;
    }
    if (c >= a && c >= b) {
      return c;
    }
  }
  console.log(max(22,4,19))