<template>
  <a-config-provider :locale="locale">
    <a-layout>
      <a-breadcrumb style="margin: 16px 0">
        <a-breadcrumb-item
          ><router-link to="/home" style="font-weight: bold; color: #000"
            >首页</router-link
          ></a-breadcrumb-item
        >
        <a-breadcrumb-item>用户管理</a-breadcrumb-item>
        <a-breadcrumb-item>用户列表</a-breadcrumb-item>
      </a-breadcrumb>
      <a-card>
        <!-- 主体 start -->
        <!-- 添加按钮 搜索框 -->
        <a-row style="margin-bottom:24px">
          <a-col :span="9">
            <a-row :gutter="16">
              <a-col :span="18">
                <a-input-search
                  placeholder="请输入内容"
                  enter-button
                  size="large"
                  v-model:value="searchValue"
                  @click="handelSearch"
                />
              </a-col>
              <a-col :span="6">
                <a-button type="primary" size="large" @click="handelModal">
                  添加用户
                </a-button>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
        <!-- 用户列表 -->
        <a-table
          :columns="columns"
          :data-source="tableData"
          bordered
          :pagination="false"
        >
          <template #index="{index}">
            {{ index + 1 }}
          </template>
          <template #mgState="{record}">
            <a-switch :checked="!record.mg_state" />
          </template>

          <template #operating="{record}">
            <a-button type="primary" @click="handelEdit(record)"
              ><EditOutlined
            /></a-button>
            <a-button
              type="danger"
              style="margin:0 10px  "
              @click="deleteTable(record)"
              ><DeleteOutlined
            /></a-button>
            <a-button type="primary" style="background-color:orange"
              ><SettingOutlined
            /></a-button>
          </template>
        </a-table>
        <!-- 分页 -->
        <a-pagination
          style="margin-top:24px"
          :show-total="(total) => `总 ${total} 页`"
          v-model:current="pagenum"
          :total="total"
          :page-size-options="pageSizeOptions"
          :page-size="pagesize"
          show-size-changer
          @showSizeChange="onShowSizeChange"
          @change="handelChange"
        />
        <!-- 添加模态框 -->
        <a-modal
          v-model:visible="modalVisible"
          title="添加用户"
          @ok="handleUserOk"
        >
          <a-form :rules="UsersRules" :model="UsersModel" ref="UsersFormRef">
            <a-form-item label="用户名" name="username">
              <a-input v-model:value="UsersModel.username" />
            </a-form-item>
            <a-form-item label="密码" name="password">
              <a-input-password
                type="password"
                v-model:value="UsersModel.password"
              />
            </a-form-item>
            <a-form-item label="邮箱" name="email">
              <a-input v-model:value="UsersModel.email" />
            </a-form-item>
            <a-form-item label="手机" name="mobile">
              <a-input v-model:value="UsersModel.mobile" />
            </a-form-item>
          </a-form>
        </a-modal>
        <!-- 编辑模态框 -->
        <a-modal
          v-model:visible="EditVisible"
          title="用户编辑"
          @ok="handleEditOk"
        >
          <a-form
            :rules="UsersEditRules"
            :model="UsersEditModel"
            ref="UsersEditFormRef"
          >
            <a-form-item label="用户名" name="username">
              <a-input disabled :value="UsersEditModel.username" />
            </a-form-item>
            <a-form-item label="邮箱">
              <a-input v-model:value="UsersEditModel.email" />
            </a-form-item>
            <a-form-item label="手机">
              <a-input v-model:value="UsersEditModel.mobile" />
            </a-form-item>
          </a-form>
        </a-modal>

        <!-- 主体 end -->
      </a-card>
    </a-layout>
  </a-config-provider>
