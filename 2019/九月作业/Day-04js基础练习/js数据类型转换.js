// var att='hello word~'
// var att='nuderfined'
// var att={}
// var att=({name:'xyj'})
// var att=(['a','b','c','d'])
// var att='13abcd'
// var att=([])
// var att=[1]
// var att=[6]
// var att=''
// var att='13'
// var att=true
// var att=false
// var att=null

// console.log(Number('hello word~'))      // NaN
// console.log(Number(undefined))          // NaN
// console.log(Number({}))                 // NaN
// console.log(Number({name:'xyj'}))       // NaN
// console.log(Number(['a','b','c','d']))  // NaN
// console.log(Number('13abcd'))           // NaN


// console.log(Number([]))        //0
// console.log(Number([1]))      //1
// console.log(Number([6]))      //6
// console.log(Number(''))       //0
// console.log(Number('13'))     //13
// console.log(Number(true))     //1
// console.log(Number(false))    //0
// console.log(Number(null))     //0




// console.log(+('hello word~'))      // NaN
// console.log(+(undefined))          // NaN
// console.log(+({}))                 // NaN
// console.log(+({name:'xyj'}))       // NaN
// console.log(+(['a','b','c','d']))  // NaN
// console.log(+('13abcd'))           // NaN


// console.log(+([]))        //0
// console.log(+([1]))      //1
// console.log(+([6]))      //6
// console.log(+(''))       //0
// console.log(+('13'))     //13
// console.log(+(true))     //1
// console.log(+(false))    //0
// console.log(+(null))     //0








// console.log(parseInt('hello word~'))      // NaN
// console.log(parseInt(undefined))          // NaN
// console.log(parseInt({}))                 // NaN
// console.log(parseInt({name:'xyj'}))       // NaN
// console.log(parseInt(['a','b','c','d']))  // NaN
// console.log(parseInt([]))        //NaN
// console.log(parseInt(''))       //NaN
// console.log(parseInt(true))     //NaN
// console.log(parseInt(false))    //NaN
// console.log(parseInt(null))     //NaN


// console.log(parseInt('13abcd'))           // 13
// console.log(parseInt([1]))      //1
// console.log(parseInt([6]))      //6
// console.log(parseInt('13'))     //13







// console.log( parseFloat('hello word~'))      // NaN
// console.log( parseFloat(undefined))          // NaN
// console.log( parseFloat({}))                 // NaN
// console.log( parseFloat({name:'xyj'}))       // NaN
// console.log( parseFloat(['a','b','c','d']))  // NaN
// console.log( parseFloat([]))        //NaN
// console.log( parseFloat(''))       //NaN
// console.log( parseFloat(true))     //NaN
// console.log( parseFloat(false))    //NaN
// console.log( parseFloat(null))     //NaN

// console.log( parseFloat('13abcd'))           // 13
// console.log( parseFloat([1]))      //1
// console.log( parseFloat([6]))      //6
// console.log( parseFloat('13'))     //13



// console.log(Boolean('hello word~'))      // true
// console.log(Boolean(undefined))          // false
// console.log(Boolean({}))                 // true
// console.log(Boolean({name:'xyj'}))       // true
// console.log(Boolean(['a','b','c','d']))  // true
// console.log(Boolean('13abcd'))           // true


// console.log(Boolean([]))        //true
// console.log(Boolean([1]))      //true
// console.log(Boolean([6]))      //true
// console.log(Boolean(''))       //false
// console.log(Boolean('13'))     //true
// console.log(Boolean(true))     //true
// console.log(Boolean(false))    //false
// console.log(Boolean(null))     //false
















//1.在控制台打印输出目前所学的所有数据类型的类型
// console.log(typeof 123)   //number
// console.log(typeof '字串符') //string
// console.log(typeof true)    //boolean
// console.log(typeof {})    //object
// console.log(typeof undefined) //undefined
// console.log(typeof [])   //object
// console.log(typeof null)//object
// console.log(typeof [1,2,3])//object
// console.log(typeof Symbol()) //symbol
// console.log(typeof function(){1}) //function



// 2.数据类型的相互转换:
//  Number(true)  // 1
//  Number(false) // 0
//  Number(" ") // 0
//  Number( [] ) //0
//  Number(['1','2']) //NaN
//  Number([1]) // 1
//  Number({})   //NaN
//  Number({a:1}) // NaN
//  Number("3.14") //3.14
//  Number(null) // 0
//  Number(undefined) //NaN
//  Number("12456aaaa") //NaN
//  String({}) // 字符串：[object Object]
//  String([]) // 空的字符串：‘ ’
//  String(123) //字符串123
//  String(false) //false
//  String(null) //字符串null
//  String(undefined) //Symbol()
//  undefined.toString() // 报错
//  null.toString()  //报错
//  Boolean(0) // false
//  Boolean("") //false
//  Boolean(undefined) //false
//  Boolean(null) //false
//  Boolean(NaN) //false
//  Boolean({}) // true
//  Boolean([])  // true


