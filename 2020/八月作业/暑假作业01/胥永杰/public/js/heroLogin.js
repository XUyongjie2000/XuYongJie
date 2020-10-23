$(function () {
    //form标签的id
    $('#loginForm').bootstrapValidator({
        // 什么时候校验
        live: 'enabled',
        // 反馈图标
        feedbackIcons: {
            // 合法的
            valid: 'glyphicon glyphicon-ok',
            // 不合法的
            invalid: 'glyphicon glyphicon-remove',
            // 校验中
            validating: 'glyphicon glyphicon-refresh'
        },
        // 提交按钮
        submitButtons: "#loginButton",
        fields: {
            username: {
                //关于用户名的校验器
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空!'
                    },
                    //用户名的长度
                    stringLength: {
                        min: '5',
                        max: '100',
                        message: '最短为5,最长为100'
                    },
                    callback: {
                        message: '用户名或密码错误'
                    }
                }
            },
            password: {
                //关于用户密码的校验器
                validators: {
                    notEmpty: {
                        message: '密码不能为空!'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]{5,30}$/,
                        message: '只能为字母数字，最短5，最长30！'
                    },
                    callback: {
                        message: '用户名或密码错误,请重新登录...'
                    }
                }

            }
        }
    })
    //当校验成功后 发起Ajax请求
    .on('success.form.bv',function(e) {
        //为了阻止默认提交
        e.preventDefault();
        //就是form表单
        var $form=$(e.target);
        // console.log($form.serialize());
        $.ajax({
            type:'POST',
            url:'/login',
            data:$form.serialize(),
            success:function(results) {
                console.log(results);
                //回显错误信息
                if(results.code==500) {
                    $form.data("bootstrapValidator").updateStatus("username", "INVALID", 'callback');
                    $form.data("bootstrapValidator").updateStatus("password", "INVALID", 'callback');
                }
                if(results.code==200) {
                    location.href='/'
                }

            }  
        })
    })
})

