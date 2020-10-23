var arr =['zs','ls','ww','zl']

//forEach  方法
//语法:  数组名.forEach(function(元素，索引){}})  void代表没有返回值

arr.forEach(function(item,index){
    console.log('索引是'+index+',值是'+item)
})

//function函数
//value  参数 所代表的含义是 数组中的每一项
//index 参数  所代表的含义是索引


arr.forEach(function(value,index){
    console.log('索引是'+index+',值是'+value)
})