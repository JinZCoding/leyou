<template>
  <div class="note">
    <all-header banner="游记"></all-header>
    <div>
      <div class="center">
        <div class="today">
          <!-- <div class="banner">
            <span>今日推荐</span>
          </div> -->
          <div class="today_travel">
            <img src="../../assets/img/today.jpeg" alt>
            <router-link class="link" to="/">
              <p class="tit ellipsis">寒假带娃新选择——迪士尼邮轮亮点图鉴</p>
              <i class="iconfont">&#xe88e;</i>
            </router-link>
          </div>
          <!-- div.1242131231 -->
        </div>
        <div class="hot">
          <div class="banner">
            <i class="iconfont">&#xe647;</i>
            <span>热门游记</span>
          </div>
          <hot-recommend></hot-recommend>
          <router-link tag="div" to="/" class="more">
            <span>查看更多</span>
          </router-link>
        </div>
        <div class="new">
          <div class="banner">
            <i class="iconfont">&#xe71e;</i>
            <span>最新游记</span>
          </div>
          <note-list></note-list>
          <div class="more">
            <span>查看更多</span>
          </div>
        </div>
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
import NoteList from "./components/NoteList";
import HotRecommend from "./components/hotNote";

export default {
  data() {
    return {};
  },
  components: {
    AllFooter,
    AllHeader,
    NoteList,
    HotRecommend
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
</style>
