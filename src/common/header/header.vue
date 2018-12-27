<template>
  <div class="header">
    <div class="header_left">
      <i class="iconfont">&#xe8e6;</i>
      <span class="header_add">北京</span>
    </div>
    <div class="header_search">
      <span class="search_box">
        <input type="text" class="search_input">
        <i class="iconfont">&#xe86f;</i>
      </span>
    </div>
    <div class="header_right">
      <i class="iconfont">&#xe8a0;</i>
      <router-link to="/login" class="login">登录</router-link>
      <!-- <span class="login"></span> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "allHeader"
};
</script>
<style lang="scss">
@import "../../style/mixin.scss";
.header {
  background: $fc;
  position: fixed;
  top: 0;
  @include wh(100%, 100px);
  @include fj;
  align-items: center;
  padding: 0 20px;
  font-size: 28px;
  .header_add {
    color: #fff;
  }
  .login {
    color: #fff;
  }
}
.header_search {
  .search_box {
    display: inline-block;
    @include wh(400px, 60px);
    background: #fff;
    // border-bottom: 1px solid #fff;
    border: 1px solid #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    .search_input{
        @include wh(340px, 60px);
        margin-left: 10px;
        // padding-left: 5px;
        font-size: 30px;
    }
    .iconfont {
      color: $fc;
      float: right;
    }
  }
}
.iconfont {
  color: #fff;
  font-size: 34px;
}
</style>
