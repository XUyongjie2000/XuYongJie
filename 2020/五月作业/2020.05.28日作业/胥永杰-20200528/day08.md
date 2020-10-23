## 简答题

1. 创建数据库fullstack2019
```js
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
```
============================Student集合==================
2. 创建集合Student,集合的规则要求如下:
> 姓名:字符出类型，长度最少2个字符，最大6个字符，必传
> 年龄:数字类型，最大年龄不能超过25岁，必传，提示年龄不能大于25岁
> 性别: 字符串类型，只能是男或者是女，枚举，必传，
> 业务爱好:draw,computer,sing,football,running
```js
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
```
=============================增加操作=============================
3. 在Student的集合中插入文档
>姓名:杨文林,年龄:19,性别:男,业务爱好：["draw","computer"]
>姓名:贾拉拉,年龄:18,性别:女,业务爱好：["sing","draw","football"]
>姓名:姚姚,年龄:24,性别:女,业务爱好：["football","computer","running"]
>姓名:王凯,年龄:25,性别:男,业务爱好：["sing","computer"]
```js
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
})
```

=============================Score集合==============================

4. 创建集合Score,集合的规则要求如下
> 姓名:字符出类型，长度最少2个字符，最大6个字符，必传
> 数学成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
> 英语成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
> 语文成绩: 数字类型,不能低于0，不能多于100，必传,添加提示信息
```js
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
```
=============================增加操作===============================
5. 在Score的集合中插入文档
>姓名:杨文林,英语成绩：88，数学成绩：99，语文成绩：80，
>姓名:贾拉拉,英语成绩：79，数学成绩：88，语文成绩：90，
>姓名:姚姚,英语成绩：90，数学成绩：90，语文成绩：90，
>姓名:王凯,英语成绩：98，数学成绩：90，语文成绩：99

6. 查询所有学生的信息
```js
Score.find().then((data) => {
  console.log(data);
});
```

7. 查询年龄大于18岁小于24岁的学生的信息
```js
// 查询 年龄在大于18 小于24之间的数据
Student.find({ age: { $gt: 18, $lt: 24 } }).then((data) => {
  console.log(data);
});
```

8. 查询年龄19岁并且喜欢计算机的男生的信息
```js
//19岁并且爱好是计算机
Student.find({
  age: 19,
  hobbies: { $in: ["computer"] },
}).then((data) => {
  console.log(`19岁并且喜欢计算机的男生的信息有${data}`);
});
```

9. 查询班级中年龄最大的学生的信息
```js
// 降序 第一个就是最大的
Student.find()
  .sort("-age")
  .then((data) => {
    console.log(data);
  });

```

10. 查询年龄是18岁的学生的姓名
```js
//年龄是18岁的学生的名字
Student.find({
  age: 18,
}).then((data) => {
  console.log(data[0].name);
});
```
11. 查询总人数(提示count)
```js
 
```

12. 查询显示第二页的数据，每页显示2条
```js
//分页
Student.find()
  .skip(2)
  .limit(2)
  .then((data) => {
    console.log(data);
  });
```
13. 查询业余爱好里面包含sing的学生的信息
```js
//爱好有sing的学生、
Student.find({
  hobbys: { $in: ["sing"] },
}).then((data) => {
  console.log(data);
});
```
14. 对数学成绩降序输出
```js
//数学成绩降序
Score.find()
  .sort("-math")
  .then((data) => {
    console.log(data);
  });

```

15. 查询姓名是王凯的各科成绩
```js
//王凯成绩
Score.find({
  name: "王凯",
}).then((data) => {
  console.log(data);
});

```

===============================更新操作===============================

16. 将姓名是姚姚的学生的年龄更改为23
```js
 //姚姚年龄改为23sui
Student.updateOne(
  {
    name: "姚姚",
  },
  {
    age: 23,
  }
).then((result) => console.log(result));

```
17. 将所有学生的年龄更改为18
```js
//所有学生年龄改为18岁

Student.updateMany(
  {},
  {
    age: 18,
  }
).then((data) => console.log(data));

```
18. 将王凯的数学成绩更新为100分
```js
//王凯成绩改为100
Score.updateMany(
  {
    name: "王凯",
  },
  {
    math: 100,
  }
).then((data) => console.log(data));

```
==================================删除操作=============================
19. 删除年龄小于20的学生的信息
```js
//删除年龄效于20的数据
Student.deleteMany({
  age: { $lt: 20 },
}).then((data) => {
  console.log(data);
});

```
20. 删除姓名是贾拉拉的这条数据
```js
//删除姓名是贾拉拉这条数据
Student.findOneAndDelete({ name: "贾拉拉" }).then((data) => {
  console.log(data);
});
```

