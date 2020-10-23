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
let scoreSchema = new mongoose.Schema({
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
  math: {
    type: Number,
    default: 80,
    min: [0, "不能低于0"],
    max: [100, "不能多于100"],
  },
  eng: {
    type: Number,
    default: 80,
    min: [0, "不能低于0"],
    max: [100, "不能多于100"],
  },
  chs: {
    type: Number,
    default: 80,
    min: [0, "不能低于0"],
    max: [100, "不能多于100"],
  },
});
//应用约束
let Score = new mongoose.model("Score", scoreSchema);
//用create方法把数据添加到数据库
Score.create({
  name: "杨文林",
  eng: 88,
  math: 99,
  chs: 80,
});
Score.create({
  name: "贾拉拉",
  eng: 79,
  math: 88,
  chs: 90,
});
Score.create({
  name: "姚姚",
  eng: 90,
  math: 90,
  chs: 90,
});
Score.create({
  name: "王凯",
  eng: 98,
  math: 90,
  chs: 99,
});
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     for (let key in err.errors) {
//       console.log("错误:" + err.errors[key].properties.message);
//     }
//   });
//查询所有学生信息
// Score.find().then((data) => {
//   console.log(data);
// });

//数学成绩降序
// Score.find()
//   .sort("-math")
//   .then((data) => {
//     console.log(data);
//   });

//王凯成绩
// Score.find({
//   name: "王凯",
// }).then((data) => {
//   console.log(data);
// });

//王凯成绩改为100
// Score.updateMany(
//   {
//     name: "王凯",
//   },
//   {
//     math: 100,
//   }
// ).then((data) => console.log(data));
