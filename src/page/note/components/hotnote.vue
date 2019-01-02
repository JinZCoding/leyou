<template>
  <div class="hot-item">
    <ul>
      <router-link tag="li" to="/" class="hot-li-items" v-for="(item, index) in list" :key="index">
        <img src="../../../assets/img/hot_1.jpeg" alt>
        <div class="layout">
          <div class="one">
            <span class="travels_time">2019-1-1</span>
            <span class="browse">
              <i class="iconfont">&#xe650;</i>290001
            </span>
          </div>
          <div class="two">
            <span class="ellipsis">标题标题标题标题标题标题标题标题标题标题标题标题标题</span>
          </div>
          <div class="three">
            <div class="avatar">
              <img src="../../../assets/img/head_1.jpeg" alt>
            </div>
            <div class="likes">
              <!-- <i class="iconfont">&#xe88c;</i> -->
            </div>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HotRecommend",
  data() {
    return {
      list: [1, 2, 3]
    };
  }
};
</script>
<style lang="scss">
@import "../../../style/mixin.scss";

.hot-item {
  margin-top: 20px;
  .hot-li-items {
    // padding: 15px 0;
    margin-bottom: 20px;
    position: relative;
    & > img {
      @include wh(100%, 100%);
      border-radius: 10px;
      vertical-align: middle;
    }
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
      img {
        @include wh(80px, 80px);
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
