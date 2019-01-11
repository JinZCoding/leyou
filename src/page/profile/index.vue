<template>
  <div class="profile">
    <!-- <all-header banner="个人中心"></all-header> -->
    <div class="profile_header">
      <span>个人中心</span>
    </div>
    <div class="profilepage">
      <div class="page_top">
        <div class="me">
          <div class="pro_left">
            <span class="avatar">
              <img src="../../assets/img/head_1.jpeg" alt>
            </span>
            <span class="name">阿圣嗷嗷嗷</span>
          </div>
          <div class="pro_right">
            <span class="pro_link">个人信息</span>
            <span class="right_row">
              <i class="iconfont">&#xe88e;</i>
            </span>
          </div>
        </div>
      </div>
      <div class="page_bottom">
        <div>
          <div class="one">
            <div class="likes">
              <span class="icon">
                <i class="iconfont">&#xe88b;</i>
              </span>
              <span class="font">我的喜欢</span>
            </div>
            <div class="praises">
              <span class="icon">
                <i class="iconfont">&#xe873;</i>
              </span>
              <span class="font">我的赞</span>
            </div>
            <div class="favorites">
              <span class="icon">
                <i class="iconfont">&#xe86d;</i>
              </span>
              <span class="font">我的收藏</span>
            </div>
          </div>
          <div class="two my_articles">
            <div class="article_tit">
              <h3>我的旅行</h3>
            </div>
            <div class="article_info">
              <div class="put_button">
                <span>
                  <i class="iconfont">&#xe65c;</i>
                </span>
                <span>分享你的旅行</span>
              </div>
              <div class="tips">
                <span>用文字记录旅行的小技巧</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <all-footer></all-footer>
  </div>
</template>
<script>
import AllHeader from "../../components/header/header";
import AllFooter from "../../components/footer/footer";
export default {
  components: {
    AllHeader,
    AllFooter
  }
};
</script>
<style lang="scss">
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
}
.profilepage {
  // margin: 90px auto 0;
  // padding-top: 90px;
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
        font-weight: 700;
        color: #333;
      }
      i {
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
        i {
          color: #fedb09;
          font-size: 60px;
        }
      }
      .font {
        font-size: 28px;
      }
    }
  }
  .two {
    .article_info {
      @include fj(center);
      flex-direction: column;
      align-items: center;
      .put_button {
        margin: 15px auto 20px;
        // @include wh(400px, 90px);
        // width: 400px;
        padding: 30px 55px;
        @include fj(center);
        align-items: center;
        background-color: rgb(255,235,121);;
        text-align: center;
        border-radius: 65px;
        span{
          font-size: 36px;
          font-weight: 700;
          i{
            font-size: 45px;
            margin-right: 20px;
          }
        }
        
      }
    }
    .tips{
      padding-top: 10px;
      span{
        font-size: 26px;
        color: #75b2e4;
      }
    }

  }
}
</style>

