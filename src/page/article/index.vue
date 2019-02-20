<template>
  <div>
    <div class="articleHeader" :class="{'scrollCover': coverHeader}">
      <div class="header_left">
        <div @click="goBack">
          <i class="iconfont">&#xe629;</i>
        </div>
      </div>
      <div class="header_center" v-if="coverHeader">
        <h2 class="ellipsis">{{articledetails.title}}</h2>
      </div>
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
            <h4 class="t1 lineclamp">{{articledetails.title}}</h4>
            <p class="time">
              创建于
              <strong>{{articledetails.updatetime}}</strong>
            </p>
            <p class="address">
              <i class="iconfont">&#xe89a;</i>
              {{articledetails.address}}
            </p>
          </div>
          <div class="article_detail">
            <div v-html="articledetails.content"></div>
          </div>
          <div class="copy">
            <p>
              本游记著作权归@
              <i>{{articledetails.author}}</i>所有，任何形式转载请联系作者。
            </p>
            <p>&copy; 2019 leyou</p>
            <span>- THE END -</span>
          </div>
        </div>
        <div class="article_reply">
          <div>
            <h4>回复</h4>
            <div v-if="replylen">
              <div class="reply_ul">
                <li class="replyItem" v-for="(item, index) in replyList" :key="index">
                  <div class="readers left">
                    <img :src="item.author_img" alt>
                  </div>
                  <div class="reply_desc">
                    <span class="author">{{item.author}}</span>
                    <p class="replyone">{{item.reply_content}}</p>
                  </div>
                </li>
              </div>
              <div class="moreReply" v-if="showMore" @click="goReply">
                <span>查看全部{{replylen}}条回复</span>
              </div>
            </div>
            <div class="noreply" v-else>
              <span>快来发表你的评论吧~</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="articleFooter">
      <div @click="goReply">
        <i class="iconfont">&#xe891;</i>
      </div>
      <div @click="collect = !collect">
        <i class="iconfont" v-if="collect">&#xe871;</i>
        <i class="iconfont" v-else>&#xe872;</i>
      </div>
      <div @click="thanks = !thanks">
        <i class="iconfont" v-if="thanks">&#xe88b;</i>
        <i class="iconfont" v-else>&#xe88c;</i>
      </div>
      <div @click="likes = !likes">
        <i class="iconfont" v-if="likes">&#xe873;</i>
        <i class="iconfont" v-else>&#xe874;</i>
      </div>
    </div>
  </div>
</template>
<script>
import { apiUrl } from "apiUrl/index";

export default {
  data() {
    return {
      articledetails: {},
      coverHeader: false,
      replylen: 0,
      replyList: [],
      collect: false, //收藏
      thanks: false, //感谢
      likes: false //喜欢
    };
  },
  computed: {
    // 判断回复数>5显示 查看全部
    showMore() {
      if (this.replylen > 5) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.scrollTop);
    this.initData();
  },
  methods: {
    // 初始化页面
    initData() {
      this.article_id = this.$route.params.id;
      // console.log(this.article_id);
      this.$post("/api/leyou/article/queryArticleDetails", {
        article_id: this.article_id
      })
        .then(res => {
          // console.log(res);
          this.articledetails = res.data.articleDetails;
          this.replyList = res.data.replylist;
          this.replylen = this.replyList.length;
          // console.log(this.articledetails);
          // console.log(this.replyList);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // header样式
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
    // 前往回复页面
    goReply() {
      // console.log(this.$route.params.id)
      this.$router.push({
        path: "/reply",
        query: { id: this.$route.params.id }
      });
    },
    // 返回上一页
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
  .header_center {
    h2 {
      font-size: 34px;
      max-width: 450px;
    }
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
  // position: relative;
  padding-bottom: 120px;
  .article_cover {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .article_content {
    position: relative;
    width: 100%;
    margin-top: -40px;
    border-top-left-radius: 40px;
    background: #fff;
    padding: 30px 40px;
    .article_title {
      padding-bottom: 30px;
      border-bottom: 1px solid #eee;
      .t1 {
        padding-top: 5px;
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
    .copy {
      p,
      span,
      i {
        color: #999;
        font-size: 26px;
        text-align: left;
        line-height: 36px;
      }
      span {
        display: block;
        padding-top: 20px;
        text-align: center;
        font-weight: 700;
      }
    }
  }
  .article_reply {
    background: #fff;
    margin-top: 20px;
    border-top: 1px solid #eee;
    padding: 30px 40px 10px;
    h4 {
      font-size: 36px;
      line-height: 45px;
      &::before {
        content: "";
        display: inline-block;
        width: 10px;
        height: 30px;
        background: $fc;
        margin-right: 15px;
      }
    }
    .reply_ul {
      // padding-top: 20px;
      .replyItem {
        padding: 20px 0 25px;
        border-bottom: 1px solid #eee;
        &:last-child {
          border: none;
        }
      }
      .readers {
        @include wh(55px, 55px);
        border: 1px solid #f8f8f8;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 15px;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      .reply_desc {
        padding-left: 70px;
        .author {
          display: block;
          height: 55px;
          font-size: 32px;
          line-height: 55px;
          // font-weight: 700;
        }
        .replyone {
          font-size: 28px;
          text-align: justify;
        }
        .replyto {
          margin-top: 15px;
          padding: 15px;
          width: 100%;
          min-height: 100px;
          border-radius: 20px;
          background: #eee;
        }
      }
    }
    .moreReply {
      display: block;
      margin: 10px 0;
      text-align: center;
      span {
        font-size: 28px;
        color: $fc;
      }
    }
    .noreply {
      text-align: center;
      margin: 20px 0;
      span {
        font-size: 28px;
        color: #666;
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
