// 打印1-10内的整数  看到数字3要跳过

//分析
// 使用for循环 找出1-10所有数字
//判断数字是不是3 如果是3直接continue(跳过)

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



