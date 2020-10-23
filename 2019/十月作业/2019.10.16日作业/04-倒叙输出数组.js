//4. 定义数组 var arr =[11,22,33,44,55],要求：使用for循环将arr数组的中的元素全部倒叙打印到控制台

//步骤：
//声明数组
var arr =[11,22,33,44,55]
//声明一个空变量
var sum = 0
//声明一个空数组
var sun =[]
//遍历数组
for (var i = arr.length-1; i >=0; i--){
    //给空数组赋值，给空变量赋下标
	sun[sum++]= arr[i]
}
//打印倒序
console.log(sun)




//声明数组
//var arr=[11,22,33,44,55]
//运用函数reverse倒叙打印
//console.log(arr.reverse()) 
