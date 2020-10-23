//10.定义一个长度为10的数组，在每一个元素存放一个单词，然后用户输入单词进行匹配，
//通过程序判断数组是否包含有这个单词，包含这个单词打印"YES",否则就是"NO"

//步骤：
//声明数组
var arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

//查询单词
var dc = 'nie'
//遍历
for (var i = 0; i < arr.length; i++) {
    //判断是否存在
    var flag =1;
    //判断数组中单词是否存在
    if (dc.indexOf(arr[i]) != -1) {
        //如果存在
        flag = 2
        //则终止
        break;
    }
}//判断如果存在
if (flag == 2) {
    //输出yes
    console.log('yes')
    //如果不存在
} else if (flag == 1) {
    //输出no
    console.log('no')
}