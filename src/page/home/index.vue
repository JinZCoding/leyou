<template>
  <div>
    <all-header></all-header>
    <div class="inner">
      <div class="info">
      </div>
    </div>
    <all-footer></all-footer>
  </div>
</template>

<script>
import AllFooter from "../../components/footer/footer";
import AllHeader from "../../components/header/header";
import { setStore, removeStore, getStore } from "../../config/util";
// import Swiper from 'swiper';
// import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  data() {
    return {
      // swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
      //     // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
      //     notNextTick: true,
      //     autoplay: 3000,
      //     setWrapperSize :true,
      //     autoHeight: true,
      //     pagination : '.swiper-pagination',
      //     paginationClickable :true,
      //   }
    };
  },
  components: {
    AllHeader,
    AllFooter,
    // swiper,
    // swiperSlide
  },
  mounted() {
  }
};
</script>
<style lang="scss">
@import "../../style/mixin.scss";
.inner {
  width: 90%;
  margin: 100px auto;
}
.info {
  h1 {
    color: $fc;
  }
  i {
    font-size: 40px;
  }
}
.swiper-container {
  width: 600px;
  height: 300px;
  font-size: 30px;
  // margin: 10px auto;
  text-align: center;
  background-color: #fff;
}
</style>
