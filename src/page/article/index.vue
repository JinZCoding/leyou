<template>
  <div>
    <div class="articleHeader" :class="{'scrollCover': coverHeader}">
      <div class="header_left">
        <div @click="goBack">
          <i class="iconfont">&#xe629;</i>
        </div>
      </div>
      <!-- <div class="header_center">
        <h2>{{title}}</h2>
      </div>-->
      <div class="header_right">
        <i class="iconfont">&#xe603;</i>
      </div>
    </div>
    <div class="articlePage">
      <div>
        <div class="article_cover">
          <img src="../../assets/img/cover.jpeg" alt>
        </div>
        <div class="article_content">
          <div class="article_title">
            <h4 class="t1 lineclamp">「天鹅湖」太阳斜斜的照着俄罗斯的浪漫主义</h4>
            <p class="time">
              创建于
              <strong>2018-12-24</strong>
            </p>
            <p class="address">
              <i class="iconfont">&#xe89a;</i>
              俄罗斯
            </p>
          </div>
          <div class="article_detail">
            <p>
              天鹅湖有不同版本的结局，一个结局里，王子和公主双双坠入悬崖，却感动了上天，成功复活，
              从此解除了魔咒，是所有童话故事都有的幸福结局。
            </p>
            <p>悲剧版的结局里，王子和公主殉情，天鹅们的魔咒被解除，恶魔也死去。</p>
            <p>还有一个残忍的版本里，恶魔杀死了王子，天鹅依然没有变回公主，并被恶魔带走。</p>
            <p>
              天鹅湖的故事好多人都知道，《天鹅湖》的旋律好多人都记得，正如我来到俄罗斯之前，只知道柴可夫斯基，
              还有这个被国人称为“战斗名族”的国家。
            </p>
            <p>
              从莫斯科到圣彼得堡的10天，我把它们浓缩在这4分钟的音乐和视频里。
              音乐的名字就大言不惭的叫做《天鹅湖》吧。
              这4分钟也许不够精彩，歌也不一定动听，但是我还是想通过这样的方式来表达自己对俄罗斯这个国家的喜爱。
            </p>
            <p>《天鹅湖》致敬最最伟大的柴可夫斯基。</p>
            <div class="img_cover">
              <img src="../../assets/img/cover.jpeg" alt>
            </div>
            <p>
              昨晚在机场排队入关的时候跟一个经常来俄罗斯出差的国人聊天，得知俄罗斯最好吃性价比最高的快餐莫过于肯德基。
              从克里姆林宫出来，一分钟都不想耽误的直奔红场后面的那条街，找到一家肯德基，点了两个套餐
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="articleFooter">
      <div>
        <i class="iconfont">&#xe891;</i>
      </div>
      <div>
        <i class="iconfont">&#xe872;</i>
      </div>
      <div>
        <i class="iconfont">&#xe88c;</i>
      </div>
      <div>
        <i class="iconfont">&#xe874;</i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "hihii",
      coverHeader: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollTop);
  },
  methods: {
    scrollTop() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop > 200) {
        this.coverHeader = true;
      } else {
        this.coverHeader = false;
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
@import "../../style/mixin.scss";
.articleHeader {
  background: transparent;
  position: fixed;
  top: 0;
  @include wh(100%, 90px);
  display: flex;
  align-items: center;
  padding: 0 25px;
  font-size: 28px;
  z-index: 111;
  // border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  & > div {
    display: inline-block;
  }
  .iconfont {
    // color: rgb(242, 148, 7);
    color: #fff;
    font-size: 44px;
    display: inline-block;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    // border: 1px solid rgba(0, 0, 0, 0.09);
  }
  .header_left {
    margin-right: 20px;
  }
  .header_right {
    position: absolute;
    right: 25px;
  }
}
.scrollCover {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  .iconfont {
    color: rgb(242, 148, 7);
    font-size: 44px;
    display: inline-block;
    background-color: transparent;
    padding: 10px;
  }
}
.articlePage {
  position: relative;
  .article_cover {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .article_content {
    position: absolute;
    width: 100%;
    margin-top: -40px;
    border-top-left-radius: 40px;
    background: #fff;
    padding: 30px 40px 140px;
    .article_title {
      padding-bottom: 30px;
      border-bottom: 1px solid #eee;
      .t1 {
        font-size: 40px;
        font-weight: 700;
        -webkit-line-clamp: 2;
        padding-bottom: 15px;
      }
      .time {
        font-size: 24px;
        color: #999;
        font-weight: normal;
        padding-bottom: 5px;
        strong {
          font-weight: normal;
        }
      }
      .address {
        font-size: 26px;
        color: #666;
        i {
          font-size: 34px;
          color: #666;
        }
      }
    }
    .article_detail {
      padding-top: 20px;
      p {
        font-size: 30px;
        line-height: 1.4em;
        letter-spacing: 0.02em;
        text-align: justify;
        margin-bottom: 1em;
      }
      .img_cover {
        width: 100%;
        margin: 10px 0;
        img {
          width: 100%;
        }
      }
    }
  }
}
.articleFooter {
  @include wh(100%, 100px);
  background-color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  @include fj(space-around);
  align-items: center;
  z-index: 111;
  i {
    font-size: 45px;
    color: $fc;
    font-weight: 700;
  }
}
</style>
