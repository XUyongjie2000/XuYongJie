$(function () {
    //给新增按钮绑定点击事件
    $('#addBtn').on('click', function (e) {
        //阻止默认提交
        e.preventDefault();
        // let formData = $('#addForm').serialize();
        // console.log(formData);
        $.ajax({
            type: 'post',
            url: '/addHero',
            data: $('#addForm').serialize(),
            success: function (results) {
                // console.log(results);
                if(results.code==200) {
                    location.href='/';
                }
            }
        })
    })
})
