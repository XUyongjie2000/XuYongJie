// 5.一张纸的厚度大约是0.08mm，对折多少次之后能达到珠穆朗玛峰的高度（8848.13米）？
var num = 0.08;
for (var i = 1; ; i++) {
  num *= 2;
  if (num >= 8848130) {
    break;
  }
}
console.log(i);