</template>
<script>
import { httpGet, httpPost, httpPut, httpDelete } from "@/utils/http";
import { user } from "@/api";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons-vue";
import { message, Modal } from "ant-design-vue";
import { createVNode } from "vue";
export default {
  data() {
    // 自定义表单验证规则
    let checkEmail = (rule, value, callback) => {
      // 验证邮箱的正则表达式
      const regEmail = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

      if (regEmail.test(value) || value == "") {
        // 合法的邮箱
        return callback();
      }
      // 不合法的邮箱
      callback(new Error("请输入合法的邮箱"));
    };
    // 验证手机号的校验规则
    let checkMobile = (rule, value, callback) => {
      // 验证手机号的正则表达式
      const regMobile = /^1(3|4|5|6|7|8|9)\d{9}$/;

      if (regMobile.test(value) || value == "") {
        // 合法的手机号
        return callback();
      }
      // 不合法
      callback(new Error("请输入合法的手机号"));
    };
    return {
      locale: zhCN,
      columns: [
        {
          title: "#",
          dataIndex: "index",
          slots: { customRender: "index" },
        },
        {
          title: "用户名",
          dataIndex: "username",
        },
        {
          title: "邮箱",
          dataIndex: "email",
        },
        {
          title: "电话",
          dataIndex: "mobile",
        },
        {
          title: "角色",
          dataIndex: "role_name",
        },
        {
          title: "状态",
          dataIndex: "mg_state",
          slots: { customRender: "mgState" },
        },
        {
          title: "操作",
          dataIndex: "operating",
          slots: { customRender: "operating" },
        },
      ],
      tableData: [],
      pagenum: 1,
      pagesize: 2,
      total: 0,
      pageSizeOptions: ["1", "2", "5", "10"],
      modalVisible: false,
      EditVisible: false,
      searchValue: "",
      UsersModel: {
        username: "",
        password: "",
        email: "",
        mobile: null,
      },
      UsersRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 8, message: "长度应为4到8", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 10, message: "长度应为6到10", trigger: "blur" },
        ],
        email: [{ validator: checkEmail, trigger: "blur" }],
        // 手机号
        mobile: [{ validator: checkMobile, trigger: "blur" }],
      },
      UsersEditRules: {
        email: [{ validator: checkEmail, trigger: "blur" }],
        // 手机号
        mobile: [{ validator: checkMobile, trigger: "blur" }],
      },
      UsersEditModel: {
        username: "",
        password: "",
        email: "",
      },
      editId: null,
    };
  },
  created() {
    this.handelShowTable();
  },
  methods: {
    // 展示列表
    handelShowTable() {
      httpGet(user.GetUser, {
        query: this.searchValue,
        pagenum: this.pagenum,
        pagesize: this.pagesize,
      })
        .then((response) => {
          console.log(response);
          let { meta, data } = response;
          // 判断返回码
          if (meta.status == 200) {
            this.tableData = data.users;
            this.total = data.total;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // pageSize 变化的回调
    onShowSizeChange(current, pageSize) {
      this.pagenum = current;
      this.pagesize = pageSize;
      this.handelShowTable();
    },
    // 页码变化的回调
    handelChange(current, pageSize) {
      this.pagenum = current;
      this.pagesize = pageSize;
      this.handelShowTable();
    },
    // 模态框
    handelModal() {
      this.modalVisible = true;
    },
    // 提交添加
    handleUserOk() {
      this.$refs.UsersFormRef.validate()
        .then(() => {
          httpPost(user.AddUser, {
            username: this.UsersModel.username,
            password: this.UsersModel.password,
            email: this.UsersModel.email,
            mobile: this.UsersModel.mobile,
          })
            .then((response) => {
              console.log(response);
              let { meta } = response;
              // 判断返回码
              if (meta.status == 201) {
                this.modalVisible = false;
                this.$refs.UsersFormRef.resetFields();
                message.success(meta.msg);
              } else {
                message.error(meta.msg);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    // 编辑按钮 回显数据
    handelEdit(record) {
      this.EditVisible = true;
      this.UsersEditModel = record;
      this.editId = record.id;
    },
    handleEditOk() {
      this.$refs.UsersEditFormRef.validate()
        .then(() => {
          httpPut(`users/${this.editId}`, {
            email: this.UsersEditModel.email,
            mobile: this.UsersEditModel.mobile,
          })
            .then((response) => {
              console.log(response);
              let { meta } = response;
              // 判断返回码
              if (meta.status == 200) {
                this.EditVisible = false;
                this.$refs.UsersEditFormRef.resetFields();
                message.success(meta.msg);
              } else {
                message.error(meta.msg);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
    deleteTable(record) {
      let _this = this;
      console.log(record.id);
      Modal.confirm({
        title: "是否删除该用户",
        icon: createVNode(ExclamationCircleOutlined),
        okText: "确认",
        cancelText: "取消",
        onOk() {
          httpDelete(`users/${record.id}`)
            .then((response) => {
              console.log(response);
              let { meta } = response;
              // 判断返回码
              if (meta.status == 200) {
                message.success(meta.msg);
                _this.handelShowTable();
              } else {
                message.error(meta.msg);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    },
    handelSearch() {
      this.handelShowTable();
    },
  },
  components: {
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
  },
};
</script>

<style></style>
