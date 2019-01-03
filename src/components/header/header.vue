<template>
  <div class="header">
    <div class="header_left">
      <div @click="goBack">
        <i class="iconfont">&#xe629;</i>
      </div>
    </div>
    <div class="header_center">
      <h2>{{banner}}</h2>
    </div>
    <div class="header_right">
      <div></div>
    </div>
  </div>
</template>
<script>
import { getStore } from "../../config/util";

export default {
  name: "allHeader",
  data() {
    return {};
  },
  props: ["banner"],
  created() {},
  methods: {
    goBack() {
      this.$router.go(-1);
      // console.log(window.history.length)
      // if (window.history.length > 1) {
      //   this.$router.go(-1);
      // }else{
      //   this.$router.go("/index")
      // }
      // window.history.length > 1
      //   ? window.history.back()
      //   : (document.location.href = "/index");
    }
  }
};
</script>
<style lang="scss">
@import "../../style/mixin.scss";
.header {
  background: #fff;
  position: fixed;
  top: 0;
  @include wh(100%, 90px);
  display: flex;
  align-items: center;
  padding: 0 25px;
  font-size: 28px;
  z-index: 999;
  // box-shadow: 0 0 3px 2px rgba(0,0,0,0.07);
  border-bottom: 1px solid rgba(0,0,0,0.07);
  & > div {
    display: inline-block;
  }
  .iconfont {
    color: rgb(242, 148, 7);
    font-size: 44px;
  }
}
.header_left {
  // width: 150px;
  display: flex;
  align-items: center;
  // width: 20%;
  margin-right: 20px;
  i {
    font-weight: 700;
  }
}
.header_center {
  text-align: center;
  position: absolute;
  @include cl;
  h2 {
    color: $fc;
    font-size: 38px;
  }
}
.header_right {
  position: absolute;
  right: 20px;
  min-width: 50px;
}
</style>
