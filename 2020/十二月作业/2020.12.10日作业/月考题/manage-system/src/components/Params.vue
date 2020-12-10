<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>商品管理</a-breadcrumb-item>
      <a-breadcrumb-item>参数列表</a-breadcrumb-item>
    </a-breadcrumb>
    <a-card>
      <!-- 主体 start -->
      <a-cascader
        v-model:value="cascader.value"
        :options="cascader.options"
        placeholder="请选择"
        @change="onChange"
        :fieldNames="{
          label: 'cat_name',
          value: 'cat_id',
          children: 'children',
        }"
      />

      <a-tabs @change="callback">
        <a-tab-pane key="many" tab="动态参数">
          <a-button
            style="margin-bottom:24px"
            type="primary"
            @click="handelShowAttr"
          >
            添加参数
          </a-button>
          <a-table
            :columns="columns"
            :data-source="manyData"
            bordered
            :pagination="false"
          >
            <template #index="{index}">
              {{ index + 1 }}
            </template>

            <template #operating="{record}">
              <a-button type="primary"><EditOutlined /></a-button>
              <a-button
                type="danger"
                style="margin:0 10px"
                @click="handelDelete(record)"
                ><DeleteOutlined
              /></a-button>
            </template>
          </a-table>
        </a-tab-pane>
        <a-tab-pane key="only" tab="静态参数">
          <a-button type="primary" @click="handelModal">
            添加参数
          </a-button>
          <a-table
            :columns="columns"
            :data-source="onlyData"
            bordered
            :pagination="false"
          >
            <template #index="{index}">
              {{ index + 1 }}
            </template>

            <template #operating="{record}">
              <a-button type="primary"><EditOutlined /></a-button>
              <a-button
                type="danger"
                style="margin:0 10px  "
                @click="handelDelete(record)"
                ><DeleteOutlined
              /></a-button>
            </template>
          </a-table>
        </a-tab-pane>
      </a-tabs>

      <!-- 主体 end -->
    </a-card>
  </a-layout>
</template>

<script>
import { httpGet, httpDelete } from "@/utils/http";
import { categories } from "@/api";
import { message, Modal } from "ant-design-vue";
import { createVNode } from "vue";

import {
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons-vue";
export default {
  data() {
    return {
      cascader: {
        value: [],
        options: [],
      },
      pagenum: 1,
      pagesize: 2,
      sel: "many",
      manyData: [],
      onlyData: [],
      columns: [
        {
          title: "#",
          dataIndex: "index",
          slots: { customRender: "index" },
        },
        {
          title: "参数名称",
          dataIndex: "attr_name",
        },
        {
          title: "操作",
          dataIndex: "operating",
          slots: { customRender: "operating" },
        },
      ],
    };
  },
  created() {
    this.handelShowCacader();
  },
  methods: {
    handelShowCacader() {
      httpGet(categories.GetCategories, {
        pagenum: this.pagenum,
        pagesize: this.pagesize,
      })
        .then((response) => {
          console.log(response);
          let { meta, data } = response;
          // 判断返回码
          if (meta.status == 200) {
            this.cascader.options = data.result;
            console.log(this.cascader.options);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onChange() {
      let id = this.cascader.value[this.cascader.value.length - 1];

      httpGet(`categories/${id}/attributes`, { sel: this.sel })
        .then((response) => {
          console.log(response);
          let { meta, data } = response;
          // 判断返回码
          if (meta.status == 200) {
            if (this.sel == "many") {
              this.manyData = data;
            } else {
              this.onlyData = data;
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    callback(activeKey) {
      console.log(activeKey);
      this.sel = activeKey;
      this.onChange();
    },

    handelDelete(record) {
      let _this = this;
      let id = this.cascader.value[this.cascader.value.length - 1];
      Modal.confirm({
        title: "是否删除此属性",
        icon: createVNode(ExclamationCircleOutlined),
        okText: "确认",
        cancelText: "取消",
        onOk() {
          httpDelete(`categories/${id}/attributes/${record.attr_id}`)
            .then((response) => {
              console.log(response);
              let { meta } = response;
              // 判断返回码
              if (meta.status == 200) {
                message.success(meta.msg);
                _this.onChange();
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
  },
  components: {
    EditOutlined,
    DeleteOutlined,
  },
};
</script>

<style></style>
