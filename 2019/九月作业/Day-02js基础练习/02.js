//1.console控制台输出
// console.log('我是传智学院的一名学生，我为自己代言')

//2.赋值
// var number ='a'
// number =88
// console.log(number)


//3.六个不同类型变量
// var number =20
// var str ='傻逼舒磊'
// var booler = true
// var undef
// var kong=null
// var obj ={
//   name:'舒磊傻逼',
//   age :10
// }
// console.log(typeof number)
// console.log(typeof str)
// console.log(typeof booler)
// console.log(typeof undef)
// console.log(typeof kong)
// console.log(typeof obj)



// //4.变量值转换
// var number1 =123
// var number2 =456
// var number3 =number1
// number1 =number2
// number2 =number3
// console.log(number1,number2)
//第二种方法
//  var number1 =123
//  var number2 =456
//  var arr =[]
// arr[0]=number1
// arr[1]=number2
// number1=arr[1]
// number2=arr[0]
// console.log(number1);
// console.log(number2);

//5.执行结果
//var myVarVariable = 666
//const myConstVariable = 2
//console.log(myVarVariable);//666
//console.log(myConstVariable);//2
//myVarVariable = 888;
//myConstVariable = 5;
//Console.log(myVarVariable);//报错 
//Console.log(myConstVariable);//报错 常量不能更改

// //6.自定义对象

// var pig = {
//     name : '舒磊',
//     age : 10,
//     gender: '不男不女',
//     height : 153,
//     weight : '100KG',
//     number:250,
//     phone:14138
// }
// console.log(pig)
// //自定义对象第二种方法
// var people = new Object({
//     name : '舒磊',
//     age : 10,
//     height : 153,
//     weight : '100KG'
//   })
// people.book = 'gender'
// people.gender ='男'
// console.log(people)
// 第二种添加属性
// var attrName = 'gender'
// people[attrName]='男'
//  console.log( people.name)
//  console.log( people.age)
//   delete people.weight
//第二遍
//var pig ={
// name :'磊哥'，
// age :12,
// gender:'不男不女'，
// height : 150,
// weight :'150KG',
// number :251
//}
// console.log(pig)
//第二种方法
// var people = new Object({
//   name :'磊哥'，
// age ：13,
// height :160,
// weight :'200KG',
//})
// people.book = 'gender'
// people.gender ='男'
// 第二种添加属性
// var attrName = 'gender'
// people[attrName]='男'
//console.log(people.name)
//console.log(people.age)
//delete people.weight
//第三遍
// var pig ={
//     name :'磊磊',
//     age :15,
//     height : 120,
//     weight:'70KG',
    
// }
// console.log(pig)
// 第二种方法
// var people = new Object({
//     name:'磊磊',
//     age:15,
//     height:110,
//     weight:'60KG'
// })
// people.book ='gender'
// people.gender ='男'
// delete people.weight
// console.log(people.name)
// console.log(people.age)
// 第二种添加属性
// var arrtName ='genter'
// people [attrName]='男'


//7题
// var name ='舒磊'
// var age
// console.log(name)
// console.log(age)

//舒磊
//undefined  未定义

//8.将下列字符串按照句号分段显示，不要一行显示，
// var name ='君不见，黄河之水天上来，奔流到海不复回。\
// \n君不见，高堂明镜悲白发，朝如青丝暮成雪。\
// \n人生得意须尽欢，莫使金樽空对月。\
// \n天生我材必有用，千金散尽还复来。\
// \n烹羊宰牛且为乐，会须一饮三百杯。\
// \n岑夫子，丹丘生，将进酒，杯莫停。\
// \n与君歌一曲，请君为我倾耳听。'
// console.log(name)
//第二种方式
// var si =`君不见，黄河之水天上来，奔流到海不复回。
//   君不见，高堂明镜悲白发，朝如青丝暮成雪。
//   人生得意须尽欢，莫使金樽空对月。
//   天生我材必有用，千金散尽还复来。
//   烹羊宰牛且为乐，会须一饮三百杯。
//   岑夫子，丹丘生，将进酒，杯莫停。
//   与君歌一曲，请君为我倾耳听。`
//   console.log(si)

//9.	将字符串我是"我是中国人"，我爱我的祖国"种的中国人需要加上引号再控制台打印出来，如下图所示:

// var str ="我是'中国人'，我爱我的祖国"
// console.log(str)
//第二种
// var str1='我是\'中国人\',我爱我的祖国'
// console.log(str1)


//10.	定义一个数组，里面放都是数字的类型
//  var number =[04,05,19,20,22]
//  console.log(number[1])
//  number[0] = 666
//  console.log(number[0])
//  number [1]=number[2]+number[4]
//  console.log(number[1])


//11.定义一个数组，里面的元素要把今天所学的数据类型都用到
// var  arr1=['字符串',100,true,false,'str','booler','undef','kong',{name:'舒磊',
// age:10
// }]

//12.定义一个数组，数组里面放2个对象，对象的属性有name,age,gender,studentId,属性值自己写
// var att2=[{name1:'舒磊',
// age1:10,
// gender1:20,
// tudentld1:'100KG'},

// {name2:'杰哥',
// age2:10000,
// gender2:80,
// studentld2:70}]
// console.log(att2[1].name2)
// att2[0].gender1=18
// console.log(att2[0].gender1)
// num=att2[0].age1+att2[1].age2
// console.log(num)

//13.	定义一个数组，数组里面有一个对象，对象里面有属性price,num,name,colors,colors的值是一个数组，
//获取colors数组下标是1的值
// var att3=[{price:100,
//     num:200,
//     name:'杰哥',
//     colors:[4,1,9,5]
// }]
// console.log(att3[0].colors[1])