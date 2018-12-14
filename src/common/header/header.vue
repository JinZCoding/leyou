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
      <!-- <i class="iconfont">&#xe8a0;</i> -->
      <span class="login">登录</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "allHeader"
};
</script>
<style lang="scss">
@import "../../assets/scss/mixin.scss";
.header {
  background: $fc;
  position: fixed;
  top: 0;
  @include wh(100%, 50px);
  @include fj;
  align-items: center;
  padding: 0 10px;
  font-size: 16px;
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
    @include wh(200px, 30px);
    background: #fff;
    // border-bottom: 1px solid #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    .search_input{
        @include wh(170px, 30px);
        margin-left: 5px;
        // padding-left: 5px;
        font-size: 15px;
    }
    .iconfont {
      color: $fc;
      float: right;
    }
  }
}
.iconfont {
  color: #fff;
  font-size: 22px;
}
</style>
