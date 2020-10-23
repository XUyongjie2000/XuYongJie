// 9.var oldArr[]={1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5};
// 要求将以上数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组为
// var newArr=[1,3,4,5,6,6,5,4,7,6,7,5];
// var arr=[1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5]
// var arr1=[]
// for(var i=0;i<arr.length;i++){
//     if(arr[i]!==0){
//         arr1.push(arr[i])
//     }
// }
// console.log(arr1)

// 19.按照从大到小的顺序排列 ，var arr= [10, 5, 34, 59, 98],最后打印排序后的数组。
// var arr=[10,5,34,155,59,98]
// for(var i=0;i<arr.length;i++){
//     for(var j=0;j<arr.length-i-1;j++){
//         if(arr[j]<arr[j+1]){
//             var temp=arr[j]
//             arr[j]=arr[j+1]
//             arr[j+1]=temp
//         }
//     }
// }
// console.log(arr)

// 29. var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
//       var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
// 要求，把两个数组共同的元素放入一个新的数组, 并返回新的数组
// var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
// var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
// var arr3 = [];
// for (var i = 0; i < arr1.length; i++) {
//   for (var j = 0; j < arr2.length; j++) {
//     if (arr1[i] == arr2[j]) {
//       arr3.push(arr1[i]);
//     }
//   }
// }
// console.log(arr3);

// 31.求出数组var arr= [1,2,4,5,10,100,2,-22]中最小元素的索引

// var arr= [1,2,4,5,10,100,2,-22]
// var min=arr[0]
// for(var i=0;i<arr.length;i++){
//       if(arr[i]<min){
//           min=arr[i]
//       }
// }
// console.log(arr.indexOf(min))

// 32.现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],
// var arr2 =[2,1,6,8,10]将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列

// var arr1 = [1, 7, 9, 11, 8, 15, 10, 19];
// var arr2 = [2, 1, 6, 8, 10];
// var arr3 = arr1.concat(arr2);
// var arr4 = [];
// // console.log(arr3);

// for(var i=0;i<arr3.length;i++){
//     if(arr4.indexOf(arr3[i])==-1){
//         arr4.push(arr3[i])
//     }
// }

// console.log(arr4)
// for(var i=0;i<arr4.length;i++){
//     for(var j=0;j<arr4.length-i-1;j++){
//         if(arr4[j]>arr4[j+1]){
//             var temp=arr4[j]
//             arr4[j]=arr4[j+1]
//             arr4[j+1]=temp
//         }
//     }
// }
// console.log(arr4)

// 33.  有一个从大到小排好序的数组[99，85，82，63，60]，现从页面输入一个数，要求按原来的规律将它插入数组中，
// 要求，假设你输入的80，则应该插入到82和63之间
// var arr=[99,85,82,63,60];
// var num=55;
// arr.push(num);
// arr.sort(function(a,b){return b-a})
// console.log(arr)
// 35.将一个一维数组，var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
//     通过一定方法，转成二维数组 var newarr = [[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]]

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
// var  length = arr.length;
// var  n = 6;
// var  lineNum = length % n === 0 ? length / n : Math.floor( (length / n) + 1 );
// var  res = [];
// for (var  i = 0; i < lineNum; i++) {
//   var  temp = arr.slice(i*n, i*n+n);
//   res.push(temp);
// }

// console.log(res);

var arr=[99,85,82,63,60];
for(var i=0;arr.length;i++){
    for(var j =0;arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            var temp=arr[j]
            arr [j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log(arr)