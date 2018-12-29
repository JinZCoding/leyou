<template>
  <div class="strategy">
    <all-header banner="攻略"></all-header>
    <div class="center">
      <div>
        <div class="new">
          <i class="iconfont">&#xe60b;</i>
          <span>最新攻略</span>
        </div>
        <strategy-list></strategy-list>
      </div>
    </div>
    <div class="center_bottom">
      <i class="iconfont">&#xe89e;</i>
      <span>每个地方，都有好玩的</span>
    </div>
    <all-footer></all-footer>
  </div>
</template>
<script>
import AllFooter from "../../components/footer/footer";
import AllHeader from "../../components/header/header";
import StrategyList from "./components/StrategyList";

export default {
  data() {
    return {};
  },
  components: {
    AllFooter,
    AllHeader,
    StrategyList
  }
};
</script>

<style lang="scss">
@import "../../style/mixin.scss";

.strategy {
  margin: 100px auto;
  padding-bottom: 100px;
}
.center {
  // @include wh(100%, 120px);
  width: 100%;
  background-color: #fff;
  padding: 0 25px;
  .new {
    display: flex;
    align-items: center;
    line-height: 60px;
    font-size: 34px;
    padding-top: 10px;
    span {
      color: #333;
      padding-left: 10px;
    }
    i {
      vertical-align: middle;
      color: $fc;
      font-size: 60px;
    }
  }
}
.center_bottom {
  // background-color: red;
  @include wh(100%, 120px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 33px;
  span{
    color: #aaa;
  }
  i{
    color: #aaa;
  }
}
</style>
