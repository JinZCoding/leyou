<template>
  <div class="localplay">
    <all-header banner="结伴"></all-header>
  
    <div class="center_bottom">
      <i class="iconfont">&#xe890;</i>
      <span>带你去东京和巴黎</span>
    </div>
    <all-footer></all-footer>
  </div>
</template>
<script>
import AllFooter from "../../components/footer/footer";
import AllHeader from "../../components/header/header";
export default {
  data() {
    return {};
  },
  mounted() {},
  components: {
    AllHeader,
    AllFooter
  }
};
</script>
<style lang="scss">
@import "../../style/mixin.scss";

.localplay {
  margin: 90px auto 0;
  padding-bottom: 100px;
  width: 100%;
}
.center_bottom {
  // background-color: red;
  @include wh(100%, 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 33px;
  span {
    color: #aaa;
  }
  i {
    color: #aaa;
    font-size: 45px;
  }
}
</style>
