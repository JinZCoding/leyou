<template>
  <div class="hot-item">
    <ul>
      <router-link tag="li" :to="'/article/'+item.id" class="hot-li-items" v-for="(item, index) in list" :key="index">
        <img :src="item.cover_img" alt>
        <div class="layout">
          <div class="one">
            <span class="travels_time">{{item.traveltime}}</span>
            <span class="browse">
              <i class="iconfont">&#xe650;</i>
              {{item.views}}
            </span>
          </div>
          <div class="two">
            <span class="ellipsis">{{item.title}}</span>
          </div>
          <div class="three">
            <div class="avatar">
              <img :src="item.author_img" alt>
            </div>
            <!-- <div class="likes">
              <i class="iconfont">&#xe88c;</i>
            </div>-->
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HotStrategy",
  data() {
    return {
      list: [
        {
          id:"1",
          traveltime: "2019-1-1",
          views: "290001",
          title: "一起去玩吧！",
          author: "兔子爱吃胡萝北",
          cover_img: "./static/img/hot_1.jpeg",
          author_img: "./static/img/head_1.jpeg"
        },
        {
          id:"2",
          traveltime: "2019-1-2",
          views: "2901",
          title: "一起去玩吧！",
          author: "兔子爱吃胡萝北",
          cover_img: "./static/img/hot_2.png",
          author_img: "./static/img/head_2.jpeg"
        },
        {
          id:"3",
          traveltime: "2019-1-4",
          views: "2001",
          title: "一起去玩吧！",
          author: "兔子爱吃胡萝北",
          cover_img: "./static/img/hot_1.jpeg",
          author_img: "./static/img/head_1.jpeg"
        }
      ]
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
