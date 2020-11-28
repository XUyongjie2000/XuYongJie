<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>
        <router-link to="/home" style="font-weight:bold; color:#000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>权限管理</a-breadcrumb-item>
      <a-breadcrumb-item>角色列表</a-breadcrumb-item>
    </a-breadcrumb>
    <a-card>
      <a-row style="margin-bottom:24pxs">
        <a-col :span="24">
          <!-- 添加角色按钮 -->
          <a-button type="primary" @click="handleModel">
            添加角色
          </a-button>
        </a-col>
      </a-row>
    </a-card>

    <!-- 表格 -->
    <a-table
      :columns="rolesColumns"
      :data-source="rolesData"
      :row-key="(record) => record.id"
      :pagination="false"
      bordered
      childrenColumnName="abc"
    >
      <template #index="{ index }">
        {{ index + 1 }}
      </template>

      <template #expandedRowRender="{ record }">
        <a-row
          :class="['bdbottom vcenter', index1 == 0 ? 'bdtop' : '']"
          v-for="(item1, index1) in record.children"
          :key="item1.id"
        >
          <!-- 一级渲染 -->
          <a-col :span="2">
            <span>
              <a-tag color="blue" closable>
                {{ item1.authName }}
              </a-tag>
              <CaretRightOutlined />
            </span>
          </a-col>
          <!-- 二三级渲染 -->
          <a-col :span="22">
            <!-- 二级渲染 -->
            <a-row
              :class="['bdbottom vcenter']"
              v-for="item2 in item1.children"
              :key="item2.id"
            >
              <a-col :span="3">
                <span>
                  <a-tag color="green" closable>
                    {{ item2.authName }}
                  </a-tag>
                  <CaretRightOutlined />
                </span>
              </a-col>
              <a-col :span="21">
                <span class="vcenter">
                  <a-tag
                    color="orange"
                    v-for="item3 in item2.children"
                    :key="item3.id"
                    closable
                  >
                    {{ item3.authName }}
                  </a-tag>
                  <CaretRightOutlined />
                </span>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
        <!-- {{ record }} -->
      </template>
      <template #operation>
        <!-- 编辑 -->
        <a-button size="small" type="primary"> <EditOutlined />编辑 </a-button>
        <!-- 删除 -->
        <a-button size="small" type="danger" style="margin: 0 10px;">
          <DeleteOutlined />删除</a-button
        >
        <!-- 权限 -->
        <a-button
          size="small"
          type="default"
          style="background-color: #e6a23c;color: #fff"
        >
          <SettingOutlined />分配权限</a-button
        >
      </template>
    </a-table>
    <!-- 添加角色弹出框 -->
    <a-modal
      v-model:visible="visible"
      title="添加角色"
      @ok="handleOk"
      cancelText="取消"
      okText="确定"
    >
      <a-form :model="formAdd" :rules="formAddrules" ref="ruleForm">
        <a-row>
          <a-col :span="24">
            <a-form-item
              required
              has-feedback
              label="角色名称"
              name="name"
              :labelCol="{ span: 4 }"
              :wrapperCol="{ span: 20 }"
            >
              <a-input v-model:value="formAdd.name" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="24">
            <a-form-item
              has-feedback
              label="角色描述"
              name="other"
              :wrapperCol="{ span: 20 }"
              :labelCol="{ span: 4 }"
            >
              <a-input v-model:value="formAdd.other" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
  </a-layout>
</template>

<script>
//导入接口
import { role } from "@/api";
//导入请求方法
import { httpGet, httpPost } from "@/utils/http";
//引入小图标
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
  CaretRightOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
export default {
  data() {
    return {
      rolesColumns: [
        {
          //列的名称
          title: "#",
          key: "index",
          //customRender 自定义渲染
          slots: { customRender: "index" },
        },
        {
          //列的名称
          title: "角色名称",
          dataIndex: "roleName",
        },
        {
          //列的名称
          title: "角色描述",
          dataIndex: "roleDesc",
        },
        {
          //列的名称
          title: "操作",
          key: "operation",
          //customRender 自定义渲染
          slots: { customRender: "operation" },
        },
      ],
      rolesData: [],
      visible: false,
      formAdd: {
        name: "",
        other: "",
      },
      // 表单验证
      formAddrules: {
        // username表单验证
        name: [
          // required 必须的
          // trigger 啥时候触发
          { required: true, message: "请输入角色名", trigger: "blur" },
          { min: 4, max: 16, message: "长度在4-16个字符之间", trigger: "blur" },
        ],
      },
    };
  },
  created() {
    this.handleReadRoles();
  },
  methods: {
    handleReadRoles() {
      httpGet(role.GetRoles)
        .then((response) => {
          // console.log(response);
          let { data, meta } = response;
          if (meta.status == 200) {
            this.rolesData = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleModel() {
      this.visible = true;
    },
    handleOk() {
      // console.log(11);
      this.$refs.ruleForm
        .validate()
        .then(() => {
          let params = {
            roleName: this.formAdd.name,
            roleDesc: this.formAdd.other,
          };
          console.log(params);
          httpPost(role.GetRoles, params)
            .then((res) => {
              console.log(res);
              let { meta } = res;
              if (meta.status == 201) {
                this.visible = false;
                message.success(meta.msg);
                this.handleReadRoles();
              } else {
                message.error(meta.msg);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
    CaretRightOutlined,
  },
};
</script>

<style>
.ant-tag {
  padding: 2px 14px;
  font-size: 14px;
}

.ant-tag {
  margin: 7px;
}
.bdtop {
  border-top: 1px solid #eee;
}

.bdbottom {
  border-bottom: 1px solid #eee;
}

.vcenter {
  display: flex;
  align-items: center;
}
</style>
