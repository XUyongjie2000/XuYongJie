//   1. 要求将数组中的为0的那些值去掉，将不为0的值存入一个新的数组，生成新的数组
var arr = [1, 0, 2, 0, 3, 0, 4, 0, 5, 0]
var newarr = [];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] != 0) {
    newarr.push(arr[i]);
  }
}
console.log(newarr);


// 2. 输入班级人数(比如10人),然后依次输入学员成绩，计算班级学员的平均成绩和总成绩
var num = +prompt('输入班级人数');
// console.log(num);
var sum = 0;
for (var i = 0; i < num; i++) {
  var score = +prompt('输入学员成绩');
  if (score < 100 && score > 0) {
    // console.log(111);
    sum += score;
  }
}
alert(`班级学员的平均成绩为${sum / num},总成绩为${sum}`)


// 3.写一个函数，既可以实现对数组排序从小到大，也可以从大到小
//冒泡排序(默认从小到大)
var arr = [12, 43, 55, 77, 65, 34, 23, 17, 65]
function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) { //>从小到大,<从大到小
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr));

// 4.写一个函数，实现翻转数组，返回一个新数组 
var arr = [1, 2, 3, 4, 5];
function turnarr(arr) {
  var newarr = [];
  for (var i = 0; i < arr.length; i++) {
    newarr.unshift(arr[i]);
  }
  return newarr;
}

console.log(turnarr(arr));


// 5. 1000~ 5000之间有多少整数，其各位数字之和为5，分别是哪些数（例如整数2003的各位数字之和为 2+0+0+3 ，等于5）），

for (var i = 1000; i <= 5000; i++) {
  var gewei = i % 10;
  var shiwei = Math.trunc((i / 10) % 10);
  var baiwei = Math.trunc((i / 100) % 10);
  var qianwei = Math.trunc((i / 1000));

  if (gewei + shiwei + baiwei + qianwei == 5) {
    console.log(i);
  }
}


// 6. 编一个程序，从键盘上输入三个数，把最大数找出来。
var max = -Infinity;
for (var i = 1; i <= 3; i++) {
  var num = +prompt('请输入第' + i + '个数字');
  if (num > max) {
    max = num
  }
}
console.log(max);


//7. 写一个函数，实现n的阶层的和求1 + 2! + 3! +...+n!的和
function getFactorial() {
  //创建用户输入
  var num = +prompt("请输入一个数");
  //定义 变量 sum
  var sum = 0;
  //创建 变量  作为阶乘
  var jie = 1;
  //创建循环 从 1 循环 到 num
  for (var i = 1; i <= num; i++) {
    jie *= i;
    sum += jie;
  }
  //返回sum
  return sum;
}

//调用方法
console.log("阶乘和为: " + getFactorial());

// 8. 数组去重
//数组去重1
var arr = [12, 32, 12, 43, 45, 32, 45, 44]
function disTinct(arr) {
  var ans = []
  for (var i = arr.length - 1; i >= 0; i--) {
    var nb = 0 //没重复为0.有重复不为0
    for (var j = i - 1; j >= 0; j--) {
      if (arr[i] == arr[j]) {
        nb = 1
        break
      }
    }
    if (nb == 0) {
      ans.unshift(arr[i])
    }
  }
  return ans
}
//数组去重(indexOf)
function unique(arr) {
  var res = []
  for (var i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) == -1) {
      res.push(arr[i])
    }
  }
  return res
}
console.log(unique(arr));

// 9. 猜谜游戏: 生成一个1-100之间的随机整数让用户猜,如果用户猜大了或者猜小了，提示用户，直到用户猜对为止
var randomNum = Math.ceil(Math.random() * 100);
console.log(randomNum);

//这种情况使用while循环最合适的，因为循环次数不固定

while (true) {//条件语句永远成立，死循环
  var num = +prompt('猜猜我的幸运数字');

  if (randomNum > num) {
    alert('猜小了，继续');
  } else if (randomNum < num) {
    alert('猜大了，继续');
  } else {
    alert('恭喜你猜对了，幸运数字是' + randomNum);
    break;//结束整个循环语句
  }
}

