$(function () {
  // 显示数据
  // 在打开index.html的时候，显示数据
  showData();

  // 删除数据

  // 修改数据
});

/**
 * 功能: 当页面打开的时候 显示数据库中的数据
 */
function showData() {
  $.ajax({
    // 请求方式
    type: "GET",
    // 请求地址
    url: "/api/list",
    // 请求数据
    data: null,
    // 成功时的回调函数
    success: function (result) {
      console.log(result);
      // 使用template方法渲染数据和html模板
      if (result.code == 200) {
        let htmlStr = template("list_templ", result);
        console.log(htmlStr);
        $("tbody").html(htmlStr);
      }
    },
  });
}
