// var arr=[1,2,3,4,5,6]

//数组反转（颠倒）
// 方法1 ：需要一个新数组来接收
//分析: 先定义一个新数组 然后倒叙遍历arr 让arr中的每个数字添加到新数组中

// // 1.定义一个新数组
// var newArr=[]
// // 2.倒叙遍历arr
// for(var i =arr.length-1;i>=0;i--){
// // 3.把arr的元素[4,3,2,1]  添加到新数组中

// newArr.push(arr[i])
//或者 newArr[newarr.lenght]=arr[i]
// }
// //打印新数组
// console.log(newArr)

//方法2 ：需要一个临时变量来实现（不需要新数组）
//1.声明变量
// var arr=[1,2,3,4]
// //2.遍历数组
// for (var i =0;i<arr.length/2;i++){
//     //2.1声明一个临时变量 让临时便改良的值等与第一个数
//     var temp=arr[i]
//     //2.2让arr[i]的值等于[arr.lenght-i-1]的值
//     arr[i]=arr[arr.length-i-1]
//     //2.3  arr[arr.lenght-i-1]的值等于临时变量
//     arr[arr.length-i-1]=temp
// }
// console.log(arr)
//方法3 ：数组给我们提供的reverse方法
var arr=[1,2,3,4]
var result=arr.reverse()
console.log(arr)