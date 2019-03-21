<template>
  <div class="footer">
    <router-link to="/index" class="footer_left">
      <i class="iconfont">&#xe8e3;</i>
      <span>首页</span>
    </router-link>
    <div class="publish" @click="showDialog">
      <i class="iconfont">&#xe62a;</i>
    </div>
    <router-link to="/profile" class="footer_right">
      <i class="iconfont">&#xe8a0;</i>
      <span>我的</span>
    </router-link>
    <div class="dialog" v-if="dialogShow">
      <span class="dialog_span" @click="gotoRelease(0)">攻略</span>
      <span class="dialog_span" @click="gotoRelease(1)">游记</span>
      <span class="dialog_span" @click="gotoRelease(2)">随记</span>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"; //先要引入

export default {
  name: "allFooter",
  data() {
    return {
      dialogShow: false,
      isLogin: false
    };
  },
  computed: {
    ...mapGetters(["loginInfo"])
  },
  methods: {
    // 判斷是否登錄
    initLogin() {
      if (this.loginInfo) {
        this.isLogin = this.loginInfo.isLogin;
      }
    },
    showDialog() {
      this.dialogShow = !this.dialogShow;
    },
    gotoRelease(type) {
      // 未登录跳转登录，登录跳转发布文章页
      if (this.isLogin) {
        this.$router.push({
          path: "/release",
          query: { type: type }
        });
      } else {
        this.$router.push("/login");
      }
    }
  },
  created() {
    this.initLogin();
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
    @include center;
    i {
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
.dialog {
  position: fixed;
  bottom: 150px;
  @include wh(360px, 100px);
  z-index: 1000;
  @include fj(space-around);
  align-items: center;
  .dialog_span {
    display: inline-block;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    background-color: $fc;
    border-radius: 50%;
    border: 1px solid $fc;
    color: #fff;
  }
}
</style>

