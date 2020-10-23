// 打印1到10之内的整数，但数字中看到3的要跳过
//步骤
//使用for循环
for(var i=1;i<=10;i++){
    //判断是不是3
    if(i===3){
        //如果是 直接continue
        continue
    }
    //打印输出
    console.log(i)
}