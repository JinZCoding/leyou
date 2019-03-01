<template>
  <div class="note">
    <all-header banner="游记"></all-header>
    <div>
      <div class="center">
        <div class="today">
          <div class="today_travel">
            <img :src="bannerInfo.cover_img" alt>
            <router-link class="link" :to="'/article/'+bannerInfo.article_id">
              <p class="tit ellipsis">寒假带娃新选择——迪士尼邮轮亮点图鉴</p>
              <i class="iconfont">&#xe88e;</i>
            </router-link>
          </div>
        </div>
        <div class="hot">
          <div class="banner">
            <i class="iconfont">&#xe7a8;</i>
            <span>热门游记</span>
          </div>
          <div class="note_list">
            <ul>
              <hot-recommend
                v-for="(item, index) in hotList"
                :key="index"
                :id="item.article_id"
                :updatetime="item.updatetime"
                :views="item.views"
                :title="item.title"
                :author="item.author"
                :cover_img="item.cover_img"
                :author_img="item.author_img"
              ></hot-recommend>
            </ul>
          </div>
          <!-- <hot-recommend></hot-recommend> -->
        </div>
        <div class="new">
          <div class="banner">
            <i class="iconfont">&#xe71e;</i>
            <span>最新游记</span>
          </div>
          <div class="note_list">
            <ul>
              <note-list
                v-for="(item, index) in newList"
                :key="index"
                :index="index"
                :id="item.article_id"
                :title="item.title"
                :author="item.author"
                :address="item.address"
              ></note-list>
            </ul>
          </div>
          <div class="more">
            <span>查看更多</span>
          </div>
        </div>
      </div>
    </div>
    <div class="center_bottom">
      <i class="iconfont">&#xe621;</i>
      <span>每个地方，都有好玩的</span>
    </div>
    <all-footer></all-footer>
  </div>
</template>
<script>
import AllFooter from "../../components/footer/footer";
import AllHeader from "../../components/header/header";
import NoteList from "./components/notelist";
import HotRecommend from "./components/hotnote";

export default {
  data() {
    return {
      id: "1",
      bannerInfo: {
        // article_id: "4",
        // cover_img: "/static/img/today.jpeg"
      },
      hotList: [
        // {
        //   article_id: "1",
        //   updatetime: "2019-1-1",
        //   views: "290001",
        //   title: "一起去玩吧！",
        //   author: "兔子爱吃胡萝北",
        //   cover_img: "./static/img/hot_2.png",
        //   author_img: "./static/img/head_1.jpeg"
        // },
        // {
        //   article_id: "2",
        //   updatetime: "2019-1-1",
        //   views: "290001",
        //   title: "一起去玩吧！",
        //   author: "兔子爱吃胡萝北",
        //   cover_img: "./static/img/hot_1.jpeg",
        //   author_img: "./static/img/head_1.jpeg"
        // },
        // {
        //   article_id: "3",
        //   updatetime: "2019-1-1",
        //   views: "290001",
        //   title: "一起去玩吧！",
        //   author: "兔子爱吃胡萝北",
        //   cover_img: "./static/img/hot_1.jpeg",
        //   author_img: "./static/img/head_1.jpeg"
        // }
      ],
      newList: [
        // {
        //   article_id: "1",
        //   title: "标题踢踢踢踢踢踢踢ITITITii",
        //   author: "mokio",
        //   address: "日本"
        // },
        // {
        //   article_id: "2",
        //   title: "哎哟哟哟哟哟哟哟我滴小心脏",
        //   author: "william",
        //   address: "香港"
        // },
        // {
        //   article_id: "3",
        //   title: "妈咪妈咪哄",
        //   author: "asha",
        //   address: "重庆"
        // },
        // {
        //   article_id: "4",
        //   title: "标题踢踢踢踢踢踢踢ITITITii",
        //   author: "mokio",
        //   address: "日本"
        // },
        // {
        //   article_id: "5",
        //   title: "哎哟哟哟哟哟哟哟我滴小心脏",
        //   author: "william",
        //   address: "香港"
        // },
        // {
        //   article_id: "6",
        //   title: "妈咪妈咪哄",
        //   author: "asha",
        //   address: "重庆"
        // },
        // {
        //   article_id: "7",
        //   title: "标题踢踢踢踢踢踢踢ITITITii",
        //   author: "mokio",
        //   address: "日本"
        // },
        // {
        //   article_id: "8",
        //   title: "哎哟哟哟哟哟哟哟我滴小心脏",
        //   author: "william",
        //   address: "香港"
        // },
        // {
        //   article_id: "9",
        //   title: "妈咪妈咪哄",
        //   author: "asha",
        //   address: "重庆"
        // }
      ]
    };
  },
  components: {
    AllFooter,
    AllHeader,
    NoteList,
    HotRecommend
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      this.$post("/api/leyou/index/queryNavigationInfoList", { type: 1 })
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

.note {
  margin: 90px auto 0;
  padding-bottom: 100px;
}
.center {
  // @include wh(100%, 120px);
  width: 100%;
  // .today,
  .new,
  .hot {
    margin-bottom: 20px;
    padding: 10px 25px;
    background-color: #fff;
    .banner {
      display: flex;
      align-items: center;
      line-height: 60px;
      font-size: 34px;
      // padding-top: 10px;
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
  .today {
    margin-bottom: 20px;
    padding-left: 0;
    padding-right: 0;
    width: 100%;
    background: #fff;
    .banner {
      text-align: center;
      padding: 15px 0;
      span {
        font-size: 40px;
      }
    }
    .today_travel {
      position: relative;
      height: 300px;
      img {
        width: 100%;
        height: 100%;
      }
      .link {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        @include wh(100%, 100px);
        display: flex;
        align-items: center;
        background: -webkit-linear-gradient(
          top,
          transparent,
          rgba(0, 0, 0, 0.6)
        );
        .tit {
          display: inline-block;
          width: 650px;
          padding: 0 34px;
          color: #fff;
          font-size: 38px;
        }
        i {
          display: inline-block;
          color: #fff;
          margin-bottom: -10px;
          font-size: 60px !important;
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
  }
}
.more {
  font-size: 28px;
  text-align: center;
  margin: 10px 0;
  padding-top: 10px;
  span {
    display: inline-block;
    border: 1px solid $fc;
    padding: 10px 15px;
    border-radius: 10px;
    color: $fc;
  }
}
.note_list {
  margin-top: 20px;
}
</style>
