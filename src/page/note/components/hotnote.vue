<template>
  <router-link tag="li" class="hot-li-items" :to="'/article/'+id">
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
        <div class="likes">
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "HotRecommend",
  data() {
    return {
    }
  },
  props: [
    "id",
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
  height: 400px;
  & > img {
    @include wh(100%, 100%);
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
    font-size: 32px;
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
      left: 26px;
      @include wh(80px, 80px);
      img {
        @include wh(100%, 100%);
        border-radius: 50%;
      }
    }
    .likes {
      position: absolute;
      bottom: 20px;
      right: 28px;
      //   background-color: #fff;
      i {
        color: #000;
        font-size: 57px;
      }
    }
  }
}
</style>
