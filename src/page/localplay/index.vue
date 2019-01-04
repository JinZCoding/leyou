<template>
  <div class="localplay">
    <all-header banner="当地游玩"></all-header>
    <div>
      <div>
        <div class="cityItem current_city">
          <img src="../../assets/img/glbg.png" width="100%" alt>
          <!-- <i class="iconfont">&#xe758;</i> -->
          <div class="pic">
            <img src="../../assets/img/beijing.jpeg" width="100%" alt>
          </div>
          <div class="caption">
            <router-link to="/city?backurl=localplay" class="gobaike">
              <i class="iconfont">&#xe758;</i>
              <h2>{{location.cityName}}</h2>
              <!-- <p>北京，简称“京”，是中华人民共和国的首都、直辖市、国家中心城市、超大城市、国际大都市，全国政治中心、文化中心、国际交往中心、科技创新中心和综合交通枢纽，是中国共产党中央委员会、中华人民共和国中央人民政府、</p> -->
            </router-link>
          </div>
        </div>
        <div class="cityItem city_desc">
          <h3>旅游攻略</h3>
          <div
            class="desc lineclamp"
          >北京，位于华北平原，有着三千余年的建城史和八百五十余年的建都史。北京是中华人民共和国首都、中央直辖市、中国国家中心城市，也是中国政治、文化、教育和国际交流中心。是一座传统与现代交融的城市。这里既有古典风韵，又具时尚气息。</div>
          <router-link to="/" tag="div" class="moreinfo">
            <span>阅读更多</span>
          </router-link>
        </div>
        <div class="cityItem play">
          <h3>看什么</h3>
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in img" :key="index">
              <img src="../../assets/img/swiper/s4.jpeg" width="100%" alt class="photo">
              <div class="name">
                <span class="t1 lineclamp" style="-webkit-line-clamp: 2;">天安门广场天安门广场天安门广场</span>
                <!-- <span class="t2">100298评价</span> -->
              </div>
            </swiper-slide>
            <swiper-slide>
              <router-link to="/" tag="div" class="moreinfo">
                <span>更多好看</span>
              </router-link>
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
                    <img :src="item.img_name" width="100%" alt>
                  </div>
                  <div class="food_name">
                    <p class="t1">{{item.name}}</p>
                    <p class="t2">
                      <strong>{{item.views}}</strong>人提起过
                    </p>
                  </div>
                </router-link>
              </li>
            </ul>
            <router-link tag="div" to="/" class="moreinfo">
              <span>更多美味</span>
            </router-link>
          </div>
        </div>
        <div class="cityItem live">
          <h3>当地攻略</h3>
          <localplay-list></localplay-list>
        </div>
      </div>
    </div>
    <div class="center_bottom">
      <i class="iconfont">&#xe890;</i>
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
import { setStore, getStore } from "../../config/util";

export default {
  data() {
    return {
      img: [1, 2, 1, 2, 1, 2, 1, 2],
      foodList: [
        {
          name: "瓷瓶儿老酸奶",
          img_name: require("@/assets/img/food_1.jpeg"),
          views: "2080"
        },
        {
          name: "炒肝",
          img_name: require("@/assets/img/food_2.jpeg"),
          views: "2010"
        },
        {
          name: "北京烤鸭",
          img_name: require("@/assets/img/food_3.jpeg"),
          views: "23322"
        },
        {
          name: "炸酱面",
          img_name: require("@/assets/img/food_4.jpeg"),
          views: "20801"
        }
      ],
      swiperOption: {
        // loop: true, // 循环模式选项
        // width: 120,
        slidesPerView: "auto",
        spaceBetween: 30
      },
      location: ""
    };
  },
  mounted() {
    if (getStore("location")) {
      // console.log(getStore("location"));
      this.location = JSON.parse(getStore("location"));
    } else {
      this.location = { cityName: "北京", pinyin: "beijing" };
    }
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
  padding: 0;
  .pic {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
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
// 多行省略
.lineclamp {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
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
