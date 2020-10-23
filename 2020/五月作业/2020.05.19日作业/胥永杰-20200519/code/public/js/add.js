$(function () {
  //预览
  $("#input_avatar").on("change", function () {
    let imgSrc = URL.createObjectURL($(this)[0].files[0]);
    $("#avatar").attr("src", imgSrc);
    //ajax请求
  });
});
