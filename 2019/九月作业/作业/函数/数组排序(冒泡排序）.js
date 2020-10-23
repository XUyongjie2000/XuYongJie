// 对一下数组进行拍排序


var arr=[50,40,30,20,10]
// 变成10 20 30 40 50


//方法1：冒泡排序
//  为什么需要手写冒泡排序  
//1. 排序是我们开发中最常用的
//2. 冒泡排序是面试中常用的
//3. 因为经常有面试官让你手写
// 由小到大
//冒泡排序
for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-1-i;j++){
        //什么时候交换位置--- 如果arr[j]>arr[j+1]
        if(arr[j]>arr[j+1]){
            //使用临时变量接收 j的值 arr[j]
            var temp=arr[j]
            //arr[j+1]的值给arr[j]
            arr[j]=arr[j+1]
            //把临时变量存的值给arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log(arr)



//由大到小
for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-1-i;j++){
        //什么时候交换位置--- 如果arr[j]>arr[j+1]
        if(arr[j]<arr[j+1]){
            //使用临时变量接收 j的值 arr[j]
            var temp=arr[j]
            //arr[j+1]的值给arr[j]
            arr[j]=arr[j+1]
            //把临时变量存的值给arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log(arr)



var arr=[5,8,7,9,3]
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            var temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log(arr)



//方法2 sort()方法


var arr=[18,10,11,21,9,91]

//  语法 ：数组名.sort(function(a,b){ }) return a-b 就是正序(从小到大) 如果是b-a就是倒叙

// console.log(arr.sort())
var result=arr.sort(function(a,b){return a-b})

console.log(result)

var result=arr.sort(function(a,b){return b-a})
console.log(result)