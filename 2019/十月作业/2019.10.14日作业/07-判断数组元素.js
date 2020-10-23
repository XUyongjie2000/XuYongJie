// 7.定义一个长度为10的数组，在每一个元素存放一个单词，然后用户输入单词进行匹配，
//通过程序判断数组是否包含有这个单词，包含这个单词打印"YES",否则就是"NO"

var arr = ["apple","one","two","three","four","fifve","six","seven","eight","nine"];
var str='one'
var flag=true;
for(var i=0;i<arr.length;i++){

    if(str==arr[i]){
        flag=true;
        break;
    }else{
        flag=false;
    }
}


if (flag) {
    console.log("YES");
}else {
    console.log("NO");
}
