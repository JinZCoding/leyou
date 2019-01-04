<template>
  <div>
    <div class="search">
      <div class="close" @click="colse">
        <i class="iconfont">&#xe86e;</i>
      </div>
      <div class="tit">选择所在城市</div>
    </div>
    <city-selector></city-selector>
  </div>
</template>
<script>
import CitySelector from "./components/cityselector";

export default {
  data() {
    return {};
  },
  components: {
    CitySelector
  },
  methods: {
    colse() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="scss">
@import "../../style/mixin.scss";

.search {
  position: fixed;
  top: 0;
  border-bottom: 1px solid #eee; /*no*/
  background-color: #fff;
  @include wh(100%, 90px);
  display: flex;
  align-items: center;
  .close {
    padding: 0 25px;
    i {
      font-size: 45px;
      color: $fc;
      font-weight: 700;
    }
  }
  .search_input {
    @include cl;
    display: flex;
    align-items: center;
    margin-left: 30px;
    // @include wh(420px, 60px);
    // line-height: 70px;
    text-align: center;
    padding: 0 30px;
    border-radius: 60px;
    border: 1px solid #ccc;
    input {
      // display: inline-block;
      line-height: 60px;
      @include wh(320px, 60px);
      border: none;
      box-shadow: none;
      padding: 0 15px;
      font-size: 30px;
      // border: 1px solid #ccc;
      &:focus {
        outline: none;
      }
    }
    i {
      display: inline-block;
      padding-left: 20px;
      font-size: 42px;

      // @include wh(60px,60px);
    }
  }
  .tit {
    @include center;
    font-size: 32px;
  }
}
</style>
