<template>
  <router-link tag="li" :to="'/article/'+article_id" class="hot-li-items">
    <img :src="cover_img?cover_img:'/static/img/list_5.jpeg'" alt>
    <div class="layout">
      <div class="one">
        <span class="travels_time">{{updatetime}}</span>
        <span class="browse">
          <i class="iconfont">&#xe650;</i>
          {{views}}
        </span>
      </div>
      <div class="two">
        <span class="ellipsis">{{title}}</span>
      </div>
      <div class="three">
        <div class="avatar">
          <img :src="author_img" alt>
        </div>
        <!-- <div class="likes">
              <i class="iconfont">&#xe88c;</i>
        </div>-->
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "HotStrategy",
  data() {
    return {};
  },
  props: [
    "index",
    "article_id",
    "updatetime",
    "views",
    "title",
    "author",
    "cover_img",
    "author_img"
  ]
};
</script>
<style lang="scss">
@import "../../../style/mixin.scss";
.hot-li-items {
  // padding: 15px 0;
  margin-bottom: 20px;
  position: relative;
  & > img {
    @include wh(100%, 100%);
    max-height: 400px;
    border-radius: 10px;
    vertical-align: middle;
  }
}
.layout {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(51, 51, 51, 0.4);
  border-radius: 10px;
  padding: 15px 26px;
  color: #fff;
  .one {
    font-size: 24px;
    padding-bottom: 15px;
    span {
      display: inline-block;
    }
    .travels_time {
      font-size: 28px;
    }
    .browse {
      padding-left: 25px;
      i {
        color: #fff;
        font-size: 28px;
        padding-right: 5px;
      }
    }
  }
  .two {
    font-size: 35px;
    span {
      display: inline-block;
      width: 100%;
    }
  }
  .one,
  .two {
    span {
      color: #fff;
    }
  }
  .three {
    .avatar {
      position: absolute;
      bottom: 20px;
      right: 36px;
      img {
        @include wh(80px, 80px);
        border-radius: 50%;
      }
    }
    .likes {
      position: absolute;
      bottom: 20px;
      right: 28px;
      i {
        color: #000;
        font-size: 57px;
      }
    }
  }
}
</style>
