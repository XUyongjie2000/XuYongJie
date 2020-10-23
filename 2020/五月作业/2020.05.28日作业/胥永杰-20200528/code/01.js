//1.连接数据库
//1.引入mongoose这个包
const mongoose = require("mongoose");
//2.使用mongoose的包的connect方法连接数据库
mongoose
  .connect("mongodb://localhost/fullstack2019", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("数据库连接成功");
  })
  .catch((err) => {
    console.log(err, "数据库连接失败");
  });

//创建信息集合
let studentSchema = new mongoose.Schema({
  //姓名
  name: {
    type: String,
    validate: {
      validator: (v) => {
        return v && v.length >= 2 && v.length <= 6;
      },
      message: "您的名字不符合姓名规则",
    },
  },
  //年龄
  age: {
    type: Number,
    dafault: 18,
    max: [25, "年龄不能大于25岁"],
  },
  //性别
  gender: {
    type: String,
    //枚举
    enum: {
      values: ["男", "女"],
      message: "只能是男或者女",
    },
  },
  //爱好
  hobbies: {
    type: [String],
    //枚举
    enum: {
      values: ["draw", "computer", "sing", "football", "running"],
      message: "您的爱好不在正常范围内",
    },
  },
});
//应用约束
let Student = new mongoose.model("Student", studentSchema);

//用create方法把数据添加到数据库
Student.create({
  name: "杨文林",
  age: 19,
  gender: "男",
  hobbies: ["draw", "computer"],
});
Student.create({
  name: "贾拉拉",
  age: 18,
  gender: "女",
  hobbies: ["sing", "draw", "football"],
});
Student.create({
  name: "姚姚",
  age: 24,
  gender: "女",
  hobbies: ["football", "computer", "running"],
});
Student.create({
  name: "王凯",
  age: 25,
  gender: "男",
  hobbies: ["sing", "computer"],
});
// .then((data) => {
//   console.log(data);
// })
// .catch((err) => {
//   for (let key in err.errors) {
//     console.log("错误:" + err.errors[key].properties.message);
//   }
// });

// 查询 年龄在大于18 小于24之间的数据
// Student.find({ age: { $gt: 18, $lt: 24 } }).then((data) => {
//   console.log(data);
// });

//19岁并且爱好是计算机
// Student.find({
//   age: 19,
//   hobbies: { $in: ["computer"] },
// }).then((data) => {
//   console.log(`19岁并且喜欢计算机的男生的信息有${data}`);
// });

// 降序 第一个就是最大的
// Student.find()
//   .sort("-age")
//   .then((data) => {
//     console.log(data);
//   });

//年龄是18岁的学生的名字
// Student.find({
//   age: 18,
// }).then((data) => {
//   console.log(data[0].name);
// });

//删除姓名是贾拉拉这条数据
// Student.findOneAndDelete({ name: "贾拉拉" }).then((data) => {
//   console.log(data);
// });

//分页
// Student.find()
//   .skip(2)
//   .limit(2)
//   .then((data) => {
//     console.log(data);
//   });

//爱好有sing的学生、
// Student.find({
//   hobbys: { $in: ["sing"] },
// }).then((data) => {
//   console.log(data);
// });

//姚姚年龄改为23sui
// Student.updateOne(
//   {
//     name: "姚姚",
//   },
//   {
//     age: 23,
//   }
// ).then((result) => console.log(result));

//所有学生年龄改为18岁

// Student.updateMany(
//   {},
//   {
//     age: 18,
//   }
// ).then((data) => console.log(data));

//删除年龄效于20的数据
Student.deleteMany({
  age: { $lt: 20 },
}).then((data) => {
  console.log(data);
});
