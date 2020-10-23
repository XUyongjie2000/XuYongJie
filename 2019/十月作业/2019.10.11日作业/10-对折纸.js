// 10.一张纸的厚度大约是0.08mm，对折多少次之后能达到珠穆朗玛峰的高度（8848.13米）？


var count=0
var i=0.08
while(i<=8848.13){
    i=i+i
    count ++;
}
console.log('一张纸对折'+count+'次达到8848.13米')