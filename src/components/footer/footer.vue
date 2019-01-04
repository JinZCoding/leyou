<template>
  <div class="footer">
    <router-link to="/index" class="footer_left">
      <i class="iconfont">&#xe8e3;</i>
      <span>首页</span>
    </router-link>
    <router-link class="publish" to>
      <i class="iconfont">&#xe62a;</i>
    </router-link>
    <router-link to="/" class="footer_right">
      <i class="iconfont">&#xe8a0;</i>
      <span>我的</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "allFooter",
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "../../style/mixin.scss";
.footer {
  position: fixed;
  background: #fff;
  @include wh(100%, 100px);
  @include fj(space-around);
  align-items: center;
  border-top: 1px solid #eee;
  bottom: 0;
  left: 0;
  right: 0;
  font-size: 34px;
  z-index: 999;
  .publish {
    z-index: 1000;
    position: absolute;
    i{
      color: $fc;
      font-size: 78px;
    }
  }
  & > a {
    display: inline-block;
    flex: 1;
    text-align: center;
    // &:first-child {
    //   border-right: 1px solid #999; /*no*/
    // }
  }
  i {
    font-size: 42px;
    color: $fc;
  }
}
</style>

