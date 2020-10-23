// 3. 小区楼号范围1-30，但是由于风水讲究，小区没有包含4、7、14、18、24的楼号，请为小区楼号报号。

for(var i=1;i<=30;i++){
    if(i==4){
        continue
    }
    if(i==7){
        continue
    }
    if(i==14){
        continue
    }
    if(i==18){
        continue
    }
    if(i==24){
        continue
    }
    console.log(i)
}