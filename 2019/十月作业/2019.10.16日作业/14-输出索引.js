/*14.已知数组{"周兴迟","刘一飞","赵本善","孙妍姿","王妃","陈怡迅"}.
    请查找出数组中是否有孙妍姿、汪菲。 
    如果有，请给出索引；
    如果没有给出-1。*/
    var arr = ["周兴迟", "刘一飞", "赵本善", "孙妍姿", "王妃", "陈怡迅"]
    //语法: 数组名.indexOf(你要找的是那个元素)  
    //找到该元素 返回该元素的索引 找不到 返回-1
    var index = arr.indexOf('孙燕姿', '王菲')
    console.log(index)