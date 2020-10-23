$(function () {
    //给删除按钮绑定点击事件 事件委托方式
    $('tbody').on('click', '#deleteBtn', function () {
        // console.log(111);
        //获取当前项id
        let id = $(this).data('id');
        // console.log(id);
        //发送请求
        $.ajax({
            type: 'delete',
            url: '/delete',
            data: {
                id: id
            },
            success: function (results) {
                console.log(results);
                if (results.code == 200) {
                    location.href = '/'
                }
            }
        })
    })

    //查找英雄
    //给查找按钮绑定点击事件
    $('#findBtn').click(function (e) {
        //阻止默认提交
        e.preventDefault();
        // console.log($('#findForm').serialize());
        $.ajax({
            type: 'get',
            url: '/find',
            data: $('#findForm').serialize(),
            success: function (results) {
                // console.log(results);
                let listStr = template("list_templ", results);
                // console.log(listStr);
                $('tbody').html(listStr);

            }
        })
    })

})

