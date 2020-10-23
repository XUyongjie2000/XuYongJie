function fn(){
    console.log(arguments)
    console.log(arguments[2])
    // arguments.push(5)
    //arguments.push is not a function
//     arguments是一个特殊对象 也是一个伪数组 很难不能使用数组的方法
}
fn(1,2,3,4)



//总结 ：能遍历 能通过索引找到元素 但是不能使用数组的方法 就是伪数组