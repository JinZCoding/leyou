<template>
  <div class="release_success">
    <div class="header">
      <div class="header_center">
        <h2>发布成功</h2>
      </div>
      <div class="header_right">
        <router-link to="/index">确定</router-link>
      </div>
    </div>
    <div class="success">
      <img src="../../../assets/img/success.jpg" width="100%" alt>
      <span class="tips">文章发布成功！</span>
      <button class="sure">
        <router-link to="/index">确 定</router-link>
        <!-- <a href>确定</a> -->
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "releaseSuccess",
  components: {}
};
</script>
<style lang="scss" scoped>
@import "../../../style/mixin.scss";
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
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  & > div {
    display: inline-block;
  }
  .header_center {
    text-align: center;
    position: absolute;
    @include center;
    h2 {
      color: $fc;
      font-size: 32px;
    }
  }
  .header_right {
    position: absolute;
    right: 20px;
    min-width: 50px;
    a {
      color: $fc;
    }
  }
}
.release_success {
  position: absolute;
  @include wh(100%, 100%);
  z-index: 1000;
  background-color: #fff;
  height: 100%;
  .success {
    @include center;
    width: 100%;
    padding: 90px 20px 0;
    .tips {
      padding-left: 40px;
      font-size: 42px;
      font-weight: 700;
    }
  }
  .sure {
    display: block;
    @include wh(280px, 60px);
    margin: 30px 0 0 30px;
    background: $fc;
    border-radius: 10px;
    a {
      font-size: 30px;
      color: #fff;
    }
  }
}
</style>
