//需求  ：['赵云','马超','吕布','上官婉儿'] 变成：赵云|马超|吕布|上官婉儿



// var arr =['赵云','马超','吕布','上官婉儿']
// var str=''
// for(var i=0;i<arr.length-1;i++){
//     str+=arr[i]+'|'
// }
// console.log(str+arr[arr.length-1])



// 使用join
var arr =['赵云','马超','吕布','上官婉儿']
//语法  数组名.join（分隔符） 返回了一个用分隔符连起来的字符串

var str=arr.join('|')
console.log(str)