// 14.写一个函数,去掉任意数组中重复的元素，

function qc(arr) {
    var newarr = [];
    for (var i = 0; i < arr.length; i++) {
        if (newarr.indexOf(arr[i]) === -1) {
            newarr.push(arr[i]);
        }
    }
    return newarr;
}

console.log(qc([4,4,5,5,19,22]));