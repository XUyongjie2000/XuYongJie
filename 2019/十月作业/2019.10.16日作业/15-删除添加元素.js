/*15. 有一个数组，var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
要求如下:
   1.从第 0 位开始删除 1 个元素，插入"parrot"、"anemone"和"blue"
   2.从第 2 位开始删除 2 个元素
   3.从第 1 位开始删除 0 个元素，插入“drum” 和 "guitar"*/

   //声明数组
   var myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
   //运用语法splice  添加
   myFish.splice(0, 1, "parrot", "anemone", "blue")
   //运用语法splice  删除
   myFish.splice(2, 1)
   //运用语法splice  添加
   myFish.splice(1, 0, 'durm', 'guitar')
   //输出
   console.log(myFish)  