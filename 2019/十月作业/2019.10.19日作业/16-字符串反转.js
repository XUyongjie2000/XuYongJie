// 16.写一个函数, 实现字符串反转,输入：["h","e","l","l","o"],输出：["o","l","l","e","h"]
// function sum(arr){
//     var restul=arr.reverse()
//     return arr
// }
// console.log(sum(["h","e","l","l","o"]))




function fn(arr) {
    for (var i = 0; i <arr.length / 2; i++) {
      var num = arr[i]
      arr[i] = arr[arr.length - 1 - i]
      arr[arr.length - 1 - i] = num
    }
    return arr
  }
  console.log(fn(["h", "e", "l", "l", "o"]));