console.log("用户猜对了，循环结束");

// 10 . 打印九九乘法表
for (var i = 1; i <= 9; i++) {
  var str = '';
  for (var j = 1; j <= i; j++) {
    str += j + '*' + i + '=' + i * j + ' ';

  }
  console.log(str);
}


//11. 定义数组 var arr = [11,22,33,44,55],要求：使用for循环将arr数组的中的元素全部打印到控制台
var arr = [11, 22, 33, 44, 55];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}


// 12. 定义数组 var arr = [11,22,33,44,55],要求：求数组中所有的元素的和
var arr = [11, 22, 33, 44, 55];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);


// 13. 定义数组 var arr = [11,22,33,44,55],要求：将arr数组中为偶数的元素打印到控制台
var arr = [11, 22, 33, 44, 55];
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);

  }
}


// 14. 定义数组 var arr =[11,22,33,44,55],要求：使用for循环将arr数组的中的元素全部倒叙打印到控制台
var arr = [11, 22, 33, 44, 55];
for (var i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}



// 15. 分析以下需求并实现
//    1.定义一个用于存放班级分数的数组var score = [80,90,85,90,78,88,89,93,98,75];
//    2.求出班级不及格人数(分数低于60分的就是不及格) ?? 
//    3.求出班级的平均分
//    4.求出班级的总分数
var sum = 0;
var bjg = 0;
var score = [80, 90, 85, 90, 78, 88, 89, 93, 98, 75];
for (var i = 0; i < score.length; i++) {
  if (score[i] < 60) {
    bjg++;
  }
  sum += score[i];
}
console.log(`班级不及格人数为${bjg}人,班级的平均分为${sum / i},求出班级的总分数为${sum}`);

// 16.var arr = [1,1,2,2,3,4,5,4,3,2,1], 打印出数字2出现的次数。
var arr = [1, 1, 2, 2, 3, 4, 5, 4, 3, 2, 1];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] == 2) {
    sum++;
  }
}
console.log(sum);

// 17.已有数组var nums = [5,10,15],要求创建一个新数组
//     1.新数组的长度和已知数组相同
//     2.新数组每个元素的值，是已知对应位置元素的2倍
//     3.在控制台中打印新数组的所有元素
var nums = [5, 10, 15];
var arr = [];
for (var i = 0; i < nums.length; i++) {
  arr.push(nums[i] * 2);
}
console.log(arr);


// 18.定义一个整数数组，包含元素[1,3,4,7,8]，获取数组中数组角标和对应的元素都为偶数的元素与个数，并在控制台打印输出。
var arr = [1, 3, 4, 7, 8];
var newarr = [];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0 && i % 2 == 0) {
    sum++;
    newarr.push(arr[i]);
    // console.log(arr[i]);
  }
}
console.log('角标和对应的元素都为偶数的元素为' + newarr + ',个数为' + sum + '个');

// 19.var oldArr[]={1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5}; 
//     要求将以上数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组为 
//     var newArr=[1,3,4,5,6,6,5,4,7,6,7,5];
var oldArr = [1, 3, 4, 5, 0, 0, 6, 6, 0, 5, 4, 7, 6, 7, 0, 5];

var newarr = [];
for (var i = 0; i < oldArr.length; i++) {
  // console.log(oldArr[i]);
  if (oldArr[i] != 0) {
    newarr.push(oldArr[i]);
  }
}
console.log(newarr);

// 20.定义一个长度为10的数组，在每一个元素存放一个单词，然后用户输入单词进行匹配，通过程序判断数组是否包含有这个单词，包含这个单词打印"YES",否则就是"NO"
var dc = ['food', 'blue', 'red', 'pink', 'score', 'name', 'age', 'skyblue', 'why'];
var word = prompt("请输入一个单词")
var flag = false;
for (var i = 0; i < dc.length; i++) {
  if (word == dc[i]) {
    flag = true;
    break;
  }
}

if (flag) {
  alert("YES");
} else {
  alert("NO")
}