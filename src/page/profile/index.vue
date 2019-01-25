<template>
  <div class="profile">
    <!-- <all-header banner="个人中心"></all-header> -->
    <div class="profile_header">
      <span class="pro_tit">个人中心</span>
      <span class="logout" @click="logout">
        <i class="iconfont">&#xe673;</i>
      </span>
    </div>
    <div class="profilepage">
      <div class="page_top">
        <router-link to="/profile/personal" tag="div" class="me">
          <!-- <div class="me" @click="personalShow=true"> -->
          <div class="pro_left">
            <span class="avatar">
              <img src="../../assets/img/head_1.jpeg" alt>
            </span>
            <span class="name">阿圣嗷嗷嗷</span>
          </div>
          <div class="pro_right">
            <!-- <span class="pro_link">个人信息</span> -->
            <span class="right_row">
              <i class="iconfont">&#xe88e;</i>
            </span>
          </div>
          <!-- </div> -->
        </router-link>
      </div>
      <div class="page_bottom">
        <div>
          <div class="one">
            <router-link
              :to="{path:'/profile/interest', query: {active:0}}"
              tag="div"
              class="likes"
            >
              <span class="icon">
                <!-- <i class="iconfont">&#xe88b;</i> -->
                <img src="../../assets/img/xihuan_.png" width="30px" alt>
              </span>
              <span class="font">我的喜欢</span>
            </router-link>
            <router-link
              :to="{path:'/profile/interest', query: {active:1}}"
              tag="div"
              class="praises"
            >
              <span class="icon">
                <!-- <i class="iconfont">&#xe873;</i> -->
                <img src="../../assets/img/dianzan.png" width="30px" alt>
              </span>
              <span class="font">我的赞</span>
            </router-link>
            <router-link
              :to="{path:'/profile/interest', query: {active:2}}"
              tag="div"
              class="favorites"
            >
              <span class="icon">
                <!-- <i class="iconfont">&#xe86d;</i> -->
                <img src="../../assets/img/shoucang_.png" width="30px" alt>
              </span>
              <span class="font">我的收藏</span>
            </router-link>
          </div>
          <div class="two my_articles">
            <div class="article_tit">
              <h3>我的旅行</h3>
            </div>
            <div class="article_info">
              <router-link to="/release" tag="div" class="put_button">
                <span>
                  <i class="iconfont">&#xe67e;</i>
                </span>
                <span>分享你的旅行</span>
              </router-link>
              <div class="tips">
                <span>用文字记录旅行的小技巧</span>
              </div>
              <div class="article_class">
                <router-link :to="{path:'/profile/mywritten', query: {active:0}}" tag="span">游记</router-link>
                <router-link :to="{path:'/profile/mywritten', query: {active:1}}" tag="span">攻略</router-link>
                <router-link :to="{path:'/profile/mywritten', query: {active:2}}" tag="span">评价</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <all-footer></all-footer>
  </div>
</template>
<script>
import AllHeader from "../../components/header/header";
import AllFooter from "../../components/footer/footer";
import { Popup, Dialog } from "vant";

export default {
  data() {
    return {
      isLogin: false
    };
  },
  components: {
    AllHeader,
    AllFooter
  },
  methods: {
    logout() {
      Dialog.confirm({
        title: "退出登录",
        message: "确认退出？"
      })
        .then(() => {
          // on confirm
          console.log("退出登录");
        })
        .catch(() => {
          // on cancel
        });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../../style/mixin.scss";
.profile_header {
  @include wh(100%, 90px);
  position: fixed;
  top: 0;
  background-color: #fedb09;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  z-index: 200;
  span {
    color: #fff;
  }
  .logout {
    position: absolute;
    right: 30px;
    i {
      font-size: 40px;
      color: #fff;
    }
  }
}
.profilepage {
  padding-bottom: 100px;
  width: 100%;
  .page_top {
    padding: 90px 30px 0;
    @include wh(100%, 350px);
    background-color: #fedb09;
  }
  .page_bottom {
    // background-color: #fff;
    margin: -50px 30px 0;
    // img{
    //   @include wh(100px,100px);
    // }
  }
}
.page_top {
  .me {
    @include wh(100%, 200px);
    @include fj;
    align-items: center;
    .pro_left {
      display: flex;
      align-items: center;
      .avatar {
        @include wh(120px, 120px);
        margin-right: 20px;
        img {
          @include wh(100%, 100%);
          border-radius: 50%;
        }
      }
      .name {
        font-size: 38px;
        font-weight: 700;
      }
    }
    .pro_right {
      display: flex;
      align-items: center;
      span,
      i {
        font-size: 30px;
        color: #333;
      }
      i {
        font-weight: 700;
        font-size: 50px;
      }
    }
  }
}
.page_bottom {
  .one,
  .two {
    // @include wh(100%, 180px);
    width: 100%;
    background: #fff;
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 30px 25px;
    box-shadow: 0 5px 10px #eee;
  }
  .one {
    @include fj(space-around);
    align-items: center;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      .icon {
        margin-bottom: 5px;
      }
      .font {
        font-size: 28px;
      }
    }
  }
  .two {
    .article_tit {
      h3 {
        font-size: 28px;
        font-weight: 700;
      }
    }
    .article_info {
      @include fj(center);
      flex-direction: column;
      align-items: center;

      .put_button {
        margin: 15px auto 20px;
        // @include wh(400px, 90px);
        // width: 400px;
        padding: 20px 55px;
        @include fj(center);
        align-items: center;
        background-color: rgb(255, 235, 121);
        text-align: center;
        border-radius: 65px;
        span {
          font-size: 32px;
          font-weight: 700;
          i {
            font-size: 45px;
            margin-right: 20px;
          }
        }
      }
    }
    .tips {
      padding-top: 10px;
      span {
        font-size: 26px;
        color: #75b2e4;
      }
    }
    .article_class {
      margin: 40px 0 25px;
      span {
        font-size: 26px;
        padding: 0 30px;
        border-right: 1px solid #999;
        &:last-child {
          border: none;
        }
      }
    }
  }
}
</style>

