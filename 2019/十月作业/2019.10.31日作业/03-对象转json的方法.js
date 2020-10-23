let obj = {
  name: "zhangsan",
  age: 18,
  brother: {
    gege: "a",
    dd: "b",
    jj: "c",
    mm: "d"
  }
};

// 对象转json
// JSON.stringify(对象或数组)

// let objJson = JSON.stringify(obj);
// console.log(objJson);

let arr = ["a", "b", "c"];

console.log(JSON.stringify(arr));
