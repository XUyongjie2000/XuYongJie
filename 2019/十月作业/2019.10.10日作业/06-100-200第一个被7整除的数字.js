// 6.  找到100到200之间第一个能被7整除的数字


// 步骤 
//1.for循环
for(var i=100;i<=200;i++){

    //2.判断某一个数字是否能整除7
    if(i%7==0){
    //  2.1 如果能整除 打印该数字
        console.log(i)
    //2.2 使用break结束循环
         break;
    }
    
    }
    







    // while

    var i =100
    while(i<=200){
        if(i%7===0){
            console.log(i)
            break
        }
        i++
    }