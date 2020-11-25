<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>权限管理</a-breadcrumb-item>
      <a-breadcrumb-item>角色列表</a-breadcrumb-item>
    </a-breadcrumb>

    <a-card>
      <a-row style="margin-bottom: 24px">
        <a-col :span="24">
          <!-- 添加角色 -->
          <a-button type="primary"> 添加角色 </a-button>
        </a-col>
      </a-row>

      <!-- 表格 -->
      <a-table
        :columns="rolesColumns"
        :data-source="rolesData"
        bordered
        :pagination="false"
        :row-key="(record) => record.id"
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
            <a-col :span="5">
              <span >
                <a-tag color="blue" closable> {{ item1.authName }} </a-tag>
                <CaretRightOutlined />
              </span>
            </a-col>
            <!-- 二三级渲染 -->
            <a-col :span="19">
              <!-- 二级渲染 -->
              <a-row
                :class="['bdbottom vcenter']"
                v-for="(item2) in item1.children"
                :key="item2.id"
              >
                <a-col :span="6" >
                  <span >
                    <a-tag color="green" closable> {{ item2.authName }} </a-tag>
                    <CaretRightOutlined />
                  </span>
                </a-col>
                <!-- 三级菜单 -->
                <a-col :span="18">
                  <span>
                    <a-tag
                      color="orange"
                      v-for="item3 in item2.children"
                      :key="item3.id"
                      closable
                    >
                      {{ item3.authName }}
                    </a-tag>
                  </span>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
          <!-- {{ record }} -->
        </template>
        <template #operation>
          <!-- 编辑 -->
          <a-button size="small" type="primary">
            <EditOutlined />编辑
          </a-button>
          <!-- 删除 -->
          <a-button size="small" type="danger" style="margin: 0 10px">
            <DeleteOutlined />删除
          </a-button>
          <!-- 角色 -->
          <a-button
            type="default"
            size="small"
            style="background-color: #e6a23c; color: #fff"
          >
            <SettingOutlined />分配权限</a-button
          >
        </template>
      </a-table>
    </a-card>
  </a-layout>
</template>

<script>
// 导入接口
import { role } from "@/api";
// 导入请求方法
import { httpGet } from "@/utils/http";
// 引入菜单小图标
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
  CaretRightOutlined,
} from "@ant-design/icons-vue";

export default {
  data() {
    return {
      rolesColumns: [
        {
          // 列的名称
          title: "#",
          key: "index",
          // customRender自定义渲染
          slots: { customRender: "index" },
        },
        {
          // 列的名称
          title: "角色名称",
          dataIndex: "roleName",
        },
        {
          // 列的名称
          title: "角色描述",
          dataIndex: "roleDesc",
        },
        {
          // 列的名称
          title: "操作",
          key: "operation",
          // customRender自定义渲染
          slots: { customRender: "operation" },
        },
      ],
      rolesData: [],
    };
  },
  created() {
    this.handleReadRoles();
  },
  methods: {
    handleReadRoles() {
      httpGet(role.GetRoles)
        .then((response) => {
          console.log(response);
          let { data, meta } = response;

          if (meta.status == 200) {
            this.rolesData = data;
          }
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