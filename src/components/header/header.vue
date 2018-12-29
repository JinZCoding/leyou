<template>
  <div class="header">
    <div class="header_left">
      <div @click="goBack">
        <i class="iconfont">&#xe8b5;</i>
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
    return {
      isLogin: false,
      userName: "",
      location: "北京"
    };
  },
  props: ["banner"],
  created() {},
  methods: {
    goBack() {
      this.$router.go(-1);
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
  display: flex;
  align-items: center;
  padding: 0 25px;
  font-size: 28px;
  z-index: 999;
  & > div {
    display: inline-block;
  }
}
.header_left {
  // width: 150px;
  display: flex;
  align-items: center;
  // width: 20%;
  margin-right: 20px;
  i{
    font-weight: 700;
  }
}
.header_center {
  text-align: center;
  position: absolute;
  @include cl;
  h2 {
    color: #fff;
  }
}
.header_right {
  position: absolute;
  right: 20px;
  min-width: 50px;
}
.iconfont {
  color: #fff;
  font-size: 44px;
}
</style>
