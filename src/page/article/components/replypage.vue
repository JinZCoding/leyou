<template>
  <div class="reply">
    <all-header banner="全部回复"></all-header>
    <div class="reply-div">
      <div>
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
      </div>
    </div>
    <div class="bottom_reply_inp">
      <div class="inner">
        <input type="text" placeholder="想组队，先回复">
      </div>
    </div>
    <!-- <div class="reply_input">
      <div class="input_inner">
        <input type="text" placeholder="想组队，先回复">
      </div>
      <div class="send_reply">
        <span class="send">发送</span>
      </div>
    </div>-->
  </div>
</template>
<script>
import AllHeader from "../../../components/header/header";

export default {
  data() {
    return {
      replyList: [],
      showReply: false
    };
  },
  mounted() {
    // console.log(this.$route.query.id);
    this.initReply();
  },
  components: {
    AllHeader
  },
  methods: {
    initReply() {
      this.$post("/api/leyou/article/queryAllReplyList", {
        article_id: this.$route.query.id
      })
        .then(res => {
          // console.log(res.data);
          this.replyList = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss">
@import "../../../style/mixin.scss";
.reply-div {
  padding: 100px 0 100px 30px;
  background: #fff;
  .reply_ul {
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
        font-size: 34px;
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
}
.bottom_reply_inp {
  position: fixed;
  bottom: 0;
  @include wh(100%, 100px);
  background: #fff;
  box-shadow: 0 -1px 20px 3px rgba(0, 0, 0, 0.07);
  @include fj(center);
  align-items: center;
  .inner {
    @include wh(95%, 80%);
    // @include fj(center);
    // align-items: center;
    background: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    input {
      @include wh(100%, 100%);
      padding: 15px 25px;
    }
  }
}
.reply_input {
  position: fixed;
  bottom: 0;
  @include wh(100%, 140px);
  background: #fff;
  box-shadow: 0 -1px 20px 3px rgba(0, 0, 0, 0.07);
  @include fj(center);
  flex-direction: column;
  .input_inner {
    @include wh(95%, 80px);
    padding: 10px 0;
    margin: 0 auto;
    input {
      @include wh(100%, 100%);
      padding: 15px 20px;
    }
  }
  .send_reply {
    @include fj(flex-end);
    margin: 5px 35px 10px 0;
    span {
      font-size: 28px;
      color: $fc;
    }
  }
}
</style>
