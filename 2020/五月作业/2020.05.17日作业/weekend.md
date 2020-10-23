# 简答题（注意自己写，从下周开始我会在自习课的时候或者是周三抽查人企业微信写）

1. 目前你所学的请求方式有哪些？区别是什么？(不要直接把百度的粘上来，用自己的话总结)
```js
get请求  
get请求在传输过程中数据会被放到url中 不安全
post请求
post请求不会放在url中 安全
```

2. 原生的ajax怎么发请求?(get和post的方式都写出来,每行写上注释)
```js
 //get
  //1.实例化XMLHttpRequest
    let xhr = new XMLHttpRequest();
  //2 设置请求行(请求方式 请求地址)
    xhr.open('GET', `/请求地址?key=value&key1=value1`)
  // 3 发送请求
    xhr.send(null)
  // 4 监听并处理响应
    xhr.onreadystatechange = () => {
    //判断状态码
    if(xhr.status == 4 && xhr.readyState == 200){
        //把数据显示在页面上
        console.log(xhr.responseText);
    }
  //post 请求
  // 1.实例化XMLHttpRequest对象
     let xhr = new XMLHttpRequest();
  // 2.设置请求行(请求方式 请求地址)
     xhr.open('POST', '/请求地址');
  // 使用POST请求必须添加请求头，form表单自动就是这样的Content-Type
     xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  //  3.发送请求数据 
     xhr.send('username=zs&password=123456');
  //  4.监听并处理响应
     xhr.onreadystatechange = () => {
         //判断状态码
       if(xhr.status == 4 && xhr.readyState == 200){
           //把数据显示在页面上
          console.log(xhr.responseText);
       }
     }
```

3. jq的ajax的语法是什么?并且写出来目前你用到的属性每个的含义?
```js
  $.ajax({
      // 设置请求方式
      type: ''
      // 设置请求地址
      url: ''
      // 设置请求数据
      data: ''
      // 成功时的回调函数
      success: function(data) {
        console.log(data);
      }
    })
```

4. 使用art-template模板引擎的步骤是什么？(用自己的话写，不要直接粘笔记)
```js
引入art-template库
创建模板
html渲染
```

5. art-template模板引擎的语法你知道的有哪些，并且总结出来?
```js
渲染一个字符串：
 <script type="text/template" id="str_templ">
    <h1>{{content}}</h1> 
  </script>
  <script>
    let title = "我是标题2";
    let oBtn = document.querySelector('button');
    oBtn.onclick = function () {
      let htmlStr = template('str_templ', {
        content: title
      });

      // console.log(htmlStr);
      document.querySelector('div').innerHTML = htmlStr;
    }

  </script>
  
渲染一个列表：
  <script type="text/template" id="list_templ">
    <!-- target代表数字的名字 -->
  {{each target}}
  <li> {{$index}}-{{$value}}</li>
  {{/each}}
  </script>
  <script>
    let data = ["宋轶", "张国立", "于文文", "王菲", "江疏影", "王源", "宋祖儿", "易烊千玺", "王一博"];

    let oBtn = document.querySelector('button');
    oBtn.onclick = function () {
      let htmlStr = template('list_templ', {
        target: data
      })
      // console.log(htmlStr);
      document.querySelector('div').innerHTML = htmlStr;
    }

  </script>
    
    渲染一个页面：
    <script type="text/template" id="judge_templ">
    {{if data.length > 0 }} 
        <ul>
          {{each data}}
          <li>{{$value}}</li>
          {{/each}}
        </ul>
    {{else }}
       <p>没有数据</p>
    {{/if}}
  </script>
  <script>
    // 如果data中有数据 那么就渲染数据 
    // 如果data中没有数据 那么就渲染一句话 没有数据
    // let data = ["宋轶", "张国立", "于文文", "王菲", "江疏影", "王源", "宋祖儿", "易烊千玺", "王一博"];
    let data = [];
    let oBtn = document.querySelector('button');
    oBtn.onclick = function () {
      let htmlStr = template('judge_templ', {
        flag: true,
        data: data
      })
      // console.log(htmlStr);
      document.querySelector('div').innerHTML = htmlStr;
    }
  </script> 
```

6. 客户端和服务端的通信过程是怎么样的？
```js
1 用浏览器打开网址
2 浏览器通过dns服务器来获取访问网站的ip地址
3 浏览器对这个ip发起请求
4 服务端监听指定端口接收请求并进行处理
5 服务器将处理后的结果返回给客户的浏览器
6 浏览器将返回的结果呈现到页面上
```

7. express怎么开放静态资源?
```js
  app.use('/public', express.static(path.join(__dirname, 'public')))
```

8. express怎么读文件和写文件?
```js
读文件
fs.readFile('/路径','编码格式',回调函数)
写文件
fs.writeFile('/路径','写入的内容',回调函数)
```

9. JSON对象和JSON字符串是怎么进行相互转换的?
```js
JSON对象转JSON字符串：JSON.stringify()
JSON字符串转JSON对象：JSON.parse()
```

10. form表单怎么的属性有哪些？分别是什么意思？
```js
method属性：请求方式
action属性：请求路径
name属性：表单名称
```

11. form表单怎么序列化获取值表单的值？
```js
$('form').serizlize()
```

12. form表单怎么阻止默认的提交行为?
```js
1.使用input代表button，设置type='button'
2.event.preventDefault();在提交事件绑定的方法的最后，使用event.preventDefault()方法
3.使用button按钮提交表单时候设置tyep='button',因为button默认属性是submit
```

13. 在客户端怎么由login.html页面跳转到首页index.html?
```js
 location.href='./index.html'
```