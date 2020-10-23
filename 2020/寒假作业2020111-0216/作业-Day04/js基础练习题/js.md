## js 解答题

1. 请简述 `typeof` 的用途，`typeof` 的返回结果都是什么数据类型？

   判断简单的数据类型

   string object undefinrd number boolean null function

   ```js
   console.log(typeof param); //'undefined'
   console.log(typeof false); //'boolean'
   console.log(typeof "1"); //'string'
   console.log(typeof 1); //'number'
   console.log(typeof NaN); //'number'
   console.log(typeof null); //'object'
   var strObj = new String();
   console.log(typeof strObj); //'object'
   var fun = function() {};
   console.log(typeof fun); //'function'
   console.log(typeof class clz {}); //'function'
   ```

2) 数据类型转换，转 Number 类型有哪些方式？

1.Number
2.parseInt
3.parseFloat
4.+

3. 数据类型转换，转 String 类型有哪些方式？哪个方式存在什么限制？
   1.String()
   2.toString
   toString 存在限制：不能转换：'undefined'和'null'

   ```
   const value = 12345;
   // Concat Empty String
   value + '';
   // Template Strings
   `${value}`;
   // JSON.stringify
   JSON.stringify(value);
   // toString()  //不能把null和undefined转换为字符串
   value.toString();
   // String()
   String(value);
   // RESULT
   // '12345'
   ```

4) 数据类型转换，转 Boolean 类型有哪些方式？

   boolean（变量名）

   !!（变量名）

   ```
   var num123 = 123,
   num123 = Boolean(num123); //true
   num123 = !!(num123); //true
   ```

5. 什么是隐式类型转换，有哪些是隐式类型转换？

   不用添加任何代码系统自动转换数据类型

   ```
   //1、+号
   3 + true;
   // 结果：4
   "2" + 3;
   // 结果："23"
   //2、===
   var x = NaN;
   x === NaN; // false
   //3、isNaN
   isNaN("foo"); // true
   isNaN(undefined); // true
   isNaN({}); // true
   isNaN({ valueOf: "foo" }); // true
   ```

   转成 string 类型： +（字符串连接符）

   转成 number 类型：++/--(自增自减运算符) + - \* / %(算术运算符) > < >= <= == != === !=== (关系运算符)

   转成 boolean 类型：!（逻辑非运算符）

## js 编程题

1. 回答下面代码中的结果

   ```js
   console.log(typeof [])  object
   console.log(typeof [666]) object
   console.log(typeof [{age:18}]) object
   console.log(typeof NaN) number
   console.log(typeof 'true')  string
   console.log(typeof typeof undefined)  string
   ```

2. 说出下面元素转 Number 类型的结果 number（）转

   ```js
   1) '' 0
   2) '666' 666
   3) '88&' NaN
   4) true  1
   5) false 0
   6) null 0
   7) undefined NaN
   8) { }   NaN
   9) {name:"9",age:9} NaN
   10) [] 0
   11) [1] 1
   12) [1,1] NaN
   13) [[]] 0
   14) [[1]] 1
   ```

3. 说出下面元素转 String 类型的结果

   ```js
   1) 666     666
   2) ''
   3) true   true
   4) false   false
   5) null  null
   6) undefined  undefined
   7) { }  [object Object]
   8) {name:"9",age:9} [object Object]
   9) []
   10) [1,'A']   1,A
   11) [8,{age:8},8]     8,[object Object],8
   12) [1,[2,[3]]]    1,2,3
   ```

4. 说出下面元素转 Boolean 类型的结果

   ```js
   1) 0 false
   2) 1 true
   3) -1 true
   4) '' false
   5) '0' true
   6) NaN false
   7) null false
   8) undefined  false
   9) { }  true
   10) {name:"9",age:9} true
   11) [] true
   11) [0]true
   12) [false]true
   12) [null,undefined]true
   ```
