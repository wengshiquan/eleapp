<template>
  <div class="tab border-1px">
    <ele-header></ele-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/header/header";

export default {
  name: "vueName",
  // 配置组件
  components: {
    "ele-header": header
  },
  data() {
    return {
      msg: "Welcome to your vueName"
    };
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixins.styl"
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-1px(rgba(7, 17, 27, 0.1));

  .tab-item {
    flex: 1;
    text-align: center;

    & > a {
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);

      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>