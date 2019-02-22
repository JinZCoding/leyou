<template>
  <div class="strategy">
    <all-header banner="攻略"></all-header>
    <div class="strategy_div">
      <div>
        <!-- 顶部图片 -->
        <div class="straTop">
          <router-link tag="div" :to="'/article/'+bannerInfo.article_id" class="banner_link">
            <img :src="bannerInfo.cover_img" alt>
          </router-link>
        </div>
        <!-- 热门 -->
        <div class="hot strategyItem">
          <div class="banner">
            <i class="iconfont">&#xe610;</i>
            <span>热门推荐</span>
          </div>
          <ul class="hot-list">
            <hot-strategy
              v-for="(item, index) in hotList"
              :key="index"
              :article_id="item.article_id"
              :updatetime="item.updatetime"
              :views="item.views"
              :title="item.title"
              :author="item.author"
              :cover_img="item.cover_img"
              :author_img="item.author_img"
            ></hot-strategy>
          </ul>
        </div>
        <!-- 最新攻略 -->
        <div class="new strategyItem">
          <div class="banner">
            <i class="iconfont">&#xe71e;</i>
            <span>最新攻略</span>
          </div>
          <ul class="new-list">
            <strategy-list
              v-for="(item, index) in newList"
              :key="index"
              :index="index"
              :article_id="item.article_id"
              :title="item.title"
              :author="item.author"
              :address="item.address"
            ></strategy-list>
          </ul>
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
      bannerInfo: {
        // article_id: "4",
        // cover_img: "/static/img/list_1.jpeg"
      },
      newList: [
        /*{
          article_id: "1",
          title: "标题踢踢踢踢踢踢踢ITITITii",
          author: "mokio",
          address: "日本"
        },
        {
          article_id: "2",
          title: "哎哟哟哟哟哟哟哟我滴小心脏",
          author: "william",
          address: "香港"
        },
        {
          article_id: "3",
          title: "妈咪妈咪哄",
          author: "asha",
          address: "重庆"
        }*/
      ],
      hotList: [
        /*{
          article_id: "1",
          updatetime: "2019-1-1",
          views: "290001",
          title: "一起去玩吧！",
          author: "兔子爱吃胡萝北",
          cover_img: "./static/img/hot_1.jpeg",
          author_img: "./static/img/head_1.jpeg"
        },
        {
          article_id: "2",
          updatetime: "2019-1-2",
          views: "2901",
          title: "一起去玩吧！",
          author: "兔子爱吃胡萝北",
          cover_img: "./static/img/hot_2.png",
          author_img: "./static/img/head_2.jpeg"
        },
        {
          article_id: "3",
          updatetime: "2019-1-4",
          views: "2001",
          title: "一起去玩吧！",
          author: "兔子爱吃胡萝北",
          cover_img: "./static/img/hot_1.jpeg",
          author_img: "./static/img/head_1.jpeg"
        }*/
      ]
    };
  },
  mounted() {
    this.initData();
  },
  components: {
    AllHeader,
    AllFooter,
    StrategyList,
    HotStrategy
  },
  methods: {
    initData() {
      this.$post("/api/leyou/index/queryNavigationInfoList", { type: 0 })
        .then(res => {
          // console.log(res);
          this.bannerInfo = res.data.banner;
          this.newList = res.data.newList;
          this.hotList = res.data.hotList;
        })
        .catch(() => {});
    }
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
.straTop {
  background-color: #fff;
  width: 100%;
  margin-bottom: 20px;
  .banner_link {
    width: 100%;
    height: 400px;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
.strategyItem {
  background: #fff;
  padding: 0 20px 10px;
  margin-bottom: 20px;
  .banner {
    padding: 15px 0 5px;
    i,
    span {
      font-size: 34px;
      color: #333;
    }
    i {
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
.hot-list,
.new-list {
  margin-top: 20px;
}
</style>
