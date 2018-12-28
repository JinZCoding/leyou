<template>
  <div class="header">
    <div class="header_left">
      <i class="iconfont">&#xe8e6;</i>
      <span class="header_address ellipsis">北京</span>
    </div>
    <div class="header_search">
      <span class="search_box">
        <input type="text" class="search_input">
        <i class="iconfont">&#xe86f;</i>
      </span>
    </div>
    <div class="header_right">
      <i class="iconfont" @click="goProfile" v-if="isLogin">&#xe8a0;</i>
      <router-link to="/login" class="login" v-else>登录</router-link>
      <!-- <span class="ellipsis" v-else>{{userName}}</span> -->
    </div>
  </div>
</template>
<script>
import { getStore } from "../../config/util";

export default {
  name: "allHeader",
  data() {
    return {
      isLogin: false,
      userName: ""
    };
  },
  created() {
    this.isLogin = getStore("isLogin");
    this.userName = getStore("userid");
  },
  methods: {
    goProfile() {
      this.$touter.push({ path: "/login" });
    }
  }
};
</script>
<style lang="scss">
@import "../../style/mixin.scss";
.header {
  background: $fc;
  position: fixed;
  top: 0;
  @include wh(100%, 100px);
  // @include fj;
  display: flex;
  align-items: center;
  // box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.03);
  padding: 0 20px;
  font-size: 28px;
  & > div {
    display: inline-block;
  }
}
.header_left {
  // width: 150px;
  width: 20%;
  margin-right: 20px;
  .header_address {
    color: #fff;
  }
}
.header_search {
  width: 60%;
  .search_box {
    display: inline-block;
    @include wh(100%, 60px);
    background: #fff;
    // border-bottom: 1px solid #fff;
    border: 1px solid #fff;
    border-radius: 30px;
    display: flex;
    align-items: center;
    .search_input {
      @include wh(80%, 60px);
      margin-left: 30px;
      // padding-left: 5px;
      font-size: 30px;
    }
    .iconfont {
      color: $fc;
      float: right;
    }
  }
}
.header_right {
  position: absolute;
  right: 20px;
  min-width: 50px;
  .login,
  span,
  i {
    display: inline-block;
    color: #fff;
  }
}
.iconfont {
  color: #fff;
  font-size: 34px;
}
</style>
