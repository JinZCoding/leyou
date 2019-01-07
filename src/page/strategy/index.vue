<template>
  <div class="strategy">
    <all-header banner="攻略"></all-header>
    <div class="strategy_div">
      <div>
        <!-- 顶部图片 -->
        <div class="straTop">
          <div>
            <img src="../../assets/img/strategy.jpeg" alt="">
          </div>
        </div>
        <!-- 热门 -->
        <div class="hot strategyItem">
          <div class="banner">
            <i class="iconfont">&#xe610;</i>
            <span>热门推荐</span>
          </div>
          <hot-strategy></hot-strategy>
        </div>
        <!-- 最新攻略 -->
        <div class="new strategyItem">
          <div class="banner">
            <i class="iconfont">&#xe71e;</i>
            <span>最新攻略</span>
          </div>
          <strategy-list></strategy-list>
        </div>
      </div>
    </div>
    <div class="center_bottom">
      <i class="iconfont">&#xe881;</i>
      <span>这有一个新点子！</span>
    </div>
    <all-footer></all-footer>
  </div>
</template>
<script>
import AllFooter from "../../components/footer/footer";
import AllHeader from "../../components/header/header";
import StrategyList from "./components/strategylist";
import HotStrategy from "./components/hotstrategy";
import { setStore, getStore } from "../../config/util";

export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  components: {
    AllHeader,
    AllFooter,
    StrategyList,
    HotStrategy,
  }
};
</script>
<style lang="scss">
@import "../../style/mixin.scss";

.strategy {
  margin: 90px auto 0;
  padding-bottom: 100px;
  width: 100%;
}
.straTop{
  background-color: #fff;
  width: 100%;
  margin-bottom: 20px;
  img{
    width: 100%;
  }
}
.strategyItem{
  background: #fff;
  padding:0 20px 10px;
  margin-bottom: 20px;
  .banner{
    padding: 15px 0 5px;
    i,span{
      font-size: 34px;
      color: #333;
    }
    i{
      font-size: 45px;
      color: $fc;
      padding-right: 10px;
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
  span {
    color: #aaa;
  }
  i {
    color: #aaa;
    font-size: 45px;
  }
}
</style>
