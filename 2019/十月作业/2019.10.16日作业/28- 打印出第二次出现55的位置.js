//28. 在数组中 查询数据第二次55出现的位置,打印第二次出现的索引（索引指从0开始）[11, 32，55, 47，55, 79，23]

//声明数组
var arr = [11, 32, 55, 47, 55, 79, 23]
var a = 0;
//遍历数组
for (var i = 0; i < arr.length; i++) {
    // 判断
    if (arr[i] == 55) {
        //累加
        a++;
        //判断cont的值
        if (a==2) {
            // 打印
            console.log(i)
        }
    }
}