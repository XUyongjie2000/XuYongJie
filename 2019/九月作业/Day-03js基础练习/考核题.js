//1. 定义一个数组，保存六种数据类型的名称？
// var att =[1,'字符串',true,undefined,null,{name:'胥永杰',
// age:19}]


//2. 定义一个对象，保存你自己的名字、年龄、爱好？
// var people={name:'胥永杰',
// age:19,
// hobby:'桌球'}
// console.log(people)

//3. 有一个数组：var arr = [12,43,54,43]，写代码计算数组中第1个元素和第3个元素的和？
// var arr=[12,43,54,43]
// arr1=arr[0]+arr[2]
// console.log(arr1)


//4. 定义一个二维数组（随便放些数据进去）？

// var att=[1,2,3,['胥','永杰']]
// console.log(att)

//5. 有两个变量 a 和 b ，请写代码交换这两个变量的值？
// var num1='a'
// var num2='b'
// var num3=num1
// num1=num2
// num2=num3
// console.log(num1,num2)



//6. 有一个对象： var obj = {name:'tom',age:10,books:['水浒','西游']} ，写代码打印出 name 属性和 books 中第2个元素？
  //console.log(obj.name)
  //console.log(obj.book[1])


  //7. 定义两个变量保存两个数字，然后再定义一个变量保存前两个变量的和？

// var num1=5
// var  num2=6
// var num3=num1+num2
// console.log(num3)

//8. 定义一个包含多行和另一个变量值的字符串？
// num1=5
// var name=`1234564
// 6465654
// 654454,${num1}`
// console.log(name)



//9. 定义一个数组，数组中保存两个对象，然后打印数组中第二个对象的随便一个属性？

// var att=[{name:'胥永杰',
// age:19},{name1:'杰哥',
// age1:20}]
// console.log(att[1].name1)




//10. 有一个数组：var arr = [13,54,65,23,54]，写代码计算数组中第2个元素和第4个元素的和，并把和保存到第3个元素上 
// var arr=[13,54,65,23,54]
// arr[2]=arr[1]+arr[3]
// console.log(arr[2])



//11.说出下面代码的运行结果,并且解释原因:
// var name = '张三';
//     var age ;
//     const gender ="女";
//     name = "李四"  ; //中文字符
//     console.log(name);
//     console.log(age);   //age 未定义数值
//     gender = "男";    //定量不能改变
//     console.log(gender);



//12.下列变量名哪个不正确
// var sname ;  var 1age ; var Name;
//第二个  不能用数字开头


//1、数据类型有几种？
//5中简单数据类型  2中复杂数据类型 共七种


//2、什么是对象？如何创建对象？
// 对象  由多个键值对组合到一起形成的一种类型。每个对象由多个键值对组成。
//方法一·使用{....}
//方法二·使用new Object（{...}）


//3、如何读取和修改和删除对象中的值？
// 读取 console.log(对象名称.属性)
// 修改 对象名称.属性 = 修改内容
// 删除  delete 对象名称.属性

//4、什么时候会出现 undefined？
// undefined表示未定义，
// 定义一个变量，但没有赋值，就会出现undefined，表示该变量未赋值


// 5、什么是数组？如何创建数组？
// 数组：把同一类的数据放到一组。
// 方法  (1. var arr =[1,2,3,4,5,6,7]
//     （2. var arr = new Array（1，2，3，4，5）

// 6、如何获取和修改数组中的某一个值？
// 获取  console.log(数组名称[下标])
//        修改   数组名称[下标]= ‘修改内容’



// 7、js变量命名有什么规范？
// 不能以数字开头，只能包含数字，字母，下划线，不能使用关键字。
// 常量最好用大。

// 8、如何定义多行字符串？有几种方法？
// 反引号 var si = .......
// 2种


// 9、Boolean 类型有几个值？分别代表什么？

// 答： 两个  true 表示真 ，false 表示假。

// 10、字符串中能解析变量吗？怎么解析？
// 字符串中可以包含变量，并且可以解析变量
//${}