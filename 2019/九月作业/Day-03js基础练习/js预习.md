# 运算符

## 1.算术运算符

## 2.赋值运算符

## 3.比较运算符

## 4.逻辑运算符

## 5.三元运算符

### 1. 什么是运算符？

答：用于将一个值进行运算从而得出所需要的结果值。数据可以是常量，也可以是变量。被运算符操作的数又称为操作数。（运算符一般只操作几基本数据类型数据{5个}，不操作复杂类型数据）{对象是复杂}。

### 2.算术运算符

答：将操作符参与数学计算（通常为数学计算，+也有特殊用法，也可连接字符串）
**（1.加法**

运算符：+

var a =2
var b =3
var result=a+b
console.log(result)         // 5

**（2.连接字符串**
运算符：+
var a ='我爱你'
var b ='杰哥'
var result=a+b
console.log(result)     // 我爱你杰哥

**（3.减法**

运算符：-
var a=5
var b=3
var result=a-b
console.log(result)     // 2
 **(4.乘法**
运算符：*
var a=2
var b=3
var result=a*b
console.log(result)    //6
**（5.除法**
运算符：/
var a=2
var b=3
var result =b/a
console.log(result)   // 1.5
**(6.取余数{取模}**
运算符：%
var a=2
var b=3
var resulet=b%a              //3除2等于1 余1    结果等于余数
console.log(result) //1
**（7.自增运算符**
运算符： 前置自增++a  后置自增a++
++表示在原来的基础上加1， a++相当于a+1



{单独使用时候没有区别}
***a++***：
var a=3
a++ 
console.log(a)  //4     {3+1}
***++a***
var a=3
++a
console.log(a)   //4     {3+1}


##### 混合使用 a++  ++a

#####  混合使用时，a++称为后置++，先使用值，再自增1

#####           ++a称为前置，先自增1，再使用值



//a++
var a=3
var b=4
var result=a++ +b
console.log(result)    //7
console.log(a)     //4   {相加时候a等于3，   计算结束后 a+1等于4}

//++a
var a=3
var b=4
var result=++a + b
console.log(result) //8
console.log(a)  //4   {先计算a+1 ，a等于4， 4+4等于8}


### a--    和   --a 同理

### 3.赋值运算符

1.为变量赋值的运算符。
（1.普通赋值=
var a =5
console.log(a)   //5



(2. 加后赋值 +=
var a=5
a+=5   //相当于a=5+a
console.log(a)  // 10



(3.减后赋值 -=
var =5
a-=5  // 相当于a=5-a
console.log(a)  //0

(4.乘后赋值 *=
var =5
a*5   //相当于a=5 *a
console.log(a)   // 25



(5. 整除后赋值/=
var a=5
a/5=  //  相当于a=5/a
console.log(a)  //1



(6.  取模后赋值 %=
var a=5
a%=5  相当于a=5%a 
console.log(a)   //0   { 取模=取余数   5除5等于1  没有余数 所以a=0}



### 4.比较运算符

答：又叫关系运算符，判断两个操作数的大小关系及是否相等的关系，
比较运算符的返回值**一定**为布尔值。
（1. 相当于==
var a=2
var b=2
var c=3
console.log(a==b,a==c)   // true  false   {a=b=2,所以布尔为true，a=2,c=3, a不等于c 所以布尔为false}

（2.绝对等于 （值和类型均相等）===
var a=123
var b=123
var c='123'
console.log(a===b,a===c); true false{ ab数值相同 类型相同所以布尔值为true，  ac数值相同 但类型不同 所以布尔值为false}

（3.不等于 !=
var a=5
var b=5
var c=6
console.log(a!=b,a!=c)   //   false true  {ab相等 所以布尔值为true  ac不等 所以布尔值为true  **运算符号为不等于**}

（4. 小于<
var a=5
var b=5
var c=4
var d=6
console.log(a<b,a<c,a<d)   //  false  false true

（5.大于
**同理小于**



（6.小于等于 <=
数值**小于等于**另一个数值为true
数值大于另一个数值为false

（7.大于等于>=
道理同上



### 5.逻辑运算符

逻辑运算符用于测定变量或值之间的逻辑 

1.与  &&  {有一个假就为假}
var a=5
var b=3
var c=2
console.log(a>b&&a>c)   // true   {真真为真}
console.log(a>b&&c>a)   //false  {真假为假}
console.log(a==b&&a==c) // false{假假为假}



2.或 ||  {有一个真就为真}
道理同上   
真真为真
真假为真

假假为假



3. 非 ！  {反过来}
   var a=4
   var b=6
   console.log(a<b)   // true
   console.log(!(a<b)) //false

   

   ### 6.三元运算符

   条件运算符又称三元运算符即三个操作数参与计算的运算符。 ① 判断（1.条件表达式

   （2. 若条件表达式为true，运算结果为结果1

   （3.  若条件表达式为false，运算结果为结果2

​          **格式：(条件表达式)？结果1：结果 2**    

![](D:\东北\js预习1.png)
![](D:\东北\js预习2.png)例2：

var sex="女";

(sex=="男")?console.log("不好意思，男士勿扰"):console.log("欢迎光临，美丽的女士");    // 欢迎光临，美丽的女士

判断sex是否为男，如果是男，就走冒号(:)左边的表达式 “不好意思，男士勿扰”，否则的话，就走冒号(:)右边的表达式 "欢迎光临，美丽的女士"







##### 小结

**①  算术运算符**

​      将操作符参与数学计算(通常为数学计算，+号也有特殊的用法，如连接字符串)

**②  赋值运算符**

​      为变量赋值的运算符

**③  比较运算符**

​      又叫关系运算符，即判断两个操作数的大小关系及是否相等的关系，比较运算符的返回值一定为布尔值。

**④  逻辑运算符**

​      逻辑运算符用于测定变量或值之间的逻辑。

**⑤  三元运算符**

​      **又叫条件运算符即三个操作数参与计算的运算符。**

# 运算符优先级

运算符优先级越高，计算顺序越靠前
运算符优先级（从上到下，由高到低），优先级相同的情况下，按照从左到右的顺序 
![](D:\东北\图片1.png)



# JavaScript弹窗

## 1.警告框

## 2. 确认框

## 3. 提示框

## 1.警告框



①什么是警告框？

答：警告框经常用于确保用户可以得到某些信息。

当警告框出现后，用户需要点击确定按钮才能继续进行操作

![1569415689718](C:\Users\99706\AppData\Local\Temp\1569415689718.png)
语法：②语法

window.alert("sometext");   sometext 表示要弹出的语句
window.alert() 可以不带上window对象  直接使用alert方法
比如  alret（“xxx”）

## 2.确认框



①什么是确认框？

确认框通常用于验证是否接受用户操作。

当确认卡弹出时，用户可以点击 "确认" 或者 "取消" 来确定用户操作。

当你点击 "确认", 确认框返回 true， 如果点击 "取消", 确认框返回 false。

![1569415872236](C:\Users\99706\AppData\Local\Temp\1569415872236.png)

实例：

var r = confirm("你好，我是一个确认框");  
r==true?alert("你按下了'确定'按钮!"):alert("你按下了'取消'按钮!"); 
![1569416059456](C:\Users\99706\AppData\Local\Temp\1569416059456.png)\3. 提示框

**①什么是提示框？**
提示框经常用于提示用户在进入页面前输入某个值。

当提示框出现后，用户需要输入某个值，然后点击确认或取消按钮才能继续操纵。

如果用户点击确认，那么返回值为输入的值。如果用户点击取消，那么返回值为 null。





②语法

**window.prompt("sometext","defaultvalue");**

sometext 表示要求用户输入的语句 
defaultvalue 表示输入框内的默认值

window.prompt() 方法可以不带上window对象，直接使用prompt()
![1569417988107](C:\Users\99706\AppData\Local\Temp\1569417988107.png)
**提示框实例**
var person = prompt("请输入你的名字"); 
(person == null && person != "") ? alert("欢迎来到" + person + "的首页"): alert("名字不能为空"); 

![1569418169241](C:\Users\99706\AppData\Local\Temp\1569418169241.png)
