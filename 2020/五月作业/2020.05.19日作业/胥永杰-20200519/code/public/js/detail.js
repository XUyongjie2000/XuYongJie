$(document).ready(function () {
  //   console.log(location);
  // console.log(location.href); // http://localhost/detail.html?id=3
  // console.log(location.search); // ?id=3
  // URL查询参数对象
  // let queryStr = new URLSearchParams(location.search);

  //复杂
  //   let queryStr = new URLSearchParams(location.search);
  //   let id = queryStr.get("id");
  // console.log(id);
  //简化
  let id = new URLSearchParams(location.search).get("id");
  $.ajax({
    type: "get",
    url: "/api/getDetail",
    data: {
      id: id,
    },
    success: function (result) {
      //   console.log(data);

      let htmlStr = template("detail_templ", result.data);

      $(".jumbotron").html(htmlStr);
    },
  });
});