//3. 将下列结果打印出来下面的题的结果
// var num1 = 123;
// var num2 ="123"
// console.log(num1+num2)  // 字符串连接  前一个是数字123 后一个是字符串123
// console.log(num1 + +num2)  //  第二个加号把字符串转换成数字  然后两数字相加
// console.log(num1 + !! num2)  //  先转化成布尔值  true 然后转化成数字1   123+1=124
// console.log(num1+Number(num2))  // 把第二个字符串转换成数字 然后相加等于246



//4. 求值
// var a = 1; var b = ++a + ++a;   console.log(b);  //  a 先加1 等于2   2再加1等于3   最后3+2等于5
// var a = 1; var b = a++ + ++a;   console.log(b);  //  后面的++a先加1  a等于二  2+1等于3 a++计算后再加1 等于4 
// var a = 1; var b = a++ + a++;   console.log(b);  //    1+1等于2   计算后a再加1   2+1=3
// var a = 1; var b = ++a + a++;   console.log(b);  // 前面的a先加2等于2  2+1等于3 计算结束后a++再加1  等于4


//5.输出下面的结果:
// console.log ( NaN == NaN );//false  NaN与自身不相等，NaN 属性是代表非数字值的特殊值。
// console.log( NaN === NaN ); //false   NaN不与任何值相等，该属性用于指示某个值不是数字
// console.log ( undefined == null );//true  Javascript规范中规定：比较相等性之前，不能将 null 和 undefined 转换成其他任何值，并且规定null 和 undefined 是相等的。
// console.log ( undefined === null );//false   它们不属于同一数据类型。
// console.log ( 1 + "true" ); // 1true   字符串连接  1与字符串true连接
// console.log ( 1 + true );  //2      true转换成数字等于1   1+1=2
// console.log ( "abc" > "b" ); //false   因为js字符串字符在unicode中的码位比较大小  a的码位是97 b的码位是98 所以a不大于b 所以结果为false
// console.log ( "abc" > "aad" ); //true   因为js的字符串按字符在unicode中的码位来比较大小   a的码位是97  所以第一个相等   在比较第二位  而b的码位是98    所以b大于a  所以结果为trun
// console.log ( [] == [] ); //flase        简单数据类型与复杂数据类型不相等      值相同，但是两个独立的对象，占了两份内存空间。
// console.log ( [] === [] ); //flase        简单数据类型与复杂数据类型不相等     值相同，但是两个独立的对象，占了两份内存空间。
// console.log ( [] == ! [] ); // true        简单数据类型与复杂数据类型不相等   值相同，但是两个独立的对象，占了两份内存空间。
// console.log ( [] == 0 );//true           简单数据类型与复杂数据类型不相等      值相同，但是两个独立的对象，占了两份内存空间。
// console.log ( ! [] == 0 );//true         简单数据类型与复杂数据类型不相等     值相同，但是两个独立的对象，占了两份内存空间。





// //6.输出下面的结果:
// var a = (10 * 3 - 4 / 2 + 1) % 2,   
// 　  b = 3;
// b %= a + 3;  
// console.log(a++); //  var a=1   b=3  b %= a + 3   b=3%4 =3  a++先出值1  再输出才会变成2
// console.log(--b); //  b=3  --b 等于2  



// //7.输出下面的结果:
//  console.log(3+2||0&&true)  // 5
//  console.log(undefined&&5) // undefined
//  console.log(1&&2&&3) //3
//  console.log(1&&0&&3) //0
//  console.log(2+3>1&&4|| 4&&5%6) // 4
//  console.log(5+10/2&&4>3||7-4)  //true


//  //8. 输出下面的结果:
//  var num1 = 20;
//  var num2 = 30
//  console.log(num1%num2);  // 20
//  num1+= num2    //num1 = num1+num2
//  console.log(num1);  // 50
//  num1 = num1- num2;  // num1-=num2
//  console.log(num1);   // 20


 //9.世界上表示气温有两种方法：摄氏度和华氏度。两者的关系是：华氏度=(9/5)*摄氏度+32
   //利用JavaScript编写程序，要求：当输入不同摄氏度，提示出对应的华氏温度
//    var tem =32
//    var htem =(9/5)*tem+32
//    console.log(htem)  



//10.在定义变量名字, 年龄,地址，打印出:我是XXX,今年XX岁了，我来自XXX。
// var name='胥永杰'
// var age =19
// var form='黑龙江'

// console.log(`我是${name},今年${age}岁了,我来自${form}`)