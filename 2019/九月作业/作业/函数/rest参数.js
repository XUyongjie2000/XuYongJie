// rest参数
// 因为 arguments不能使用数组的方法  但是rest参数可以
// rest参数就是用来代替arguments的


//rest参数的语法
//rest参数也只能用在函数中
//rest参数接收的是函数的剩余实际参数 arguments接收的是函数的全部参数
//rest 是个数组
//语法。。。变量

// function fn(...rest){
//     // console.log(rest)   //[1,2,3,4]
//     rest.push(5)
//     console.log(rest)   //[1,2,3,4,5]
// }
// fn(1,2,3,4)

//rest参数接收的是函数的剩余实际参数
// function fn(a,...rest){
//     console.log(rest)   //[2,3,4,5]
// }
// fn(1,2,3,4,5)


//注意： rest参数只能是最后一个参数
// Rest parameter must be last formal parameter
//  rest参数 只能是最后一个参数
// function fn(...rest,a){
//     console.log(rest)
// }
// fn(1,2,3,4)