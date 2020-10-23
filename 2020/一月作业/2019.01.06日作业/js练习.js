// 1.定义一个长度为5的数组，之后生成5个随机数存入数组，
// 随机数范围为10到100（包含10和100），遍历数组，将数组中小于50的元素替换成0，
// 之后打印修改后的数组
// var arr = [];
// for (var i = 0; i < 5; i++) {
//   var random = Math.random() * (100 - 10 + 1) + 10;
//   arr.push(parseInt(random));
//   if (arr[i] < 50) {
//     arr[i] = 0;
//   }
// }
// console.log(arr);

// 2.获取地址里面的用户名和年龄和邮箱 https://www.baidu.com?username=lisi&age=28&email=120122@qq.com,
// 并且控制台输出对象的格式{username:'lisi',age:28,email:120122@qq.com}
// var str = "https://www.baidu.com?username=lisi&age=28&email=120122@qq.com";
// // 定义对象
// var obj = {};
// // {username: "lisi", age: "28", email: "120122@qq.com"}
// str = str.split("?")[1].split("&");
// // ? {"username=lisi&age=28&email=120122@qq.cpm"}
// // & {"username=lisi","age=28","email=120122@qq.com"}
// for (var i = 0; i < str.length; i++) {
//   var arr = str[i].split("=");
//   obj[arr[0]] = arr[1];
// }
// console.log(obj);

// 3.将数组var arr = [1,2,1,2,3,4,5,6]里面重复的元素去除
// 第一种方法  es6
// var arr = [1, 2, 1, 2, 3, 4, 5, 6];
// var arr = new Set(arr);
// console.log(Array.from(arr));  //Array.form转换成真数组

// 第二种方法 es5
// var arr = [1, 2, 1, 2, 3, 4, 5, 6];
// var newArr = [];
// for (var i = 0; i < arr.length; i++) {
//   if (newArr.indexOf(arr[i]) === -1) {
//     newArr.push(arr[i]);
//   }
// }
// console.log(newArr);

// 4.统计数组var arr = [1,2,3,4,5,1,1,2,3,2]里面元素出现的次数
// var arr = [1, 2, 3, 4, 5, 1, 1, 2, 3, 2];
// var obj = {};
// //统计次数，最方便的办法是对象
// for (var i = 0; i < arr.length; i++) {
//   if (obj[arr[i]]) {
//     obj[arr[i]]++;
//   } else {
//     obj[arr[i]] = 1;
//   }
// }
// console.log(obj); //{1: 3, 2: 3, 3: 2, 4: 1, 5: 1}
