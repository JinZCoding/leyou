<template>
  <div class="localplay">
    <all-header banner="当地游玩"></all-header>
    <div>
      <div>
        <div class="cityItem current_city">
          <img src="../../assets/img/glbg.png" width="100%" alt>
          <!-- <i class="iconfont">&#xe758;</i> -->
          <div class="pic">
            <img :src="cityInfo.city_img" width="100%" alt>
          </div>
          <div class="caption">
            <router-link to="/city?backurl=localplay" class="gobaike">
              <i class="iconfont">&#xe758;</i>
              <h2>{{currentLocation.cityName}}</h2>
            </router-link>
          </div>
        </div>
        <div class="cityItem city_desc">
          <h3>旅游攻略</h3>
          <div class="desc lineclamp">{{cityInfo.city_info}}</div>
          <router-link to="/" tag="div" class="moreinfo">
            <span>阅读更多</span>
          </router-link>
        </div>
        <div class="cityItem play">
          <h3>看什么</h3>
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in playList" :key="index">
              <img :src="item.playImg" width="100%" alt class="photo">
              <div class="name">
                <span class="t1 lineclamp" style="-webkit-line-clamp: 2;">{{item.playName}}</span>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="moreinfo">
                <span>更多好看</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="cityItem eat">
          <h3>吃什么</h3>
          <div class="food clear">
            <ul>
              <li v-for="(item, index) in foodList" :key="index">
                <router-link to="/">
                  <div class="food_img">
                    <img :src="item.foodImg" width="100%" alt>
                  </div>
                  <div class="food_name">
                    <p class="t1">{{item.foodName}}</p>
                    <p class="t2">
                      <strong>{{item.views}}</strong>人提起过
                    </p>
                  </div>
                </router-link>
              </li>
            </ul>
            <div class="moreinfo">
              <span>更多美味</span>
            </div>
          </div>
        </div>
        <div class="cityItem live">
          <h3>当地攻略</h3>
          <div class="localplay-list">
            <div>
              <ul class="localplay-ul">
                <localplay-list
                  v-for="(item,index) in articleList"
                  :key="index"
                  :id="item.article_id"
                  :title="item.title"
                  :cover_img="item.cover_img"
                  :author="item.author"
                  :author_img="item.author_img"
                  :views="item.views"
                  :like="item.likes"
                ></localplay-list>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="center_bottom">
      <i class="iconfont">&#xe65b;</i>
      <span>这儿全是好玩的</span>
    </div>
    <all-footer></all-footer>
  </div>
</template>
<script>
import AllFooter from "../../components/footer/footer";
import AllHeader from "../../components/header/header";
import LocalplayList from "./components/localplaylist";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { mapGetters } from "vuex"; //先要引入

export default {
  data() {
    return {
      cityInfo: {},
      img: [1, 2, 1, 2, 1, 2, 1, 2],
      playList: [],
      foodList: [],
      articleList: [],
      swiperOption: {
        // loop: true, // 循环模式选项
        // width: 120,
        slidesPerView: "auto",
        spaceBetween: 30
      },
      currentLocation: {}
    };
  },
  computed: {
    ...mapGetters(["location"])
  },
  methods: {
    initData() {
      this.$post("/api/leyou/local/queryLocalInfo", {
        city: this.currentLocation.pinyin
      })
        .then(res => {
          console.log("res====>", res);
          this.cityInfo = res.data.cityInfo;
          this.playList = res.data.cityPlay;
          this.foodList = res.data.cityFood;
          this.articleList = res.data.articleList;
        })
        .catch(err => {
          // console.log(err);
        });
    }
  },
  mounted() {
    if (this.location) {
      this.currentLocation = this.location;
    } else {
      this.currentLocation = { cityName: "北京", pinyin: "beijing" };
    }
    this.initData();
    console.log(this.currentLocation);
  },
  components: {
    AllHeader,
    AllFooter,
    LocalplayList,
    swiper,
    swiperSlide
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
.cityItem {
  margin-bottom: 20px;
  padding: 20px 35px;
  background-color: #fff;
  h3 {
    padding: 19px 0 15px;
    position: relative;
    font-size: 34px;
    color: #111;
    line-height: 1em;
    font-weight: normal;
    &::before {
      content: "";
      display: inline-block;
      width: 5px;
      height: 30px;
      background-color: #ff9d00;
      vertical-align: middle;
      margin: 0 20px 9px 0;
    }
  }
  .moreinfo {
    text-align: center;
    margin-top: 20px;
    span {
      display: inline-block;
      width: 130px;
      font-size: 26px;
      color: $fc;
      border: 1px solid $fc; /*no*/
      border-radius: 10px;
      padding: 5px 9px;
    }
  }
}
.current_city {
  position: relative;
  height: 6.1rem;
  padding: 0;
  .pic {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .caption {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 120px;
    line-height: 120px;
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.6)
    );
    .gobaike {
      display: block;
      margin: 0 50px;
      padding-bottom: 22px;
      i,
      h2 {
        display: inline-block;
        color: #fff;
        font-size: 56px;
        font-weight: 700;
      }
      h2 {
        text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.7);
      }
      i {
        font-size: 46px;
        font-weight: 400;
        padding-right: 10px;
      }
    }
  }
}
.city_desc {
  .desc {
    font-size: 30px;
    line-height: 1.5em;
    color: #333;
  }
}
.play {
  padding-bottom: 30px;
  .swiper-container {
    width: 100%;
    font-size: 30px;
    text-align: center;
    margin-right: 20px;
    height: 230px;
    img {
      height: 125px;
      border-radius: 10px;
    }
  }
  .swiper-slide {
    width: 200px;
  }
  .name {
    height: 88px;
    .t1 {
      font-weight: 700;
    }
  }
  .moreinfo {
    // line-height: 230px;
    @include center;
  }
}
.food {
  li {
    width: 50%;
    float: left;
    a {
      display: block;
      margin-bottom: 10px;
    }
    &:nth-child(2n + 1) a {
      padding-right: 10px;
    }
    &:nth-child(2n) a {
      padding-left: 10px;
    }
    .food_name {
      height: 90px;
      display: flex;
      align-items: center;
      flex-direction: column;
      .t1 {
        font-size: 32px;
      }
      .t2 {
        font-size: 26px;
        strong {
          font-size: 28px;
          color: #ff9d00;
        }
      }
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
.localplay-list {
  background-color: #fff;
  width: 100%;
}
.localplay-ul {
  li {
    position: relative;
    padding: 0 0 10px;
    border-bottom: 1px solid #eee;
    &:last-child {
      border: none;
    }
    a {
      display: block;
    }
  }
}
</style>
