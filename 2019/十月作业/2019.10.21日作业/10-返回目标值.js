// 10.给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
//  示例:
//  给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

//1.定义数组 nums
var nums = [2, 7, 11, 15];
//2.定义目标值
var target = 9;
var arr = [];
//3.循环遍历数组 为了找到第一个索引
for (var i = 0; i < nums.length; i++) {
  //3.1循环遍历数组  为了找到第二个索引
  for (var j = i + 1; j < nums.length; j++) {
    //3.1.1 判断nums[i]+nums[j]===target
    if (nums[i] + nums[j] === target) {
      //3.1.1.1 打印结果
      //console.log(i,j)
      arr.push(i);
      arr.push(j);
      //3.1.1.2 循环停了
      break;
    }
  }
}
console.log(arr);
