<template>
  <div>
    <div class="home_header">
      <router-link to="/city" class="home_left">
        <div>
          <i class="iconfont">&#xe89d;</i>
          <span class="home_address ellipsis">{{currentLocation}}</span>
        </div>
      </router-link>
      <div class="home_search">
        <span class="search_box">
          <input
            type="text"
            @click="goSearch"
            class="search_input"
            readonly
            placeholder="搜索目的地/攻略/游记"
          >
          <i class="iconfont">&#xe870;</i>
        </span>
      </div>
      <div class="home_right">
        <div>
          <router-link to="/profile" v-if="isLogin">
            <i class="iconfont">&#xe8a0;</i>
          </router-link>
          <router-link to="/login" class="login" v-else>登录</router-link>
        </div>
      </div>
    </div>
    <div class="home_inner">
      <div class="info">
        <!-- 导航轮播 -->
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) in swiperImgList" :key="index">
            <img :src="item" alt>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <div class="index-nav">
          <ul class="nav-ul">
            <li class="nav-li">
              <router-link to="/strategy">
                <i class="iconfont">&#xe89e;</i>
                <span>攻略</span>
              </router-link>
            </li>
            <li class="nav-li">
              <router-link to="/note">
                <i class="iconfont">&#xe89a;</i>
                <span>游记</span>
              </router-link>
            </li>
            <li class="nav-li">
              <router-link to="/localplay">
                <i class="iconfont">&#xe8a2;</i>
                <span>当地</span>
              </router-link>
            </li>
            <li class="nav-li">
              <router-link to="/record">
                <i class="iconfont">&#xe7af;</i>
                <span>随记</span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="index-list">
          <div>
            <div class="list_header">
              <span>推荐攻略</span>
            </div>
            <guide-list></guide-list>
          </div>
        </div>
      </div>
    </div>
    <scroll-top></scroll-top>
    <all-footer></all-footer>
  </div>
</template>

<script>
import AllFooter from "../../components/footer/footer";
import GuideList from "./components/guidelist";
import ScrollTop from "../../components/common/scrolltop";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      isLogin: false,
      currentLocation: "北京",
      swiperImgList: [
        "./static/img/swiper/s1.png",
        "./static/img/swiper/s2.png",
        "./static/img/swiper/s3.png",
        "./static/img/swiper/s4.jpeg"
      ],
      swiperOption: {
        loop: true, // 循环模式选项
        // 如果需要分页器
        // autoplay:true,//自动播放
        autoplay: {
          delay: 3500,
          disableOnInteraction: false //用户操作swiper之后，是否禁止autoplay。默认为true：停止。
          //如果设置为false，用户操作swiper之后自动切换不会停止，每次都会重新启动autoplay。
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      }
    };
  },
  components: {
    AllFooter,
    GuideList,
    ScrollTop,
    swiper,
    swiperSlide
  },
  computed: {
    ...mapGetters(["userInfo", "location"])
  },
  mounted() {
    // console.log("userinfo", this.userInfo);
    if (this.userInfo) {
      this.isLogin = this.userInfo.isLogin;
    }
    if (this.location) {
      this.currentLocation = this.location.cityName;
    }
  },
  methods: {
    goSearch() {
      this.$router.push("/search");
    }
  }
};
</script>
<style lang="scss">
@import "../../style/mixin.scss";
.home_header {
  background: $fc;
  position: fixed;
  top: 0;
  @include wh(100%, 90px);
  // @include fj;
  display: flex;
  align-items: center;
  // box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.03);
  padding: 0 20px;
  font-size: 28px;
  z-index: 999;
  & > div {
    display: inline-block;
  }
}
.home_left {
  display: flex;
  align-items: center;
  width: 20%;
  margin-right: 20px;
  .home_address {
    display: inline-block;
    width: 70px;
    font-size: 30px;
    color: #fff;
    padding-left: 7px;
  }
}
.home_search {
  width: 60%;
  .search_box {
    display: inline-block;
    @include wh(100%, 60px);
    background: #fff;
    // border-bottom: 1px solid #fff;
    border: 1px solid #fff;
    border-radius: 30px;
    display: flex;
    align-items: center;
    .search_input {
      @include wh(80%, 60px);
      margin-left: 30px;
      // padding-left: 5px;
      font-size: 30px;
    }
    .iconfont {
      color: $fc;
      float: right;
    }
  }
}
.home_right {
  position: absolute;
  right: 20px;
  min-width: 50px;
  .login,
  span {
    font-size: 30px;
    display: inline-block;
    color: #fff;
  }
}
.iconfont {
  color: #fff;
  font-size: 44px;
}
.home_inner {
  // width: 90%;
  margin: 90px auto 0;
  padding-bottom: 100px;
}
// 轮播图
.swiper-container {
  @include wh(100%, 400px);
  font-size: 30px;
  // margin: 10px auto;
  text-align: center;
  // background-color: #fff;
  img {
    @include wh(100%, 100%);
  }
}
.swiper-pagination-bullet-active {
  background: $fc;
}
//导航
.index-nav {
  @include wh(100%, 160px);
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.03);
  background: #fff;
  padding: 15px 25px;
  .nav-ul {
    @include wh(100%, 100%);
    @include fj;
    align-items: center;
  }
  .nav-li {
    flex: 1;
    i {
      display: block;
      text-align: center;
      color: $fc;
      font-size: 72px;
    }
    span {
      display: block;
      width: 100%;
      padding-top: 10px;
      text-align: center;
      line-height: 1em;
      font-size: 26px;
    }
  }
}
//下面推荐列表
.index-list {
  width: 100%;
  .list_header {
    line-height: 60px;
    text-align: center;
    font-size: 25px;
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.03);
    span {
      color: #999;
    }
  }
}
</style>
