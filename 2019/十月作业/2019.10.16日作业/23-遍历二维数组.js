/*23.现有二维数组，var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];                                       
   1. 遍历打印二维数组的所有元素
   2. 计算二维数组中所有元素的和
   3. 求二维数组中所有元素的最大值。*/

   //声明二维数组
   var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]
   //声明变量
   var sum = 0
   //声明一个最大值
   var max=array[0][0]
   //遍历
   for (var i = 0 ; i < array.length ; i++){
       //内循环遍历
    for (var j =0; j <array[i].length;j++) {
        //判断数组中的值
        if(array[i][j]>max){
            //给max赋最大的值
            max=array[i][j]
        }  //运算
        sum+=(array[i][j])}
        //输出
   }console.log(sum)
   console.log(max)