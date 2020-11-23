<template>
  <!-- home页面start -->
  <a-layout class="home">
    <!-- 侧边栏start -->
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="home-logo">
        <router-link to="/home">
          <img src="../assets/logo.png" alt="" /><span>后台管理系统</span>
        </router-link>
      </div>
      <a-menu
        theme="dark"
        mode="inline"
        :openKeys="openKeys"
        @openChange="onOpenChange"
      >
        <a-sub-menu
          :key="item.id"
          :index="index"
          v-for="(item, index) in menuList"
        >
          <template #title v-if="item.path == 'users'">
            <span
              ><user-outlined /><span>{{ item.authName }}</span></span
            >
          </template>
          <template #title v-else-if="item.path == 'rights'">
            <span
              ><CodeSandboxOutlined /><span>{{ item.authName }}</span></span
            >
          </template>
          <template #title v-else-if="item.path == 'goods'">
            <span
              ><ShoppingOutlined /><span>{{ item.authName }}</span></span
            >
          </template>

          <template #title v-else-if="item.path == 'orders'">
            <span
              ><ContainerOutlined /><span>{{ item.authName }}</span></span
            >
          </template>
          <template #title v-else-if="item.path == 'reports'">
            <span
              ><AreaChartOutlined /><span>{{ item.authName }}</span></span
            >
          </template>
          <a-menu-item
            :key="subitem.id"
            :subindex="subindex"
            v-for="(subitem, subindex) in item.children"
          >
            <appstore-outlined />
            <span
              ><router-link :to="subitem.path" style="color:#fff">{{
                subitem.authName
              }}</router-link></span
            ></a-menu-item
          >
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <!-- 侧边栏end -->

    <!-- 内容区域start -->
    <a-layout>
      <!-- 内容区域的头部start -->
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />

        <a-button @click="handleLogOut" style="float:right; margin:16px 24px"
          >退出</a-button
        >
      </a-layout-header>
      <!-- 内容区域的头部end -->
      <!-- 内容区域的内容部分start -->
      <a-layout-content style="margin: 0 16px">
        <!-- 组件渲染start -->
        <router-view></router-view>
        <!-- 组件渲染end -->
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Manage System ©2020 Created by XYJ
      </a-layout-footer>
      <!-- 内容区域的内容部分end -->
    </a-layout>
    <!-- 内容区域end -->
  </a-layout>
  <!-- home页面end -->
</template>

<script>
//小图标
import {
  UserOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,
  CodeSandboxOutlined,
  MenuFoldOutlined,
  ShoppingOutlined,
  ContainerOutlined,
  AreaChartOutlined,
} from "@ant-design/icons-vue";
// 引入请求方法 httpGet
import { httpGet } from "@/utils/http";
// 引入请求路径
import { rights } from "@/api";
export default {
  created() {
    this.getMenuList();
  },
  data() {
    return {
      //折叠
      collapsed: false,
      //侧边栏菜单
      menuList: [],
      // 默认打开的那一项
      openKeys: [],
      // 所有项
      rootSubmenuKeys: [],
    };
  },
  methods: {
    //退出功能
    handleLogOut() {
      //删除token
      window.sessionStorage.removeItem("token");
      //跳转到首页
      this.$router.push("/login");
    },
    getMenuList() {
      httpGet(rights.AsideMenus)
        .then((response) => {
          console.log(response);
          let { data, meta } = response;
          if (meta.status == 200) {
            this.menuList = data;

            this.menuList.forEach((item) => {
              this.rootSubmenuKeys.push(item.id);
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 点击当前 关闭其他菜单
    onOpenChange(openKeys) {
      //  获取最后一次选中的openKey
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      // 如果最后一次openkye在rootSubmenuKey中找不到
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        // 就把点击的哪个openkey放到默认打开的那个数组
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
  components: {
    UserOutlined,
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    CodeSandboxOutlined,
    ShoppingOutlined,
    ContainerOutlined,
    AreaChartOutlined,
  },
};
</script>

<style>
.home {
  height: 100%;
}
.home-logo {
  height: 32px;
  margin: 16px;
  overflow: hidden;
}
.home-logo a {
  display: block;
  width: 100%;
  height: 100%;
}
.home-logo img {
  height: 100%;
}
.home-logo span {
  color: #ffffff;
}
.ant-layout-sider-collapsed .home-logo span {
  display: none;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
</style>
