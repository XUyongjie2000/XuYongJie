<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>
        <router-link to="/home" style="font-weight:bold; color:#000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>商品管理</a-breadcrumb-item>
      <a-breadcrumb-item>商品分类</a-breadcrumb-item>
    </a-breadcrumb>
    <a-card>
      <a-row style="margin-bottom:24pxs">
        <a-col :span="24">
          <!-- 添加角色按钮 -->
          <a-button type="primary">
            添加分类
          </a-button>
        </a-col>
      </a-row>

      <!-- 表格 -->
      <a-table
        :row-key="(record) => record.cat_id"
        :columns="table.Cols"
        :data-source="table.Data"
        :pagination="false"
        :expandIconColumnIndex="1"
        bordered
      >
        <!-- 索引 -->
        <template #index="{ record,index }">
          <span v-if="record.cat_level == 0">{{ index + 1 }}</span>
        </template>
        <template #isDeleted="{ record }">
          <CheckCircleTwoTone
            v-if="record.cat_deleted == false"
            twoToneColor="#52c41a"
          />
          <CloseCircleTwoTone
            v-if="record.cat_deleted == true"
            twoToneColor="#ff6d7e"
          />
        </template>

        <template #level="{record}">
          <a-tag color="blue" v-if="record.cat_level == 0">
            一级
          </a-tag>
          <a-tag color="green" v-if="record.cat_level == 1">
            二级
          </a-tag>
          <a-tag color="orange" v-if="record.cat_level == 2">
            三级
          </a-tag>
        </template>
        <template #operation>
          <!-- 编辑 -->
          <a-button size="small" type="primary">
            <EditOutlined />编辑
          </a-button>
          <!-- 删除 -->
          <a-button size="small" type="danger" style="margin: 0 10px;">
            <DeleteOutlined />删除</a-button
          >
        </template>
      </a-table>
      <!-- 分页 -->
      <a-pagination
        style="margin-top: 25px"
        v-model:current="pagenation.pagenum"
        :total="pagenation.total"
        :show-total="(total) => `共 ${pagenation.total} 条`"
        show-size-changer
        @showSizeChange="onShowSizeChange"
        :page-size-options="pagenation.pageSizeOptions"
        :defaultPageSize="10"
        v-model:pageSize="pagenation.pagesize"
        @change="handlePageChange"
        show-quick-jumper
      />
    </a-card>
  </a-layout>
</template>

<script>
//导入请求方法
import { httpGet } from "@/utils/http";
import { goods } from "@/api";
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";
export default {
  data() {
    return {
      pagenation: {
        pagesize: 5,
        pagenum: 1,
        pageSizeOptions: ["5", "10", "15", "20"],
        total: 0,
      },
      table: {
        Cols: [
          { title: "#", key: "index", slots: { customRender: "index" } },
          { title: "分类名称", dataIndex: "cat_name" },
          {
            title: "是否有效",
            key: "cat_deleted",
            slots: { customRender: "isDeleted" },
          },
          { title: "排序", key: "cat_level", slots: { customRender: "level" } },
          {
            title: "操作",
            key: "operation",
            slots: { customRender: "operation" },
          },
        ],
        Data: [],
      },
    };
  },
  created() {
    this.handleReadCategories();
  },
  methods: {
    handleReadCategories() {
      httpGet(goods.GetCategories, {
        type: [1, 2, 3],
        pagenum: this.pagenation.pagenum,
        pagesize: this.pagenation.pagesize,
      })
        .then((response) => {
          //   console.log(response);
          let { meta, data } = response;
          if (meta.status == 200) {
            this.pagenation.total = data.total;
            this.table.Data = data.result;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 根据每页显示多少条数据不同 重新渲染表格
    onShowSizeChange(current, pageSize) {
      this.pagenation.pagenum = current;
      this.pagenation.pagesize = pageSize;
      this.handleReadCategories();
    },
    // 页码改变的回调，参数是改变后的页码及每页条数
    handlePageChange(page, pageSize) {
      this.pagenation.pagenum = page;
      this.pagenation.pagesize = pageSize;
      this.handleReadCategories();
    },
  },
  components: {
    CheckCircleTwoTone,
    CloseCircleTwoTone,
    EditOutlined,
    DeleteOutlined,
  },
};
</script>

<style></style>
