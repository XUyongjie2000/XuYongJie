//  2. 若用户猜的小于50，提示：猜小了；否则提示猜大了；猜中了，提示：中奖了(不能继续猜谜)，(用while实现)
var num = 52;
while ((i = 52)) {
  if (num < 50) {
    console.log("猜小了");
    break;
  } else if (num == 52) {
    console.log("猜中了");
    break;
  } else {
    console.log("猜错了");
    break;
  }
}
